import Header from "@/app/Components/Header/page";
import Footer from "@/app/Components/Footer/page";

import Head from "next/head";
import Image from "next/image";
import styles from './rocketseat.module.css';
import { motion } from "framer-motion";

import { petShopRocketseatProject } from "@/app/Components/Rocketseat/PetShop";

// IMPORTAR PRINTS

import Print1 from '../../public/images/rocketseat/Screenshot_1.png';
import Print2 from '../../public/images/rocketseat/Screenshot_2.png';
import Print3 from '../../public/images/rocketseat/Screenshot_3.png';
import Print4 from '../../public/images/rocketseat/Screenshot_4.png';
import Print5 from '../../public/images/rocketseat/Screenshot_5.png';
import Print10 from '../../public/images/rocketseat/Screenshot_10.png';
import Print11 from '../../public/images/rocketseat/Screenshot_11.png';
import Print12 from '../../public/images/rocketseat/Screenshot_12.png';

export default function Rocketseat() {
    return (
        <div>
            <Head>
                <title>saber evolve - Projetos da Rocketseat</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <motion.div
                className={styles.divRocketseat}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

            <h1> 🚀 Projetos da Rocketseat</h1>
            <p>
                aqui estão alguns dos projetos que fiz na Rocketseat, onde aprendi bastante sobre HTML, CSS e JavaScript, e um pouco de Node.js, C#, React e React Native. Foi uma experiência incrível, e aprendi bastante, e espero aprender muito mais.
            </p>

            <div className={styles.divRocketseatProject}>
                <h1>Local Turístico</h1>
                <p>
                    esse foi um dos meus primeiros projetos na Rocketseat, abordando conceitos iniciais como HTML e CSS, e um pouco de JavaScript, onde fiz um site de um local turístico fictício, onde tem informações sobre o local, fotos e um formulário de contato. Faz tempo isso em, mas foi muito bom, aprendi bastante.
                </p>

                <Image className={styles.imgrocketseat} src={Print1} alt="Screenshot 1"/>
                <Image className={styles.imgrocketseat} src={Print2} alt="Screenshot 2"/>
                <Image className={styles.imgrocketseat} src={Print3} alt="Screenshot 3"/><br/>
                <button>
                    <a href="https://github.com/vitukjkk/pontos-turisticos" target="_blank">🐈 Repositório GitHub</a>
                </button>
            </div>

            <div className={styles.divRocketseatProject}>
                <h1>Sorteador de Números</h1>
                <p>
                    esse foi um projeto que fiz para treinar um pouco mais de JavaScript, onde fiz um site que sorteia números aleatórios, e tem um botão para sortear, e outro para limpar a tela. Foi bem legal fazer, e aprendi bastante sobre manipulação de elementos no DOM.
                </p>
                <Image className={styles.imgrocketseat} src={Print4} alt="Screenshot 4"/>
                <Image className={styles.imgrocketseat} src={Print5} alt="Screenshot 5"/><br/>
                <button>
                    <a href="https://github.com/vitukjkk/sorteador" target="_blank">🐈 Repositório GitHub</a>
                </button>
            </div>

            {petShopRocketseatProject()}


            <div className={styles.divRocketseatProject}>
                <h1>Hair Day</h1>
                <p>
                    esse trabalhamos bastante o Front-End, com HTML, CSS e JavaScript, onde fizemos um site de um salão de beleza fictício, onde tem informações sobre o salão, fotos e um formulário de contato. Foi bem legal fazer, e aprendi bastante.
                </p>
                <Image className={styles.imgrocketseat} src={Print10} alt="Screenshot 10"/>
                <Image className={styles.imgrocketseat} src={Print11} alt="Screenshot 11"/>
                <Image className={styles.imgrocketseat} src={Print12} alt="Screenshot 12"/><br/>
                <button>
                    <a href="https://github.com/vitukjkk/Hair-Day" target="_blank">🐈 Repositório GitHub</a>
                </button>
            </div>

            <h2>eu fiz mais, porém esses são os que consegui achar :)</h2>

            </motion.div>
            <Footer/>
        </div>
    );
}

