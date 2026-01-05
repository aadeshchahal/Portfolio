import { portfolioData } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
    const { profile } = portfolioData;

    return (
        <section className={styles.hero}>
            <div className={styles.mainContainer}>

                {/* Top Section: Intro (Left) + Image (Right) */}
                <div className={styles.topSection}>
                    <div className={styles.introLeft}>
                        <div className={styles.badge}>Available for Co-op / Internship in May 2026</div>
                        <h1 className={styles.title}>
                            Hello, I'm {profile.name}.
                            <br />
                            <span className={styles.role}>{profile.role}</span>
                        </h1>
                        <p className={styles.bio}>{profile.about}</p>

                        <div className={styles.socials}>
                            {profile.social.map((link) => (
                                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    {link.platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.imageRight}>
                        <div className={styles.profileImageWrapper}>
                            {profile.photoUrl ? (
                                <img src={profile.photoUrl} alt={profile.name} className={styles.profileImage} />
                            ) : (
                                <div className={styles.profilePlaceholder}>
                                    <span className={styles.initials}>{profile.name.charAt(0)}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Details Grid */}
                <div className={styles.bottomSection}>
                    {/* Coursework Column */}
                    <div className={styles.detailColumn}>
                        <h3 className={styles.detailTitle}>Relevant Coursework</h3>
                        <ul className={styles.courseList}>
                            {profile.coursework.map(course => (
                                <li key={course} className={styles.courseItem}>{course}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Interests Column */}
                    <div className={styles.detailColumn}>
                        <h3 className={styles.detailTitle}>Focus Areas</h3>

                        <div className={styles.interestGroup}>
                            <span className={styles.groupLabel}>Academic / Technical</span>
                            <div className={styles.tags}>
                                {profile.technicalInterests.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.interestGroup} style={{ marginTop: '1.5rem' }}>
                            <span className={styles.groupLabel}>Personal</span>
                            <div className={styles.tags}>
                                {profile.personalInterests.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
