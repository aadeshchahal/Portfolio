"use client";

import { useState, useCallback, useEffect } from "react";
import styles from "./ImageGallery.module.css";

interface MediaItem {
    url: string;
    caption?: string;
    type: 'image' | 'video';
}

interface ImageGalleryProps {
    images: MediaItem[];
    title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length
        );
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) =>
            prev === null ? null : (prev - 1 + images.length) % images.length
        );
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className={styles.gallery}>
                {images.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.galleryItem}
                        onClick={() => openLightbox(idx)}
                    >
                        {item.type === 'video' ? (
                            <video className={styles.thumbnail} muted loop playsInline autoPlay>
                                <source src={item.url} type="video/mp4" />
                            </video>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={item.url}
                                alt={item.caption || `Image ${idx + 1}`}
                                className={styles.thumbnail}
                            />
                        )}

                        {item.caption && (
                            <div className={styles.captionOverlay}>
                                <span>{item.caption}</span>
                            </div>
                        )}
                        <div className={styles.zoomIcon}>{item.type === 'video' ? '▶' : '🔍'}</div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.closeBtn} onClick={closeLightbox}>
                        ×
                    </button>

                    <button className={styles.navBtn} onClick={prevImage} style={{ left: '20px' }}>
                        ‹
                    </button>

                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {images[selectedIndex].type === 'video' ? (
                            <div className={styles.videoWrapper}>
                                <video controls autoPlay className={styles.fullImage}>
                                    <source src={images[selectedIndex].url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={images[selectedIndex].url}
                                alt={images[selectedIndex].caption || "Full size"}
                                className={styles.fullImage}
                            />
                        )}

                        {images[selectedIndex].caption && (
                            <p className={styles.lightboxCaption}>
                                {images[selectedIndex].caption}
                            </p>
                        )}
                        <div className={styles.counter}>
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className={styles.navBtn} onClick={nextImage} style={{ right: '20px' }}>
                        ›
                    </button>
                </div>
            )}
        </>
    );
}
