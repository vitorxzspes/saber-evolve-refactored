"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

// IMPORTING ARCHIVES
import logo_main from '/public/images/logo_saber-evolve.svg';
import styles from './page.module.css';

export default function Header() {
    const [isMenuProjectsOpen, setIsMenuProjectsOpen] = useState(false);

    function handleMenuProjects() {
        setIsMenuProjectsOpen(!isMenuProjectsOpen);
    }

    return (
        <header>
            <div className={styles.divHeaderLeft}> 
                <Link href="/"><Image className={styles.imgLogo} src={logo_main} alt="Logo principal" priority/></Link>
            </div>
            <div className={styles.divHeaderRight}>
                <motion.ul 
                    className={styles.ulHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMenuProjectsOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}  
                    transition={{ duration: 0.5 }}>
                    <Link href="/"><li className={styles.liHeader}>Home</li></Link>
                    <li className={styles.liHeader} onClick={handleMenuProjects}>Projetos</li>
                    <Link href="/cybersecurity"><li className={styles.liHeader}>Cybersecurity</li></Link>
                    <Link href="/dados"><li className={styles.liHeader}>Dados</li></Link>
                    <Link href="/downloads"><li className={styles.liHeader}>Downloads</li></Link>
                    <Link href="/privacidade"><li className={styles.liHeader}>Privacidade</li></Link>
                    <Link href="/sobre"><li className={styles.liHeader}>Sobre</li></Link>
                </motion.ul>

                {isMenuProjectsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.menuProjects}
                    >
                        <ul className={styles.ulHeader}>
                            <Link href="/projetos/pessoais"><li className={styles.liHeader}>Pessoais</li></Link>
                            <Link href="/projetos/rocketseat"><li className={styles.liHeader}>Rocketseat</li></Link>
                            <Link href="/projetos/clientes"><li className={styles.liHeader}>Clientes</li></Link>
                            <Link href="/projetos/mobile"><li className={styles.liHeader}>Mobile</li></Link>
                        </ul>
                    </motion.div>
                )}
            </div>
        </header>
    );
}