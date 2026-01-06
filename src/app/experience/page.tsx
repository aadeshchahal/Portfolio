import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import styles from '../page.module.css';

export default function ExperiencePage() {
    return (
        <main className={styles.main}>
            <section style={{ paddingTop: '4rem' }}>
                {/* Experience component already has padding/container, just needs wrapper */}
                <Experience compact={false} />
            </section>

            <Footer />
        </main>
    );
}
