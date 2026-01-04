import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className={styles.section}>
            <h2 className={styles.heading}>Work Experience</h2>
            <div className={styles.timeline}>
                {experience.map((job) => (
                    <Link href={`/experience/${job.id}`} key={job.id} className={styles.itemLink}>
                        <div className={styles.item}>
                            <div className={styles.date}>{job.period}</div>
                            <div className={styles.content}>
                                <h3 className={styles.role}>{job.role}</h3>
                                <div className={styles.company}>{job.company}</div>
                                <p className={styles.summary}>{job.summary} <span className={styles.arrow}>→</span></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
