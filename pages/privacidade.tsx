import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import Head from "next/head";
import styles from './privacidade.module.css';
import { motion } from "framer-motion";

export default function Privacidade() {
    return (
        <div>
            <Head>
                <title>saber evolve - Privacidade</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header />
            <motion.div
                className={styles.divPrivacidade}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

            <div className={styles.divOneContentPrivacy}>
                <h1> Política de privacidade </h1>
                <p>
                    A privacidade dos visitantes do nosso site é de extrema importância para nós. Esta política de privacidade descreve os tipos de informações 
                    pessoais que são recebidas e coletadas por saber evolve e como esses dados são utilizados.
                </p>
                <hr />
            </div>
        
            <div className={styles.divOneContentPrivacy}>
                <h1> Coleta de informações </h1>
                <p>
                    saber evolve coleta informações pessoais fornecidas voluntariamente pelos usuários, como nome, endereço de e-mail e outras informações 
                    necessárias para fornecer os serviços solicitados.
                </p>
                <hr />
            </div>
        
            <div className={styles.divOneContentPrivacy}>
                <h1> Use de informações </h1>
            
                <p>
                    As informações pessoais fornecidas são utilizadas exclusivamente para os fins específicos para os quais foram fornecidas, como responder 
                    a consultas ou fornecer serviços solicitados pelos usuários.
                </p>
                <hr />
            </div>
        
            <div className={styles.divOneContentPrivacy}>
                <h1> Proteção de dados </h1>
            
                <p>
                    saber evolve adota medidas de segurança para proteger as informações pessoais contra acesso não autorizado, uso indevido ou divulgação.
                </p>
                <hr />
            </div>
        
            <div className={styles.divOneContentPrivacy}>
                <h1> Cookies </h1>
                
                <p>
                    saber evolve pode utilizar cookies para melhorar a experiência do usuário e personalizar o conteúdo oferecido. Os usuários podem optar 
                    por não aceitar cookies alterando as configurações do navegador, no entanto, isso pode afetar a funcionalidade do site.
                </p>
                <hr />
            </div>
        
            <div className={styles.divOneContentPrivacy}>
                <h1> Divulgação a terceiros </h1>
            
                <p>
                    As informações pessoais dos usuários não serão vendidas, trocadas ou transferidas para terceiros sem consentimento prévio, exceto quando necessário 
                    para fornecer os serviços solicitados ou conforme exigido por lei.
                </p>
                <hr/>
            </div>

            <div className={styles.divOneContentPrivacy}>
                <h1> Alterações na Política de Privacidade </h1>
            
                <p>
                    Esta política de privacidade pode ser alterada periodicamente para refletir atualizações em nossas práticas de privacidade. Os usuários serão 
                    notificados sobre essas alterações através de uma notificação em destaque no site.
                </p>
            </div>
            </motion.div>
            <Footer />
        </div>
    );
};