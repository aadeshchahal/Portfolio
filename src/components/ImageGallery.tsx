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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    // Keyboard navigation
    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isLightboxOpen, nextImage, prevImage]);

    if (!images || images.length === 0) return null;

    const currentItem = images[currentIndex];

    return (
        <>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselMain}>
                    <button className={styles.navBtn} onClick={prevImage} style={{ left: '10px' }}>
                        ‹
                    </button>

                    <div className={styles.mediaWrapper} onClick={openLightbox} style={{ cursor: 'pointer' }}>
                        {currentItem.type === 'video' ? (
                            <div className={styles.videoPlaceholder}>
                                <video
                                    className={styles.media}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                    key={currentItem.url}
                                >
                                    <source src={currentItem.url} type="video/mp4" />
                                </video>
                                <div className={styles.zoomHint}>Click to expand</div>
                            </div>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={currentItem.url}
                                alt={currentItem.caption || `Image ${currentIndex + 1}`}
                                className={styles.media}
                            />
                        )}
                        {currentItem.type !== 'video' && <div className={styles.zoomHint}>🔍</div>}
                    </div>

                    <button className={styles.navBtn} onClick={nextImage} style={{ right: '10px' }}>
                        ›
                    </button>

                    {currentItem.caption && (
                        <div className={styles.captionOverlay}>
                            {currentItem.caption}
                        </div>
                    )}

                    <div className={styles.counter}>
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </div>

            {/* Optional: Thumbnails strip could go here if requested later */}

            {isLightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.closeBtn} onClick={closeLightbox}>×</button>

                    <button className={styles.lightboxNavBtn} onClick={prevImage} style={{ left: '20px' }}>‹</button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        {currentItem.type === 'video' ? (
                            <video controls autoPlay className={styles.fullImage}>
                                <source src={currentItem.url} type="video/mp4" />
                            </video>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={currentItem.url}
                                alt={currentItem.caption}
                                className={styles.fullImage}
                            />
                        )}

                        {currentItem.caption && (
                            <p className={styles.lightboxCaption}>{currentItem.caption}</p>
                        )}
                        <div className={styles.lightboxCounter}>
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className={styles.lightboxNavBtn} onClick={nextImage} style={{ right: '20px' }}>›</button>
                </div>
            )}
        </>
    );
}
