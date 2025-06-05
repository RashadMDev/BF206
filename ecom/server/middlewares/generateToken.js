
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
      const authHeader = req.headers.authorization;

      if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];

            try {
                  const decoded = jwt.verify(token, process.env.JWT_SECRET);
                  req.user = decoded; // istifadəçini req obyektinə əlavə et
                  next();
            } catch (err) {
                  return res.status(401).json({ message: 'Token etibarsızdır' });
            }
      } else {
            return res.status(401).json({ message: 'Token yoxdur' });
      }
};

