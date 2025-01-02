import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './pessoais.module.css';
import { motion } from "framer-motion";
import Image from 'next/image';

// IMPORTANDO IMAGENS

import logoCMHub from '../../public/images/logo_CMHub.png';
import logoAmos from '../../public/images/amos_logo_principal.png';
import logoTaskpilot from '../../public/images/logo_taskpilot.png';

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
                <h2 className={styles.h2TitleProjects}>outro projeto meu, uma IA usando a API da OpenAI!</h2>
                <ProjectsAmos/>
            </motion.div>
            <Footer/>
        </div>
    );
}

export function ProjectsCMHub() {
    return (
        <div className={styles.projectscmhub}>
            <h1>CMHub</h1>
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

export function ProjectsAmos() {
    return (
        <div className={styles.projectsamos}>
            <h1>👧 - Amos</h1>
            <Image src={logoAmos} alt="Logo da AMÓS" className={styles.logos}/>
            <p>
                Acesse aqui amiga virtual inteligente projetada para apoiar e aprimorar o desenvolvimento pessoal. Com foco em autoaperfeiçoamento, a AMÓS oferece conselhos personalizados, orientações e ferramentas para ajudar os usuários a alcançar seus objetivos, desenvolver novas habilidades e manter a motivação.
            </p>
            <h2>Endereço do site</h2>
            <button>
                <a href="https://amos-jet.vercel.app/" target="_blank" className={styles.buttonLinkSite}>
                    Clique aqui para acessar o site! 🚀
                </a>
            </button>
            <h2>💻 - Tecnologias</h2>
            <ul>
                <li>React</li>
                <li>Vite</li>
                <li>TypeScript</li>
                <li>Babel</li>
                <li>Jest</li>
                <li>CSS modules</li>
            </ul>
            <h2>💪 - Desenvolvimento Pessoal</h2>
            <p>
                Ser uma pessoa melhor requer esforço e vontade, mas também ajuda, e aqui estou eu para lhe ajudar a ser guiado nesse caminho ✌️
            </p>
            <h2>🤖 - Machine Learning</h2>
            <p>
                Usarei capacidades estatísticas para encontrar padrões e achar respostas para os resultados esperados.
            </p>
            <h2>💚 - Funcionalidades</h2>
            <ul>
                <li>Conselhos Personalizados: AMÓS fornece orientações adaptadas às necessidades e metas individuais de cada usuário.</li>
                <li>Gestão de Metas: Ajude a definir, monitorar e alcançar metas pessoais de forma eficaz.</li>
                <li>Sugestões de Habilidades: Identifique e desenvolva novas habilidades que podem ser valiosas para o crescimento pessoal e profissional.</li>
                <li>Monitoramento de Progresso: Acompanhe o progresso ao longo do tempo, com relatórios e insights detalhados.</li>
                <li>Motivação e Apoio: Receba mensagens motivacionais e lembretes para manter o foco e a disciplina.</li>
            </ul>
            <h2>🛠️ - Contribuição</h2>
            <p>
                Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
            </p>
            <h2>📄 - Licença</h2>
            <p>
                Este projeto está licenciado sob a Licença MIT. 
            </p>
            <h2>📞 - Contato</h2>
            <p>
                Para mais informações, entre em contato com <a href="mailto:vitor69776@estudante.ifb.edu.br">vitor69776@estudante.ifb.edu.br</a>.
            </p>
        </div>
    );
}

export function ProjectsTaskpilot() {
    return (
        <div className={styles.projectstaskpilot}>
            <h1>TaskPilot</h1>
            <Image src={logoTaskpilot} alt="Logo do TaskPilot" className={styles.logos}/>
            <p>
                gerencie suas tarefas com facilidade!
            </p>
            <h2>Apresentação</h2>
            <iframe className={styles.iframesProjects} width="280" height="315" src="https://www.youtube.com/embed/HjQTLMQcU8w?si=sg3DQ8sCSv0f7TVb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2>Prévia</h2>
            <button>
                <a href="https://taskpilot-eta.vercel.app/" target="_blank" className={styles.buttonLinkSite}>
                    Clique aqui para acessar o site! 🚀
                </a>    
            </button>
            <p>TaskPilot é um website de gerenciamento de tarefas projetado para ajudar você a organizar e acompanhar suas atividades diárias de forma eficiente.</p>
        
            <section>
                <h2>📒 Funcionalidades</h2>
                <ul>
                    <li>Criação</li>
                    <li>Edição</li>
                    <li>Exclusão</li>
                    <li>Visualização</li>
                    <li>Filtragem e pesquisa</li>
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