import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import Image from "next/image";
import styles from './sobre.module.css';
import { motion } from "framer-motion";

import logoWhatsApp from '../public/icons/social_media/zap pequeno.png';
import logoInstagram from '../public/icons/social_media/ig pequeno.png';
import logoGitHub from '../public/icons/social_media/github pequeno.png';
import logoFacebook from '../public/icons/social_media/facebook pequeno.png';
import logoYouTube from '../public/icons/social_media/youtube pequeno.png';
import logoLinkedIn from '../public/icons/social_media/linkedin pequeno.png';
import logoPinterest from '../public/icons/social_media/pinterest pequeno.png';
import logoTikTok from '../public/icons/social_media/tik-tok pequeno.png';

export  default function Sobre() {
    return (
        <div>
            <Head>
                <title>saber evolve - Sobre</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header />
            <motion.div
                className={styles.divSobre}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1> Prazer!! </h1>
                <p>
                    Bem-vindo ao meu espaço digital! Me chamo Vitor, e aqui compartilho minha paixão por aprendizado e conhecimento. Sou entusiasta de 
                    linguagens de programação como JavaScript, C#, TS, Python e SQL, além de ser um praticante de karatê apaixonado pela busca contínua por crescimento pessoal. 
                    Neste site, você encontrará conteúdos educativos e intuitivos sobre esses temas e muito mais, meus projetos e soluções. 
                </p>

                <h2>#TMJ</h2>
        
                <div className={styles.
                }>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://www.linkedin.com/in/vitor-colombelli" target="_blank">
                            <Image src={logoLinkedIn} alt="Ícone do LinkedIn"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://wa.me/5561994030749" target="_blank">
                            <Image src={logoWhatsApp} alt="Ícone do WhatsApp"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://instagram.com/vitukjkkk" target="_blank">
                            <Image src={logoInstagram} alt="Ícone do Instagram"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://www.facebook.com/seituuu.u/" target="_blank">
                            <Image src={logoFacebook} alt="Ícone do Facebook"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://github.com/vitukjkk" target="_blank">
                            <Image src={logoGitHub} alt="Ícone do GitHub"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://youtube.com/%40vitukjkkk" target="_blank">
                            <Image src={logoYouTube} alt="Ícone do YouTube"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://www.tiktok.com/%40vituuuuuu.u?lang=pt-BR" target="_blank">
                            <Image src={logoTikTok} alt="Ícone do TikTok"/>
                        </a>
                    </div>
                    <div className={styles.divSobreContactsOne}>
                        <a href="https://br.pinterest.com/vitukjkkk/" target="_blank">
                            <Image src={logoPinterest} alt="Ícone do Pinterest"/>
                        </a>
                    </div>
                </div>

            </motion.div>
            <Footer />
        </div>
    );
}