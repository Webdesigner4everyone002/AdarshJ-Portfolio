import React, { useContext } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/landing.module.css';
import Link from '../link';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className={styles.landing} style={{
            backgroundColor: theme.secondary
        }}>
            <div className={styles.landingContainer}>
                <div
                    className={styles.landingContainerLeft}
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div className={styles.lclContent}>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className={styles.landingImg}
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className={styles.landingContainerRight}
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className={styles.lcrContent}
                        style={{ color: theme.tertiary }}
                    >
                        <h6 style={{ color: theme.primary }}>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'AI Engineer',
                                'Generative AI Specialist',
                                'LLM Agent Developer',
                                'Impact-Driven Builder'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            className={styles.typedHeader}
                            style={{ color: theme.primary }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className={styles.lcrButtonContainer}>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        style={{ 
                                            color: theme.primary, 
                                            borderColor: theme.primary,
                                            borderWidth: '2px',
                                            borderRadius: '50px',
                                            background: 'transparent',
                                            padding: '10px 30px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className={styles.resumeBtn}
                                    >
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <Link href='/#contacts'>
                                <button 
                                    style={{ 
                                        backgroundColor: theme.primary, 
                                        color: theme.secondary,
                                        border: 'none',
                                        borderRadius: '50px',
                                        padding: '12px 35px',
                                        cursor: 'pointer',
                                        fontWeight: '700',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className={styles.contactBtn}
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;
