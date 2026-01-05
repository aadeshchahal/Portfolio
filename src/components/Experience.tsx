import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import styles from './Experience.module.css';

interface ExperienceProps {
    compact?: boolean;
}

export default function Experience({ compact = false }: ExperienceProps) {
    const { experience } = portfolioData;

    return (
        <section id="experience" className={styles.section}>
            <h2 className={styles.heading}>Work Experience</h2>
            <div className={compact ? styles.list : styles.timeline}>
                {experience.map((job) => (
                    <Link href={`/experience/${job.id}`} key={job.id} className={styles.itemLink}>
                        <div className={compact ? styles.compactItem : styles.item}>
                            <div className={styles.mainInfo}>
                                <h3 className={styles.role}>{job.role}</h3>
                                <div className={styles.company}>{job.company}</div>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.date}>{job.period}</span>
                                {compact && <span className={styles.arrow}>→</span>}
                            </div>

                            {!compact && (
                                <div className={styles.content}>
                                    <p className={styles.summary}>{job.summary} <span className={styles.arrow}>→</span></p>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
