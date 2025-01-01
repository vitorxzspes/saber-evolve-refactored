import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './pessoais.module.css';
import { motion } from "framer-motion";
import Image from 'next/image';

// IMPORTANDO IMAGENS

import logoCMHub from '../../public/images/logo_CMHub.png';

export default function Pessoais() {
    return (
        <div className={styles.divPessoais}>
            <Head>
                <title>saber evolve - Projetos pessoais</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <motion.div
                className={styles.divPessoais}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>meus projetos</h1>
                <p>
                    aqui vão alguns dos projetos pessoais que eu fiz, espero que gostem!
                </p>
                <ProjectsCMHub/>
            </motion.div>
            <Footer/>
        </div>
    );
}

export function ProjectsCMHub() {
    return (
        <div className={styles.projectscmhub}>
            <h2>CMHub</h2>
            <Image src={logoCMHub} alt="Logo do CMHub" className={styles.logos}/>
            <p>
                conecte-se com os outros!
            </p>
            <h2>Apresentação</h2>
            <iframe className={styles.iframesProjects} width="280" height="315" src="https://www.youtube.com/embed/l3v0Erxv4VY?si=aMs2rPC7-OF_MjPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2>Endereço do site</h2>
            <button>
                <a href="https://cmhub.vercel.app/" target="_blank" className={styles.buttonLinkSite}>
                    Clique aqui para acessar o site! 🚀
                </a>
            </button>
            <p>CMHub é uma rede social multiplataforma projetada para conectar pessoas, compartilhar ideias e criar comunidades em torno de interesses comuns. O CMHub oferece uma experiência rica e interativa para usuários em várias plataformas, permitindo que eles se conectem e interajam de forma fácil e intuitiva.</p>

            <section>
                <h2>📒 Funcionalidades</h2>
                <ul>
                    <li>Mensagens</li>
                    <li>Grupos</li>
                    <li>Feed</li>
                    <li>Posts</li>
                    <li>Amigos</li>
                    <li>Compartilhamento</li>
                    <li>Notificações</li>
                    <li>Perfis</li>
                    <li>e muito mais!</li>
                </ul>
            </section>
        
            <section>
                <h2>🖥 Tecnologias Utilizadas</h2>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>Webpack, Babel</li>
                    <li>TypeScript / JSX / JavaScript</li>
                    <li>Express</li>
                    <li>Zod</li>
                    <li>Jest</li>
                    <li>Beekeeper</li>
                    <li>Docker</li>
                    <li>Prisma</li>
                    <li>JWT</li>
                    <li>bcrypt</li>
                </ul>
            </section>
        
            <section>
                <h2>🔏 Privacidade</h2>
                <p>Seus dados estão seguros e você pode se manifestar como quiser 😊</p>
            </section>
        
            <section>
                <h2>🤝 Contribuição</h2>
                <p>Fique à vontade para contribuir como quiser, seja com código, feedback ou sugestão! Você é bem-vindo 😉</p>
            </section>
        
            <section>
                <h2>📞 Contato</h2>
                <p>Para mais informações, entre em contato pelo e-mail: <a href="mailto:vitor69776@estudante.ifb.edu.br">vitor69776@estudante.ifb.edu.br</a> ou WhatsApp.</p>
            </section>
        </div>
    )
}