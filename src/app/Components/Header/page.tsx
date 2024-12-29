import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

// IMPORTING ARCHIVES
import logo_main from '../../../../public/images/logo_saber-evolve.svg';
import styles from './page.module.css';

export function Header() {
    const [isMenuProjectsOpen, setIsMenuProjectsOpen] = useState(false);

    function handleMenuProjects() {
        setIsMenuProjectsOpen(!isMenuProjectsOpen);
    }

    return (
        <header>
            <div className={styles.divHeaderLeft}> 
                <Image className={styles.imgLogo} src={logo_main} alt="Logo principal" priority/>
            </div>
            <div className={styles.divHeaderRight}>
                <motion.ul 
                    className={styles.ulHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMenuProjectsOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}  
                    transition={{ duration: 0.3 }}>
                    <Link href="/"><li className={styles.liHeader}>Home</li></Link>
                    <li className={styles.liHeader} onClick={handleMenuProjects}>Projetos</li>
                    <Link href="/downloads"><li className={styles.liHeader}>Downloads</li></Link>
                    <Link href="/privacidade"><li className={styles.liHeader}>Privacidade</li></Link>
                    <Link href="/sobre"><li className={styles.liHeader}>Sobre</li></Link>
                </motion.ul>

                {isMenuProjectsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.menuProjects}
                    >
                        <ul className={styles.ulHeader}>
                            <li className={styles.liHeader}>Pessoais</li>
                            <li className={styles.liHeader}>Rocketseat</li>
                            <li className={styles.liHeader}>Clientes</li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </header>
    );
}