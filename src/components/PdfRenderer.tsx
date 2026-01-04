'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './PdfViewer.module.css';

// Configure worker
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PdfRendererProps {
    url: string;
}

export default function PdfRenderer({ url }: PdfRendererProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
    }

    return (
        <>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                className={styles.document}
                loading={<div className={styles.loader}>Loading PDF...</div>}
                error={<div className={styles.error}>Failed to load PDF. Please download it instead.</div>}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <div key={`page_${index + 1}`} className={styles.pageContainer}>
                        <Page
                            pageNumber={index + 1}
                            width={800}
                            className={styles.page}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                        <div className={styles.pageNumber}>Slide {index + 1}</div>
                    </div>
                ))}
            </Document>
        </>
    );
}
