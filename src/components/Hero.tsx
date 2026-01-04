import { portfolioData } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
    const { profile } = portfolioData;

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>Available for Hire</div>
                <h1 className={styles.title}>
                    Hello, I'm {profile.name}.
                    <br />
                    <span className={styles.role}>{profile.role}</span>
                </h1>
                <p className={styles.bio}>{profile.bio}</p>
                <div className={styles.actions}>
                    <a href="#work" className={styles.primaryBtn}>View Work</a>
                    <div className={styles.socials}>
                        {profile.social.map((link) => (
                            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
