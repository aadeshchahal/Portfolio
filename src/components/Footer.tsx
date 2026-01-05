import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>© {new Date().getFullYear()} Precision Portfolio. Built with Next.js.</p>
            </div>
        </footer>
    );
}
