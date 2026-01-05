import Link from 'next/link';
import { Project } from '@/data/portfolio';
import styles from './ProjectList.module.css';

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className={styles.list}>
            {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className={styles.itemLink}>
                    <div className={styles.item}>
                        <div className={styles.mainInfo}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <span className={styles.arrow}>→</span>
                        </div>
                        <div className={styles.meta}>
                            <span className={styles.tags}>{project.tags.slice(0, 3).join(' / ')}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
