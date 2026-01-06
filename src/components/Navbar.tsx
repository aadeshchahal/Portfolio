import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Aadesh Chahal Portfolio
                </Link>
                <div className={styles.links}>
                    <Link href="/projects" className={styles.link}>Featured Projects</Link>
                    <Link href="/experience" className={styles.link}>Work Experience</Link>
                    <a href="/pdfs/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Resume</a>
                    <Link href="/contact" className={styles.cta}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
