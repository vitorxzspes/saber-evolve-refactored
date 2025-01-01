import { useState, useEffect } from "react";

// IMPORTANDO COMPONENTS
import { Header } from "../src/app/Components/Header/page";
import { Footer } from "../src/app/Components/Footer/page";

import { ProjectsCMHub } from "./projetos/pessoais";

import Head from "next/head";
import styles from './home.module.css';
import { motion } from "framer-motion";


export default function Home() {
  
  // MUDANDO FRASES
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  const icons = ["💡", "🚀", "🌟", "🦸‍♂️", "🧙‍♂️", "🛸", "🦇", "👼", "✝️", "🙏", "🥋", "👊"];
  const texts = [
    "A persistência é o caminho do êxito.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em si próprio e todo o resto ficará mais fácil.",
    "Com grandes poderes, vêm grandes responsabilidades.",
    "Não é nossa habilidade que mostra quem realmente somos... são nossas escolhas.",
    "A verdade está lá fora.",
    "Eu sou a vingança, eu sou a noite, eu sou o Batman.",
    "Os anjos nos guiam e protegem.",
    "Eu sou o caminho, a verdade e a vida.",
    "A fé move montanhas.",
    "A prática leva à perfeição.",
    "A força não vem da capacidade física, mas da vontade indomável."
  ];
  const authors = [
    "Charles Chaplin",
    "Robert Collier",
    "Norman Vincent Peale",
    "Tio Ben (Homem-Aranha)",
    "Dumbledore (Harry Potter)",
    "Fox Mulder (Arquivo X)",
    "Batman",
    "vitor :D",
    "Jesus Cristo",
    "vitor ^^",
    "Dojo Kun",
    "Dojo Kun"
  ];
  
  const MAX_PHRASES = icons.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % MAX_PHRASES);
    }, 4000);
    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <div>
      <Head>
        <title>saber evolve - Home</title>
        <link rel="icon" href="/icons/favicon.ico"/>
      </Head>      
      <Header />
      <motion.div
          className={styles.divHome}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>

        <div className={styles.divHomeShow}>
          <div className={styles.divHomeMission}>
            <h2>Missão</h2>
            <p>Desenvolver soluções tecnológicas que ajudem as pessoas a evoluirem.</p>
          </div>
          
          <div className={styles.divHomeVision}>
            <h2>Visão</h2>
            <p>Ser referência em inovação e qualidade no mercado de tecnologia.</p>
          </div>
          
          <div className={styles.divHomeValues}>
            <h2>Valores</h2>
            <p>Comprometimento, Ética, Inovação, Qualidade, Respeito.</p>
          </div>
        </div>

        <div className={styles.divHomePhrase}>
          <h2>
            frases que carrego comigo...
          </h2>
          <p className={styles.divHomePhraseIcon}>
            {icons[phraseIndex]}
          </p>
          <span className={styles.divHomePhraseText}>
            {texts[phraseIndex]}
          </span>
          <p className={styles.divHomePhraseAuthor}>
            por <strong>{authors[phraseIndex]}</strong>
          </p>
        </div>

        <hr/>

        <div className={styles.divHomeSkills}>
          <h2 className={styles.divHomeSkillsTitle}>
            minhas habilidades 😇 
          </h2>
          <div className={styles.divHomeWhatIDo}>
            <div className={styles.divHomeWhatIDoLeft}>
              <h2>
                o que eu faço?
              </h2>
              <p>
                sou desenvolvedor de software, apaixonado por tecnologia e inovação. Algumas das coisas que eu faço:
              </p>
            </div>
            <div className={styles.divHomeWhatIDoRight}>
              <ul className={styles.ulHomeWhatIDo}>
                <li>
                  sites
                </li>
                <li>
                  aplicativos mobile
                </li>
                <li>
                  sistemas
                </li>
                <li>
                  consultoria
                </li>
                <li>
                  APIs
                </li>
                <li>
                  automações
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divHomeHowIDo}>
            <div className={styles.divHomeHowIDoRight}>
              <h2>
                como eu faço?
              </h2>
              <p>
                com muita dedicação, estudo e trabalho duro. Com uma ajudinha dessas ferramentas:
              </p>
            </div>
            <div className={styles.divHomeHowIDoLeft}>
              <div className={styles.divHomeTools}>
                <div className={styles.divHomeToolsFrameworks}>
                  <h3>Frameworks</h3>
                  <ul className={styles.ulHomeToolsFrameworks}>
                    <li>React</li>
                    <li>Next</li>
                    <li>React Native</li>
                    <li>Node</li>
                  </ul>
                </div>
                <div className={styles.divHomeToolsLanguages}>
                  <h3>Linguagens</h3>
                  <ul className={styles.ulHomeToolsLanguages}>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>JSX / TSX</li>
                  </ul>
                </div>
                <div className={styles.divHomeToolsLibraries}>
                  <h3>Bibliotecas</h3>
                  <ul>
                    <li>Prisma</li>
                    <li>Jest</li>
                    <li>Webpack</li>
                    <li>Zod</li>
                    <li>jsonwebtoken</li>
                    <li>Vite</li>
                    <li>Styled Components</li>
                  </ul>
                </div>
                
                <div className={styles.divHomeToolsDatabases}>
                  <h3>Bancos de Dados</h3>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div className={styles.divHomeToolsOthers}>
                  <h3>Outros</h3>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>APIs RESTful</li>
                    <li>Docker</li>
                    <li>DevOps</li>
                    <li>UI/UX com Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className={styles.divHomeProjects}>
          <h2>meus projetos</h2>
          <p>alguns dos projetos que eu já desenvolvi:</p>
          <ProjectsCMHub/>
        </div>

      </motion.div>
      <Footer />
    </div>
  );
}