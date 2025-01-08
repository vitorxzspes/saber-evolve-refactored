import Header from "@/app/Components/Header/page";
import Footer from "@/app/Components/Footer/page";

import Head from "next/head";
import Image from "next/image";
import styles from './clientes.module.css';
import { motion } from "framer-motion";

import headerPapos from '../../public/images/clientes/header.png';
import feedbackPapos from '../../public/images/clientes/feedback.png';

export default function Clientes() {
    return (
        <div>
            <Head>
                <title>saber evolve - Projetos de clientes</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <motion.div
                className={styles.divClientes}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Clientes</h1>
                <p>
                    Aqui estão alguns dos projetos que desenvolvi para os meus clientes.
                </p>

                <div className={styles.divClientesProjects}>
                    <h1>🎥 Papos & Retratos</h1>
                    <p>
                        este é um projeto educacional do IFB, onde aplicamos todas as etapas de um projeto real, desde assinatura de contrato até elaboração de wireframe. Fizemos um site para um fotógrafo fictício, com páginas como portfólio, contato, sobre e blog.
                    </p>

                    <p>
                        Foram divididas tasks para cada integrante do grupo divididas e alocadas em sprint, seguindo a metodologia SCRUM. Vou deixar algumas prints de algumas tasks que eu já fiz:
                    </p>

                    <Image className={styles.imgClients} src={headerPapos} alt="header papos"/>
                    <Image className={styles.imgClients} src={feedbackPapos} alt="feedback papos"/>

                    <button className={styles.buttonprojectsclients}>
                        <a href="https://papos-e-retratos.vercel.app" target="_blank">
                            Clique aqui para acessar o site 🎥
                        </a>
                    </button>
                </div>

                <div className={styles.divClientesProjects}>
                    <h1>🍕 Pizzaria e Hamburgueria da May</h1>
                    <p>
                        fiz um site em HTML e CSS, com páginas como cardápio, contato, localização e sobre. <br/>Ela gostou muito e eu também (por ser minha primeira experiência), segue o vídeo de apresentação que fiz
                    </p>
                    <iframe className={styles.iframeprojectsclients} width="280" height="315" src="https://www.youtube.com/embed/q82zyd60ndc?si=hp-m5b7b0kkqfJK1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
                    <button>
                        <a href="https://vitukjkk.github.io/Pizzaria-e-Hamburgueria-da-May/" target="_blank">Clique aqui para acessar o site 🍕</a>
                    </button>
                </div>

                <div className={styles.divClientesProjects}>
                    <h1>🙏 Obrigado por Hoje!</h1>
                    <p>
                        este projeto foi idealizado pela minha mãe, que sempre foi bastante católica e me ensinou a agradecer por tudo, então, criei este site para as pessoas exercitarem sua gratidão diária. Segue o vídeo de apresentação que fiz
                    </p>
                    <iframe className={styles.iframeprojectsclients} width="280" height="315" src="https://www.youtube.com/embed/P3D_S5LH0N4?si=ojTsHehNLwIHB2G6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
                    <button>
                        <a href="https://vitukjkk.github.io/ObrigadoPorHoje/" target="_blank">Clique aqui para acessar o site 🙏</a>
                    </button>
                </div>
            </motion.div>
            <Footer/>
        </div>
    );
}

