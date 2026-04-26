import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  About, Contacts, Education,
  Experience, Highlights, Landing, Navbar, Projects
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';

function HomePage() {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <BackToTop />
      <ChangeTheme />
      <Navbar />
      
      <Landing />
      
      <Fade bottom distance="40px" duration={1000}>
        <About />
      </Fade>
      
      <Fade bottom distance="40px" duration={1000}>
        <Experience />
      </Fade>
      
      <Fade bottom distance="40px" duration={1000}>
        <Projects />
      </Fade>
      
      <Fade bottom distance="40px" duration={1000}>
        <Highlights />
      </Fade>
      
      <Fade bottom distance="40px" duration={1000}>
        <Education />
      </Fade>
      
      <Fade bottom distance="40px" duration={1000}>
        <Contacts />
      </Fade>
      
      {/* Footer / Copyright */}
      <div style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          background: '#0a1119', 
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.9rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        © {new Date().getFullYear()} Adarsh J. All Rights Reserved. Built with Precision.
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage
