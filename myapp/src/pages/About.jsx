import React from 'react';
import styles from './About.module.css';

const teamMembers = [
      { name: 'Aysel Qasımova', role: 'CEO', bio: 'Strateji liderlik və innovasiya üzrə 10 ildən artıq təcrübə.' },
      { name: 'Murad Əliyev', role: 'CTO', bio: 'Texnologiya və proqram təminatı sahəsində ixtisaslaşmışdır.' },
      { name: 'Leyla Məmmədova', role: 'UX Designer', bio: 'İstifadəçi təcrübəsini daha səmərəli etmək üçün çalışır.' },
      { name: 'Rauf Həsənli', role: 'Frontend Developer', bio: 'React, TypeScript və performans optimizasiyası ilə maraqlanır.' },
];

const values = [
      'İnnovasiya',
      'Şəffaflıq',
      'Komanda işi',
      'Müştəri məmnuniyyəti',
];

const About = () => {
      return (
            <div className={styles.container}>
                  <h1>Biz Kimik?</h1>
                  <p className={styles.description}>
                        2015-ci ildə qurulan firmamız texnologiya və dizayn sahəsində qabaqcıl həllər təqdim edir.
                        Məqsədimiz müştərilərimizə yüksək keyfiyyətli məhsullar və xidmətlər təqdim etməkdir.
                  </p>

                  <section>
                        <h2>Əsas Dəyərlərimiz</h2>
                        <ul className={styles.valuesList}>
                              {values.map((val, idx) => (
                                    <li key={idx}>{val}</li>
                              ))}
                        </ul>
                  </section>

                  <section>
                        <h2>Komanda Üzvləri</h2>
                        <div className={styles.team}>
                              {teamMembers.map((member, idx) => (
                                    <div key={idx} className={styles.card}>
                                          <h3>{member.name}</h3>
                                          <p className={styles.role}>{member.role}</p>
                                          <p>{member.bio}</p>
                                    </div>
                              ))}
                        </div>
                  </section>

                  <section>
                        <h2>Tarixçəmiz</h2>
                        <p className={styles.timeline}>
                              - 2015: Şirkətimizin təməli qoyuldu. <br />
                              - 2017: İlk beynəlxalq müştəri ilə əməkdaşlıq. <br />
                              - 2020: Komandamız 20 nəfərə çatdı. <br />
                              - 2024: Yeni məhsulumuz bazara təqdim edildi.
                        </p>
                  </section>
            </div>
      );
};

export default About;
