import { Project } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    {/* Using a gray placeholder div if image fails or for generic use */}
                    <Image src={project.imageUrl} alt={project.title} fill className={styles.image} style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    <div className={styles.links}>
                        <span className={styles.detailsLink}>
                            Read More →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
