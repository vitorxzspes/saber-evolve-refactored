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

import icon_gitHub from '../public/icons/social_media/github pequeno.png';

// LOGOS PROJETOS

// PESSOAIS
import logoCMHub from '../public/images/logo_CMHub.png';
import logoAmos from '../public/images/amos_logo_principal.png';
import logoTaskpilot from '../public/images/logo_taskpilot.png';
import logoEConvert from '../public/images/logo_econvert.png';
import logoResolveTudo from '../public/images/logo_resolve_tudo.png';
import logoNotasSaber from '../public/images/logo_notas_do_saber.png';

// ROCKETSEAT
import logoLocalTuristico from '../public/images/downloads rocketseat/local_turistico.png';
import logoSorteador from '../public/images/downloads rocketseat/sorteador_numeros.png';
import logoPetShop from '../public/images/downloads rocketseat/agendamento_pet_shop.png';
import logoHairDay from '../public/images/downloads rocketseat/hair_day.png';

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
                                <div className={styles.divDownloadsContentBodyItemRight}>
                                    <h2>Amós</h2>
                                    <Image className={styles.imgLogo} src={logoAmos} alt="Logo Amós" />
                                    <p>Amós é uma IA que lhe auxiliará no seu desenvolvimento pessoal!</p>
                                    <h3>PLATAFORMAS</h3>
                                    <a href={projectsVar.pessoais.amos.site_link} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                    </a>
                                    <a href={projectsVar.pessoais.amos.windows} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                    </a>
                                    <a href={projectsVar.pessoais.amos.mobile} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                    </a>
                                    <h3>API</h3>
                                    <a href={projectsVar.pessoais.amos.api} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                    </a>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.pessoais.amos.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                    </a>
                                    <a href={projectsVar.pessoais.amos.rep_back_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            <div className={styles.divDownloadsContentBodyItem}>
                                <div className={styles.divDownloadsContentBodyItemLeft}>
                                    <h2>Taskpilot</h2>
                                    <Image className={styles.imgLogo} src={logoTaskpilot} alt="Logo Taskpilot" />
                                    <p>Taskpilot é uma ferramenta de gerenciamento de tarefas eficiente.</p>
                                    <h3>PLATAFORMAS</h3>
                                    <a href={projectsVar.pessoais.taskpilot.site_link} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                    </a>
                                    <a href={projectsVar.pessoais.taskpilot.windows} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                    </a>
                                    <a href={projectsVar.pessoais.taskpilot.mobile} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                    </a>
                                    <h3>API</h3>
                                    <a href={projectsVar.pessoais.taskpilot.api} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                    </a>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.pessoais.taskpilot.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                    </a>
                                    <a href={projectsVar.pessoais.taskpilot.rep_back_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                    </a>
                                </div>
                                <div className={styles.divDownloadsContentBodyItemRight}>
                                    <h2>EConvert</h2>
                                    <Image className={styles.imgLogo} src={logoEConvert} alt="Logo EConvert" />
                                    <p>EConvert é uma ferramenta de conversão de medidas.</p>
                                    <h3>PLATAFORMAS</h3>
                                    <a href={projectsVar.pessoais.econvert.site_link} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                    </a>
                                    <a href={projectsVar.pessoais.econvert.windows} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                    </a>
                                    <a href={projectsVar.pessoais.econvert.mobile} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                    </a>
                                    <h3>API</h3>
                                    <a href={projectsVar.pessoais.econvert.api} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                    </a>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.pessoais.econvert.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                    </a>
                                    <a href={projectsVar.pessoais.econvert.rep_back_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <div className={styles.divDownloadsContentBodyItem}>
                            <div className={styles.divDownloadsContentBodyItemLeft}>
                                <h2>Resolve Tudo</h2>
                                <Image className={styles.imgLogo} src={logoResolveTudo} alt="Logo Resolve Tudo" />
                                <p>Resolve Tudo é um software com diversos cálculos disponíveis para você usar!</p>
                                <h3>PLATAFORMAS</h3>
                                <a href={projectsVar.pessoais.resolve_tudo.site_link} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                </a>
                                <a href={projectsVar.pessoais.resolve_tudo.windows} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                </a>
                                <a href={projectsVar.pessoais.resolve_tudo.mobile} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                </a>
                                <h3>API</h3>
                                <a href={projectsVar.pessoais.resolve_tudo.api} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                </a>
                                <h3>REPOSITÓRIOS</h3>
                                <a href={projectsVar.pessoais.resolve_tudo.rep_front_end} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                </a>
                                <a href={projectsVar.pessoais.resolve_tudo.rep_back_end} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                </a>
                            </div>
                            <div className={styles.divDownloadsContentBodyItemRight}>
                                <h2>Notas do Saber</h2>
                                <Image className={styles.imgLogo} src={logoNotasSaber} alt="Logo Notas do Saber" />
                                <p>Notas do Saber é uma ferramenta de notas aninhadas.</p>
                                <h3>PLATAFORMAS</h3>
                                <a href={projectsVar.pessoais.notas_saber.site_link} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_site} alt="Site" />
                                </a>
                                <a href={projectsVar.pessoais.notas_saber.windows} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_windows} alt="Windows" />
                                </a>
                                <a href={projectsVar.pessoais.notas_saber.mobile} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_mobile} alt="Mobile" />
                                </a>
                                <h3>API</h3>
                                <a href={projectsVar.pessoais.notas_saber.api} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_api} alt="API" />
                                </a>
                                <h3>REPOSITÓRIOS</h3>
                                <a href={projectsVar.pessoais.notas_saber.rep_front_end} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_front_end} alt="Front-end" />
                                </a>
                                <a href={projectsVar.pessoais.notas_saber.rep_back_end} target="_blank" rel="noreferrer">
                                    <Image className={styles.imgIcons} src={icon_back_end} alt="Back-end" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divDownloadsContent}>
                        <div className={styles.divDownloadsContentHeader}>
                            <h2>Rocketseat</h2>
                        </div>
                        <div className={styles.divDownloadsContentBody}>
                            <div className={styles.divDownloadsContentBodyItem}>
                                <div className={styles.divDownloadsContentBodyItemLeft}>
                                    <h2>Local Turístico</h2>
                                    <Image className={styles.imgLogo} src={logoLocalTuristico} alt="Logo" />
                                    <p>
                                        um dos meus primeiros projetos com a Rocketseat, um site de turismo local.
                                    </p>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.rocketseat.local_turistico.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Website" />
                                    </a>
                                    <a href={projectsVar.rocketseat.local_turistico.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_gitHub} alt="GitHub" />
                                    </a>
                                </div>
                                <div className={styles.divDownloadsContentBodyItemRight}>
                                    <h2>Sorteador de Números</h2>
                                    <Image className={styles.imgLogo} src={logoSorteador} alt="Logo" />
                                    <p>
                                        um projeto para sortear números aleatórios.
                                    </p>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.rocketseat.sorteador_numeros.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Website" />
                                    </a>
                                    <a href={projectsVar.rocketseat.sorteador_numeros.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_gitHub} alt="GitHub" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.divDownloadsContentBodyItem}>
                                <div className={styles.divDownloadsContentBodyItemLeft}>
                                    <h2>Agendamento Pet Shop</h2>
                                    <Image className={styles.imgLogo} src={logoPetShop} alt="Logo" />
                                    <p>
                                        um projeto para agendamento de serviços em pet shops.
                                    </p>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.rocketseat.agendamento_pet_shop.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Website" />
                                    </a>
                                    <a href={projectsVar.rocketseat.agendamento_pet_shop.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_gitHub} alt="GitHub" />
                                    </a>
                                </div>
                                <div className={styles.divDownloadsContentBodyItemRight}>
                                    <h2>Hair Day</h2>
                                    <Image className={styles.imgLogo} src={logoHairDay} alt="Logo" />
                                    <p>
                                      agendamento de serviços em salões
                                    </p>
                                    <h3>REPOSITÓRIOS</h3>
                                    <a href={projectsVar.rocketseat.hair_day.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_site} alt="Website" />
                                    </a>
                                    <a href={projectsVar.rocketseat.hair_day.rep_front_end} target="_blank" rel="noreferrer">
                                        <Image className={styles.imgIcons} src={icon_gitHub} alt="GitHub" />
                                    </a>
                                </div>
                            </div>
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