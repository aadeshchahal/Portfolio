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
                    <Link href="#work" className={styles.link}>Work</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#contact" className={styles.cta}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
