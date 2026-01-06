import { portfolioData } from '@/data/portfolio';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageGallery from '@/components/ImageGallery';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return portfolioData.experience.map((job) => ({
        id: job.id,
    }));
}

export default async function ExperiencePage({ params }: Props) {
    const { id } = await params;
    const job = portfolioData.experience.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <Link href="/#experience" className={styles.backLink}>
                ← Back to Experience
            </Link>

            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={styles.company}>{job.company}</span>
                    <span className={styles.period}>{job.period}</span>
                </div>
                <h1 className={styles.role}>{job.role}</h1>
            </header>

            <main className={styles.content}>

                {job.intro && (
                    <div className={styles.introSection}>
                        <p>{job.intro}</p>
                    </div>
                )}

                {job.relatedProject && (
                    <div className={styles.relatedProjectContainer}>
                        <Link href={`/projects/${job.relatedProject.id}`} className={styles.relatedProjectLink}>
                            View Related Project: {job.relatedProject.name} →
                        </Link>
                    </div>
                )}

                <div className={styles.card}>
                    <h3>Key Achievements & Responsibilities</h3>
                    <ul className={styles.list}>
                        {job.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {job.images && job.images.length > 0 && (
                    <div className={styles.gallerySection}>
                        <h3>Work Gallery</h3>
                        <ImageGallery images={job.images.map(url => ({ url, type: 'image' }))} />
                    </div>
                )}
            </main>
        </div>
    );
}
