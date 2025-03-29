import styles from './Pizzaria.module.css';

export function Pizzaria() {
    return (
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
    )
}