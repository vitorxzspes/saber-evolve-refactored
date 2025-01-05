import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import Image from "next/image";
import styles from './downloads.module.css';
import { motion } from "framer-motion";
import { projectsVar } from "@/app/var";

import icon_front_end from '../public/icons/icon_front-end.svg';
import icon_back_end from '../public/icons/icon_back-end.svg';
import icon_mobile from '../public/icons/icon_mobile.svg';
import icon_site from '../public/icons/icon_site.svg';
import icon_windows from '../public/icons/icon_windows.svg';
import icon_api from '../public/icons/icon_api.svg';

import logoCMHub from '../public/images/logo_CMHub.png';
import logoAmos from '../public/images/amos_logo_principal.png';
import logoTaskpilot from '../public/images/logo_taskpilot.png';
import logoEConvert from '../public/images/logo_econvert.png';
import logoResolveTudo from '../public/images/logo_resolve_tudo.png';

export default function Downloads() {
    return (
        <div>
            <Head>
                <title>saber evolve - Downloads</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header />
            <motion.div
                className={styles.divDownloads}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Downloads</h1>
                <p>aqui vou deixar os downloads dos meus projetos</p>
                
                <div className={styles.divDownloadsMain}>
                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Pessoais</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <div className={styles.divDownloadsContentBodyItem}>
                                <div className={styles.divDownloadsContentBodyItemLeft}>
                                    <h2>CMHub</h2>
                                    <Image className={styles.imgLogo} src={logoCMHub} alt="Logo CMHub" />
                                    <p>CMHub é uma plataforma de gerenciamento de conteúdo digital.</p>
                                    <h3>PLATAFORMAS</h3>
                                    <a href={projectsVar.pessoais.cmhub.site_link} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                    </a>
                                    <a href={projectsVar.pessoais.cmhub.windows} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                    </a>
                                    <a href={projectsVar.pessoais.cmhub.mobile} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                    </a>
                                    <h3>API</h3>
                                    <a href={projectsVar.pessoais.cmhub.api} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                    </a>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.pessoais.cmhub.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                    </a>
                                    <a href={projectsVar.pessoais.cmhub.rep_back_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                    </a>
                                </div>
                                <div>
                                    <h2>AMÓS</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Rocketseat</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Clientes</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Mobile</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <p>ola mundo!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};