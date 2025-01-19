import styles from './Weather.module.css';

import sqlPrint from '../../../../public/images/dados/weather_sql/sql.png';

import Image from 'next/image';

export default function Weather() {
    return (
        <div className={styles.divWeather}>
            <h2>🌦️ Análise de climas</h2>
            <h3 style={{color: 'orange'}}>SQL</h3>
            <Image className={styles.imgCode} src={sqlPrint} alt="Código SQL"/>
            <h4>Insights</h4>
            <p><strong>Variações climáticas ao longo do ano 🌡️</strong></p>
            <p>Com a análise das medições diárias, é possível identificar tendências sazonais, como altas temperaturas no verão e baixa umidade no inverno.
            A detecção precoce dessas variações pode ajudar na prevenção de desastres naturais, como secas e ondas de calor.</p>
            <p><strong>Correlação Entre Sensores 📊</strong></p>
            <p>A relação entre variáveis como temperatura e umidade pode ser analisada para prever eventos climáticos extremos, como chuvas intensas.
            Se a pressão atmosférica cair rapidamente, isso pode indicar uma tempestade iminente, auxiliando na tomada de decisões de segurança.</p>
        </div>
    )
}