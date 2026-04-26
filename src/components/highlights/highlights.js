import React, { useContext, useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ThemeContext } from '../../contexts/theme-context';
import { highlightsData } from '../../data/highlights-data';
import styles from '../../styles/highlights.module.css';

function Highlights() {
    const { theme } = useContext(ThemeContext);
    const [selectedImage, setSelectedImage] = useState(null);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <section
            className={styles.highlights}
            id='highlights'
            style={{
                backgroundColor: theme.secondary,
                '--accent': theme.primary,
            }}
        >
            <div className={styles.highlightsHeader}>
                <h1 style={{ color: theme.primary }}>Hackathon Achievements</h1>
                <p>
                    A collection of recognition, wins, and key moments from my journey in AI and technology.
                </p>
            </div>

            <div className={styles.galleryGrid}>
                {highlightsData.map((item) => (
                    <div 
                        key={item.id} 
                        className={styles.galleryCard}
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className={styles.imageWrapper}>
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className={styles.galleryImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox / Full-screen View */}
            {selectedImage && (
                <div 
                    className={styles.lightbox} 
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    >
                        <button 
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                        >
                            <IoCloseOutline />
                        </button>
                        
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title} 
                            className={styles.fullImage}
                        />
                        
                        <div className={styles.lightboxInfo}>
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Highlights;
