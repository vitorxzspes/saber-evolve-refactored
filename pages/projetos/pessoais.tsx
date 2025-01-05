import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import styles from './pessoais.module.css';
import { motion } from "framer-motion";
import { projectsVar } from "@/app/var";

// IMPORTANDO IMAGENS

import logoCMHub from '../../public/images/logo_CMHub.png';
import logoAmos from '../../public/images/amos_logo_principal.png';
import logoTaskpilot from '../../public/images/logo_taskpilot.png';
import logoEConvert from '../../public/images/logo_econvert.png';
import logoResolveTudo from '../../public/images/logo_resolve_tudo.png';

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
                <h2 className={styles.h2TitleProjects}>gerenciador de tarefas</h2>
                <ProjectsTaskpilot/>
                <h2 className={styles.h2TitleProjects}>conversor de unidades</h2>
                <ProjectsEConvert/>
                <h2 className={styles.h2TitleProjects}>resolva tudo! muitos módulos de cálculos para você explorar!</h2>
                <ProjectsResolveTudo/>

                <h2>de pessoais é isso...</h2>
                <p>
                    espero que tenham gostado dos projetos que fiz, fique à vontade para me contatar e contribuir com eles! 😊 Também tenho projetos feitos pela <Link href="/projetos/rocketseat">Rocketseat</Link> e pra <Link href="/projetos/clientes">Clientes</Link>, onde você pode ver nas páginas.
                </p>
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
                <a href={projectsVar.pessoais.cmhub.site_link} target="_blank" className={styles.buttonLinkSite}>
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

export function ProjectsEConvert() {
    return (
        <div className={styles.projectseconvert}>
            <h1>eConvert</h1>
            <Image src={logoEConvert} alt="Logo do eConvert" className={styles.logos}/>
            <p>
                aqui você poderá ver em qualquer métrica!
            </p>
            <button>
                <a href="https://vitukjkk.github.io/eConvert-PAGES/" target="_blank" className={styles.buttonLinkSite}>
                    Clique aqui para acessar o site! 🚀
                </a>
            </button>
            <h2>Apresentação</h2>
            <iframe className={styles.iframesProjects} width="280" height="315" src="https://www.youtube.com/embed/Pb9DRr4fERg?si=vZQjKMqsRw2xhTto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>
                eConvert é uma aplicação web que facilita a conversão de diversos tipos de dados. O projeto é capaz de converter documentos, imagens, medidas, moedas, unidades, texto, cores, vídeos e áudio, oferecendo uma interface intuitiva e prática para os usuários.
            </p>
            <h3>💻 Tecnologias Utilizadas</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript / JavaScript</li>
                <li>babel, webpack</li>
                <li>Node.js</li>
            </ul>

            <h3>🤝 Contribuição</h3>
            <p>Fique livre, leve e solto para contribuir como quiser, toda ajuda é bem-vinda! Qualquer coisa é só me chamar 👊</p>

            <h3>🖥 Responsividade</h3>
            <p>Fiz para adaptar às diferentes telas!</p>

            <h3>🚀 Funcionalidades / Módulos</h3>
            <ul>
                <li><strong>Unidades de conversão</strong></li>
                <ul>
                    <li><strong>Massa</strong></li>
                    <ul>
                        <li>Quilograma (kg)</li>
                        <li>Grama (g)</li>
                        <li>Miligrama (mg)</li>
                        <li>Tonelada (t)</li>
                        <li>Libra (lb)</li>
                        <li>Onça (oz)</li>
                    </ul>
                    <br/>                    
                    <li><strong>Comprimento</strong></li>
                    <ul>
                        <li>Metro (m)</li>
                        <li>Centímetro (cm)</li>
                        <li>Milímetro (mm)</li>
                        <li>Quilômetro (km)</li>
                        <li>Polegada (in)</li>
                        <li>Pé (ft)</li>
                        <li>Jarda (yd)</li>
                        <li>Milha (mi)</li>
                    </ul>
                    <br/>
                    <li><strong>Temperatura</strong></li>
                    <ul>
                        <li>Celsius (°C)</li>
                        <li>Fahrenheit (°F)</li>
                        <li>Kelvin (K)</li>
                    </ul>
                    <br/>
                    <li><strong>Velocidade</strong></li>
                    <ul>
                        <li>Metros por segundo (m/s)</li>
                        <li>Quilômetros por hora (km/h)</li>
                        <li>Milhas por hora (mph)</li>
                        <li>Nós (knots)</li>
                    </ul>
                    <br/>
                    <li><strong>Área</strong></li>
                    <ul>
                        <li>Metro quadrado (m²)</li>
                        <li>Centímetro quadrado (cm²)</li>
                        <li>Quilômetro quadrado (km²)</li>
                        <li>Hectare (ha)</li>
                        <li>Acre</li>
                    </ul>
                    <br/>
                    <li><strong>Volume</strong></li>
                    <ul>
                        <li>Metro cúbico (m³)</li>
                        <li>Litro (L)</li>
                        <li>Mililitro (ml)</li>
                        <li>Centímetro cúbico (cm³)</li>
                        <li>Quilômetro cúbico (km³)</li>
                        <li>Galão (gal)</li>
                        <li>Galão americano (3,785 L)</li>
                        <li>Galão imperial (4,546 L)</li>
                        <li>Barril de petróleo (~ 159 L)</li>
                    </ul>
                    <br/>
                    <li><strong>Tempo</strong></li>
                    <ul>
                        <li>Segundo (s)</li>
                        <li>Minuto (min)</li>
                        <li>Hora (h)</li>
                        <li>Dia (d)</li>
                        <li>Semana</li>
                        <li>Mês</li>
                        <li>Ano (a)</li>
                    </ul>
                </ul>
            </ul>
            <p>PS: esses são os módulos que coloquei até agora, se tiver mais sugestões é só falar! #TMJ</p>
        </div>
    )
}

export function ProjectsResolveTudo() {
    return (
        <div className={styles.projectsresolvetudo}>
            <h1>Resolve Tudo</h1>
            <Image src={logoResolveTudo} alt="Logo do Resolve Tudo" className={styles.logos}/>
            <p>
                software inteligente para lhe ajudar com cálculos de diversas áreas!
            </p>
            <button>
                <a href="https://vitukjkk.github.io/Resolve-Tudo-PAGES/" target="_blank">
                    Clique aqui para acessar o site! 🚀
                </a>
            </button>
            <h2>Apresentação</h2>
            <iframe className={styles.iframesProjects} width="280" height="315" src="https://www.youtube.com/embed/6ihBN2qjNIo?si=KM4XijKj7dvqok_r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p>
                Um site web desenvolvido para facilitar a realização de diversos tipos de cálculos. Seja para fins acadêmicos, profissionais ou pessoais, o Resolve Tudo oferece uma interface intuitiva para cálculos rápidos e precisos.
            </p>  
            <section>
                <h2>🖥 Tecnologias</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript / JavaScript</li>
                    <li>Webpack</li>
                    <li>Node.js</li>
                    <li>Módulos</li>
                </ul>
            </section>
        
            <section>
                <h2>🤝 Contribuição</h2>
                <p>Se for sua vontade, seja livre! Adorarei sua participação. Qualquer coisa, me contate, viu?</p>
            </section>
        
            <section>
                <h2>🚗 Praticidade</h2>
                <p>Com poucos cliques você encontra sua resposta.</p>
            </section>
        
            <section>
                <h2>😴 Facilidade</h2>
                <p>Calcular nunca foi tão fácil!</p>
            </section>
        
            <section>
                <h2>🖊️ Funcionalidades / Cálculos / Módulos</h2>
                <ul>
                    <li><strong>Básica:</strong> soma, subtração, multiplicação e divisão.</li>
                    <li><strong>Matemática:</strong> radiciação, exponenciação, porcentagem, módulos e fatorial.</li>
                    <li><strong>Científica:</strong> em implementação.</li>
                    <li><strong>Financeira:</strong> juros simples e compostos, valor presente e futuro, amortização.</li>
                    <li><strong>Gráfica:</strong> em breve!</li>
                    <li><strong>Estatística:</strong> média, moda, mediana, desvio padrão, variância e coeficiente, máximo e mínimo.</li>
                    <li><strong>Engenharia:</strong> vem por aí 🫠.</li>
                </ul>
                <p>PS: Esses são os módulos que botei até agora, com o tempo e sugestões adiciono mais!</p>
            </section>
        </div>
    )
}