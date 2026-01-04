import { portfolioData } from '@/data/portfolio';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import PdfViewer from '@/components/PdfViewer';
import ImageGallery from '@/components/ImageGallery';

// const PdfViewer = dynamic(() => import('@/components/PdfViewer'), {
//   loading: () => <p>Loading Viewer...</p>,
//   ssr: false // Important for react-pdf
// });

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = portfolioData.projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <Link href="/#work" className={styles.backLink}>
                ← Back to Projects
            </Link>

            <header className={styles.header}>
                <h1 className={styles.title}>{project.title}</h1>
                <div className={styles.tags}>
                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>

                <div className={styles.links}>
                    {project.link && (
                        <a href={project.link} target="_blank" className={styles.primaryButton}>
                            View Live Project ↗
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" className={styles.secondaryButton}>
                            View Code
                        </a>
                    )}
                </div>
            </header>

            {project.embedUrl && (
                <div className={styles.fullWidthSection}>
                    <div className={styles.embedWrapper}>
                        <iframe
                            src={project.embedUrl}
                            className={styles.embedFrame}
                            title="Project Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            <div className={styles.content}>
                <div className={styles.mainColumn}>
                    {/* 
                    <div className={styles.imagePlaceholder}>
                        Project Image / Demo
                    </div>
                    */}

                    <section className={styles.section}>
                        <h3>Overview</h3>
                        <p className={styles.description}>{project.detailedDescription || project.description}</p>
                    </section>

                    {project.gallery && project.gallery.length > 0 ? (
                        <ImageGallery images={project.gallery} />
                    ) : (
                        !project.pdfUrl && (
                            <div className={styles.imagePlaceholder}>
                                Project Images / Gallery
                            </div>
                        )
                    )}

                    {project.pdfUrl && (
                        <div className={styles.pdfWrapper}>
                            <div className={styles.pdfHeader}>
                                <h3>Project Presentation</h3>
                                <a href={project.pdfUrl} target="_blank" className={styles.downloadLink}>Download PDF ↓</a>
                            </div>
                            <PdfViewer url={project.pdfUrl} />
                        </div>
                    )}

                    {project.documents && project.documents.length > 0 && (
                        <div className={styles.documentsSection}>
                            <h3>Project Documents</h3>
                            <div className={styles.documentList}>
                                {project.documents.map((doc, idx) => (
                                    <a key={idx} href={doc.url} target="_blank" className={styles.documentLink}>
                                        <span className={styles.docIcon}>📄</span>
                                        <span className={styles.docTitle}>{doc.title}</span>
                                        <span className={styles.docArrow}>↓</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <aside className={styles.sidebar}>
                    {project.challenges && (
                        <div className={styles.card}>
                            <h4>Key Challenges</h4>
                            <ul>
                                {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        </div>
                    )}

                    {project.results && (
                        <div className={styles.card}>
                            <h4>Outcomes</h4>
                            <ul className={styles.successList}>
                                {project.results.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </div>
                    )}

                </aside>
            </div>
        </div>
    );
}
