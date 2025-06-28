import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ContactMe from '../pages/form'
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const imageContainerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImages = (imageArray) => {
      const promises = imageArray.map(src => {
          return new Promise((resolve, reject) => {
              const img = new window.Image();
              img.src = src;
              img.onload = resolve; // Resolve when the image is loaded
              img.onerror = (error) => {
                reject(error); // Handle errors
            };
          });
      });
    return Promise.all(promises);
  };

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      const imageArray = [
        '/programmer/open1.webp',
        '/programmer/close1.webp',
        '/programmer/open2.webp',
        '/programmer/close2.webp'
      ]
    preloadImages(imageArray)
    .then(() => {
        console.log('All images preloaded');
        setIsLoaded(true);
    })
    .catch((error) => {
        console.error('Error preloading images:', error);
    });}
  }, []);

  return (<>
    <Head>
      <title>iran from iran</title>
      <meta name="portfolio" content="web developer portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/laptop-icon.png" />
      <link rel="preload" href="/irannastaliq-webfont.woff2" as="font" type="font/woff" crossorigin="anonymous"/>
      <link rel="preload" href="/irannastaliq-webfont.woff" as="font" type="font/woff" crossorigin="anonymous"/>
    </Head>
    <main className={styles.main}>
      <div className={styles.socialMedia}>
        <Link href="https://github.com/iranfromiran" target='_blank' rel='noopener'>
            <Image
              src="/github.png"
              alt="my github link"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/iranfromiran" target='_blank' rel='noopener'>
            <Image
              src="/linkdein.png"
              alt="my linkdein link"
              width={30}
              height={30}
            />
          </Link>
      </div>
      <div className={styles.intro}>
        <div className={styles.dorood}>درود</div>
        <p>it's iran from iran<br/>i'm a front-end web developer</p>
      </div>
      <div className={styles.programmer}>
        <div className={`${styles.testpic} ${isLoaded ? `${styles.loaded}` : `${styles.hidden}`}`}
        id="imageContainer"  
        ref={imageContainerRef}>
        </div>
        <div className={styles.codeDiv}>
          <code></code>
        </div>
      </div>
      <div className={styles.aboutmePage}>
        <div className={styles.aboutContainer}>
          <h2>about me</h2>
          <p>I love creating. lately I've discovered my passion for the world of web development. coding it's like a tool for me to make my ideas into life so everyone can access it from their android phone or iphone to laptops... . I've formed my base knowledge about front-end web development and i want to put in work what i know and learn among professionals.</p>
        </div>
        <h2>tech stack</h2>
        <div className={styles.techStack}>
          <span>Html</span>
          <span>Css</span>
          <span>Tailwindcss</span>
          <span>Typescript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Mongo DB</span>
          <span>git & github</span>
        </div>
        <h2>languages</h2>
        <p>persian , english</p>
      </div>
      <div className={styles.projectPage}>
        <h2>my projects</h2>
        <div className={styles.ploraids}></div>
      </div>
      <div className={styles.header}>
        <h3 className={styles.chaitext}>let's drink some chai and say hi</h3>
        <Image
          src="/chai0.png"
          alt="Vercel Logo"
          className={styles.chai}
          width={30}
          height={40}
        />
      </div>
      <ContactMe />
    </main>
    <footer className={styles.footer}>illustrated and developed with ♡</footer>
    </>)
}
