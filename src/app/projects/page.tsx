import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';
import styles from '../page.module.css'; // Reuse main page styles for container

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <section className={styles.section} style={{ paddingTop: '10rem' }}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Featured Projects</h1>
                    <div className={styles.grid}>
                        {portfolioData.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
