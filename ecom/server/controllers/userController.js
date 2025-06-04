import User from "../models/User.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

function createTransporter() {
      return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASS
            }
      });
}


export const getUsers = async (req, res) => {
      try {
            const users = await User.find();
            res.json(users);
      } catch (error) {
            res.status(500).json({ message: 'Server error' });

      }
}

export const register = async (req, res) => {
      const { username, email, password } = req.body;

      try {
            const existingUser = await User.findOne({
                  $or: [
                        { username: username },
                        { email: email }
                  ]
            });
            if (existingUser) {
                  return res.status(400).json({ message: 'Username or email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 15);
            const newUser = new User({ username, email, password: hashedPassword });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
      } catch (error) {
            res.status(500).json({ message: 'Server error' });
      }
}

export const login = async (req, res) => {
      const { email, password } = req.body;
      try {
            const users = await User.find({ email: email });
            if (users.length === 0) {
                  return res.status(400).json({ message: 'Invalid email or password' });
            }
            else {
                  const comparedPassword = await bcrypt.compare(password, users[0].password);
                  if (!comparedPassword) {
                        return res.status(400).json({ message: 'Invalid password' });
                  }
                  const verifyPassword = Math.floor(Math.random() * 999999);
                  users[0].confirmPassword = verifyPassword;
                  await users[0].save();
                  const transporter = createTransporter();

                  const mailOptions = {
                        from: process.env.GMAIL_USER,
                        to: email,
                        subject: 'Verify your email',
                        text: 'Bu test emailidir.',
                        html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h2 style="color: #333333;">Salam, ${users[0].username} 👋</h2>
        <p style="font-size: 16px; color: #555555;">Hesabınıza giriş etməyə çalışdınız. Bu, sizin üçün bir təhlükəsizlik təsdiqidir.</p>
        <p style="font-size: 16px; color: #555555;">Əgər bu giriş siz deyilsinizsə, zəhmət olmasa dərhal şifrənizi dəyişin və bizimlə əlaqə saxlayın.</p>
        <div style="margin: 30px 0; text-align: center;">
          <span style="display: inline-block; font-size: 22px; font-weight: bold; color: #2e7d32; background-color: #e8f5e9; padding: 12px 24px; border-radius: 6px;">
            Təhlükəsizlik kodunuz: <strong>${verifyPassword}</strong>
          </span>
        </div>
        <p style="font-size: 14px; color: #999999;">Bu e-poçtu siz istəmədinizsə, sadəcə ignor edə bilərsiniz.</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eeeeee;">
        <p style="font-size: 12px; color: #aaaaaa; text-align: center;">© ${new Date().getFullYear()} Sizin Şirkətiniz. Bütün hüquqlar qorunur.</p>
      </div>
    </div>`
                  };
                  transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                              return console.error('Email göndərilmədi:', error);
                        }
                        console.log('Email göndərildi:', info.response);
                        res.status(200).json({ message: 'Login successful', users: users[0] });
                  });
            }
      } catch (error) {
            res.status(500).json({ message: 'Server error' });
      }

}

export const confirm = async (req, res) => {
      const { confirmPassword } = req.body;
      try {
            const user = await User.findOne({ confirmPassword: confirmPassword });
            if (!user) {
                  return res.status(400).json({ message: 'Invalid confirmation code' });
            }
            user.confirmPassword = null;
            await user.save();
            res.status(200).json({ message: 'Email confirmed successfully', user });
      } catch (error) {
            res.status(500).json({ message: 'Server error' });

      }
}