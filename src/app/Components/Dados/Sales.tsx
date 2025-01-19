import styles from "./Sales.module.css";

import Image from "next/image";

import pythonCode from '../../../../public/images/dados/vendas_py/py.png';
import csvPrint from '../../../../public/images/dados/vendas_py/csv.png';

export default function Sales() {
    return (
        <div className={styles.divSales}>
            <h2>💻 Análise de vendas de artigos de informática</h2>     
            <h4 style={{color: 'blue'}}>Python</h4>
            <div className={styles.divImages}>
                <Image className={styles.imgCode} src={pythonCode} alt="Código python"/>
                <Image className={styles.imgCode} src={csvPrint} alt="Print do csv"/>
            </div>
            <p>
                Projeto de análise de vendas básico com dados fictícios feitos em Python com a biblioteca Pandas. Aqui está o insight que fiz:
            </p>
            <h3>Produtos mais vendidos</h3>
            <p>
                A análise revelou que os produtos mais vendidos são os Smartphones e Notebooks, indicando uma alta demanda por dispositivos móveis e portáteis.
            </p>
            <h3>Localizações com maior volume de vendas</h3>
            <p>
                As cidades de São Paulo e Rio de Janeiro apresentaram os maiores    volumes de vendas, sugerindo que essas regiões são mercados-chave para a empresa.
            </p>
            <h3>Tendências de preço</h3>
            <p>
                Observou-se que produtos com preços intermediários tendem a ter um volume de vendas maior, enquanto produtos muito caros ou muito baratos têm menor volume de vendas.
            </p>
        </div>
    )
}
