import Image from 'next/image';
import styles from '../styles/Banner.module.css'

const Banner = ({ text, imagePath }) => {
    return (
        <div className={styles.bannerContainer}>
            <Image
                src={'/img/banner.jpg'}
                alt="Banner"
                layout="fill"
                objectFit="cover"
            />
            <div className={styles.bannerFilter}></div>
            <div className={styles.bannerText}>
                <h1>Uma boa educação para
                    construir um futuro melhor!</h1>
            </div>
            <div className={styles.bannerCards} >
                <div>
                    <h2 className={styles.bannermissao} >Missão</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                </div>
                <div className={`${styles.bannerBorder} ${styles.bannerBorderSides}`} ><h2 className={styles.bannerVisao}>Visão</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div><h2 className={styles.bannerValores}>Valores</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
