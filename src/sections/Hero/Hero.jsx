/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './HeroStyle.module.css';
import heroimg from '../../assets/valparaiimg.jpg';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import gitHubLight from '../../assets/github-light.svg'
import gitHubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/Resume1.pdf'
import { useTheme } from '../../common/ThemeContext';
const Hero = () => {
  const {theme,toggleTheme} = useTheme();
  const themeIcon =theme=='light'? sun:moon;
  const twitterIcon = theme == 'light' ? twitterLight : twitterDark;
  const gitHubIcon = theme == 'light' ? gitHubLight : gitHubDark;
  const linkedInIcons = theme == 'light' ? linkedInLight : linkedInDark;
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colormodecontainer}>
          <img
            src={heroimg}
            alt="profile picture of yuvan shankar"
            className={styles.hero}
          />
          <img
            src={themeIcon}
            alt="color mode icon"
            className={styles.colorMode}
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Yuvan <br />
            Shankar
          </h1>
          <h2>Full-stack Developer</h2>
          <span>
            <a href="https://x.com/_yuvan_shankar" target="_blank">
              <img src={twitterIcon} alt="twitter logo" />
            </a>

            <a href="https://github.com/yuvanshankar2694" target="_blank">
              <img src={gitHubIcon} alt="gitHub logo" />
            </a>

            <a
              href="https://www.linkedin.com/in/yuvanshankarv/"
              target="_blank"
            >
              <img src={linkedInIcons} alt="linkedIn logo" />
            </a>
          </span>
          <p>
            As a full-stack web developer, I transform ideas into seamless and
            dynamic digital experiences. My passion for coding and design
            ensures that every project I undertake is crafted with precision and
            creativity.
          </p>
          <a href={cv} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero