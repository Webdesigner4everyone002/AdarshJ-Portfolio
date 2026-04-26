import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { aboutData } from '../../data/about-data';
import styles from '../../styles/about.module.css';

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.about} id="about">
                <div className={styles.lineStyling}>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleLine} style={{ backgroundColor: theme.primary }}></div>
                </div>
                
                <div className={styles.aboutBody}>
                    <div className={styles.aboutDescription}>
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <div style={{ color: theme.tertiary }} className={styles.descriptionContainer}>
                            <p>{aboutData.description1}</p>
                            <p>{aboutData.description2}</p>
                            <p>{aboutData.description3}</p>
                            <p>{aboutData.description4}</p>
                        </div>

                        {/* Technical Expertise Section */}
                        <div className={styles.expertiseSection}>
                            <h3 style={{ color: theme.primary }}>Technical Expertise</h3>
                            <div className={styles.expertiseGrid}>
                                {aboutData.expertise.map((item, index) => (
                                    <div key={index} className={styles.expertiseCard}>
                                        <h4 style={{ color: theme.primary }}>{item.title}</h4>
                                        <div className={styles.skillList}>
                                            {item.skills.map((skill, sIndex) => (
                                                <span 
                                                    key={sIndex} 
                                                    className={styles.skillTag}
                                                    style={{ 
                                                        backgroundColor: theme.primary + '15',
                                                        color: theme.tertiary,
                                                        border: `1px solid ${theme.primary}30`
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.aboutImage}>
                        <img
                            src={aboutData.image}
                            alt='Adarsh J'
                            className={styles.aboutPhoto}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;
