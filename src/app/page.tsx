import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      <section className={styles.navSection}>
        <div className={styles.navContainer}>
          <Link href="/projects" className={styles.navCard}>
            <span className={styles.navLabel}>Featured Projects</span>
            <span className={styles.navArrow}>→</span>
          </Link>

          <Link href="/experience" className={styles.navCard}>
            <span className={styles.navLabel}>Work Experience</span>
            <span className={styles.navArrow}>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
