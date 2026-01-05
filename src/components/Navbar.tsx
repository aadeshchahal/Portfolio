import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Portfolio<span className={styles.dot}>.</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/projects" className={styles.link}>Featured Projects</Link>
                    <Link href="/experience" className={styles.link}>Work Experience</Link>
                    <Link href="/contact" className={styles.cta}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
