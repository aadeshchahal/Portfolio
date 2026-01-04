'use client';

import dynamic from 'next/dynamic';
import styles from './PdfViewer.module.css';

const PdfRenderer = dynamic(() => import('./PdfRenderer'), {
    ssr: false,
    loading: () => <div className={styles.loader}>Loading Viewer...</div>
});

interface PdfViewerProps {
    url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
    return (
        <div className={styles.wrapper}>
            <PdfRenderer url={url} />
        </div>
    );
}
