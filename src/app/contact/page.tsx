import Footer from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';
import styles from '../page.module.css'; // Reuse main page styles
import contactStyles from './page.module.css';

export default function ContactPage() {
    const { profile } = portfolioData;

    return (
        <main className={styles.main}>
            <section className={styles.section} style={{ paddingTop: '8rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className={styles.container}>
                    <div className={contactStyles.card}>
                        <h1 className={contactStyles.title}>Get in Touch</h1>
                        <p className={contactStyles.subtitle}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className={contactStyles.infoGrid}>

                            {/* Email */}
                            <div className={contactStyles.infoItem}>
                                <span className={contactStyles.label}>Email</span>
                                <a href={`mailto:${profile.email}`} className={contactStyles.value}>{profile.email}</a>
                            </div>

                            {/* Phone */}
                            <div className={contactStyles.infoItem}>
                                <span className={contactStyles.label}>Phone</span>
                                <a href={`tel:${profile.phone}`} className={contactStyles.value}>{profile.phone}</a>
                            </div>

                            {/* Socials */}
                            <div className={contactStyles.infoItem}>
                                <span className={contactStyles.label}>Socials</span>
                                <div className={contactStyles.socialLinks}>
                                    {profile.social.map(link => (
                                        <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className={contactStyles.link}>
                                            {link.platform} →
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
