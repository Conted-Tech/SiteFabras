import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div className={styles.bg}>
            <nav className={styles.navbar} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className={styles.logo}>
                    <Link href="/">

                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={100}
                            height={50}
                        />

                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.seta}>Cursos </li>
                    <li className={styles.seta}>Institucional</li>
                    <li>Sobre</li>
                    <li>Blog</li>
                </ul>

                <button className={styles.btn} >Área do aluno</button>
            </nav>
        </div>
    );
};

export default Navbar;
