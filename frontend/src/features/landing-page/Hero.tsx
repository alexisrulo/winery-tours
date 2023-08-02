import styles from './Hero.module.css';
import heroImg1 from '../../assets/img-hero-1.jpg';
import heroImg2 from '../../assets/img-hero-2.jpg';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.hero}`}>
        <div className={styles.heroTextBox}>
          <h1 className='heading-primary'>
            Explore Mendoza's Spectacular Wineries and Vineyards
          </h1>
          <p className={styles.heroDescription}>
            Experience the charm of Mendoza's exquisite wineries and vineyards.
            Immerse yourself in the art of winemaking amidst breathtaking
            landscapes. Unforgettable tours await.
          </p>
          <a className={`${styles.heroBtn} cta-btn`} href=''>
            Sign Up
          </a>
          <a className={styles.explore} href=''>
            <span className={styles.text}>Explore all tours</span>
            <svg
              viewBox='0 0 46 16'
              height='10'
              width='30'
              xmlns='http://www.w3.org/2000/svg'
              id='arrow-horizontal'
            >
              <path
                transform='translate(30)'
                d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z'
                data-name='Path 10'
                id='Path_10'
              ></path>
            </svg>
          </a>
        </div>
        <div className={styles.heroImages}>
          <img
            src={heroImg1}
            alt='brown wooden fence near snow-covered mountain during the daytime'
            className={styles.heroImg1}
          />

          <img
            src={heroImg2}
            alt='brown wooden wine racks'
            className={styles.heroImg2}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
