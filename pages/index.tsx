import { useState, useEffect } from "react";

// IMPORTANDO COMPONENTS
import Header from "../src/app/Components/Header/page";
import Footer from "../src/app/Components/Footer/page";

// PROJECTS
import { ProjectsCMHub } from "./projetos/pessoais";
import { ProjectsAmos } from "./projetos/pessoais";
import { ProjectsTaskpilot } from "./projetos/pessoais";
import { ProjectsEConvert } from "./projetos/pessoais";
import { ProjectsResolveTudo } from "./projetos/pessoais";

// IMAGES
import porDoSol from '/public/images/general/por_do_sol.jpg';
import arrowProjects from '/public/icons/general/arrow.png';

import Head from "next/head";
import Image from "next/image";
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
  
  
  const [personalProjectsVisible, setPersonalProjectsVisible] = useState(false);

  const MAX_PHRASES = icons.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % MAX_PHRASES);
    }, 4000);
    return () => clearInterval(interval);
  }, [phraseIndex, MAX_PHRASES]);

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

        <Image className={styles.imgHomeLogo} src={porDoSol} alt="peguei no pexels :)" rel="noreferrer"/>
        <i></i>

        <div className={styles.divHomeShow}>
          <div className={styles.divHomeMission}>
            <h2 className={styles.h2Title}>Missão</h2>
            <p>Desenvolver soluções tecnológicas que ajudem as pessoas a evoluirem.</p>
          </div>
          
          <div className={styles.divHomeVision}>
            <h2 className={styles.h2Title}>Visão</h2>
            <p>Ser referência em inovação e qualidade no mercado de tecnologia.</p>
          </div>
          
          <div className={styles.divHomeValues}>
            <h2 className={styles.h2Title}>Valores</h2>
            <p>Comprometimento, Ética, Inovação, Qualidade, Respeito.</p>
          </div>
        </div>

        <div className={styles.divHomePhrase}>
          <h2 className={styles.h2Title}>
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

        <hr className={styles.hrHome}/>

        <div className={styles.divHomeSkills}>
          <h2 className={styles.divHomeSkillsTitle}>
            minhas habilidades 😇 
          </h2>
          <div className={styles.divHomeWhatIDo}>
            <div className={styles.divHomeWhatIDoLeft}>
              <h2 className={styles.h2Title}>
                o que eu faço?
              </h2>
              <p>
                sou desenvolvedor de software, apaixonado por tecnologia e inovação. Algumas das coisas que eu faço:
              </p>
            </div>
            <div className={styles.divHomeWhatIDoRight}>
              <ul className={styles.ulHomeWhatIDo}>
                <li>
                  Aplicativos Web, Mobile & Desktop
                </li>
                <li>
                  Análise de dados
                </li>
                <li>
                  Consultoria em segurança da informação
                </li>
                <li>
                  Automações
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divHomeHowIDo}>
            <div className={styles.divHomeHowIDoRight}>
              <h2 className={styles.h2Title}>
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
                    <li>Next.js</li>
                    <li>React Native</li>
                    <li>.NET</li>
                    <li>ASP.NET</li>
                    <li>.NET Core</li>
                    <li>.NET MAUI</li>
                    <li>Blazor</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>

                <div className={styles.divHomeToolsLanguages}>
                  <h3>Linguagens</h3>
                  <ul className={styles.ulHomeToolsLanguages}>
                    <li>C#</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>JSX / TSX</li>
                  </ul>
                </div>

                <div className={styles.divHomeToolsLibraries}>
                  <h3>Bibliotecas</h3>
                  <ul>
                    <li>Prisma</li>
                    <li>Entity Framework</li>
                    <li>LINQ</li>
                    <li>Jest</li>
                    <li>Zod</li>
                    <li>JWT</li>
                    <li>bcrypt</li>
                    <li>Styled Components</li>
                    <li>Redux</li>
                    <li>Zustand</li>
                    <li>BeautifulSoup</li>
                    <li>Scrapy</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Scikit-Learn</li>
                  </ul>
                </div>

                <div className={styles.divHomeToolsDatabases}>
                  <h3>Bancos de Dados</h3>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>SQL Server</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div className={styles.divHomeToolsOthers}>
                  <h3>Outros</h3>
                  <ul>
                    <li>REST APIs</li>
                    <li>WebSockets</li>
                    <li>Docker</li>
                    <li>Docker Compose</li>
                    <li>DevOps</li>
                    <li>CI/CD (GitHub Actions / GitLab CI)</li>
                    <li>Git, GitHub, GitLab</li>
                    <li>OpenAI</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>UI/UX com Figma</li>
                    <li>WSL</li>
                    <li>Máquinas Virtuais</li>
                    <li>Design Patterns</li>
                    <li>MVC</li>
                    <li>SOLID</li>
                    <li>DDD</li>
                    <li>Microsserviços</li>
                    <li>Clean Architecture</li>
                    <li>Autenticação e Criptografia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className={styles.divHomeProjects}>
          <h2 className={styles.h2Title}>meus projetos</h2>
          <p>alguns dos projetos que eu já desenvolvi (você pode conferir todos na aba projetos!):</p>

      
          <div className={styles.divHomePersonalProjects}>
            <div className={styles.divHomePersonalProjectsHeader}>
              <Image className={styles.iconArrow} src={arrowProjects} onClick={()=>setPersonalProjectsVisible(!personalProjectsVisible)} style={{transform: personalProjectsVisible ? "rotate(90deg)" : "rotate(0deg)"}} alt="minimizar ou maximizar" rel="noreferrer"/>
              <h2>
                Projetos pessoais
              </h2>
            </div>
            <p>esses eu desenvolvi com ideias e autonomia própria, para demosntrar minha habilidades e resolver problemas, clique para vê-los!</p>
            <div className={styles.divHomePersonalProjectsCards} style={{display: personalProjectsVisible ? "flex" : "none"}}>
              <ProjectsCMHub/>
              <ProjectsAmos/>
              <ProjectsTaskpilot/>
              <ProjectsEConvert/>
              <ProjectsResolveTudo/>
            </div>
          </div>
        </div>

        <h2 className={styles.h2Title}>por enquanto...</h2>

        <p>
          esses são alguns dos projetos que já fiz, você pode conferir a lista completa na página projetos. 🧬
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}