import styles from './Students.module.css';

export default function Students() {
    return (
        <div className={styles.divStudents}>
            <h2>📚 Análise de Estudantes</h2>
            <h3 style={{color: 'purple'}}>R</h3>
            <p>projeto em R para análise de dados estatísticos, com o contexto de alunos de uma escola.</p>
            <h4>Insights</h4>
            <h3>🔎 1. A maioria dos alunos apresenta desempenho médio</h3>
            <p>A distribuição dos desempenhos mostra que a maioria dos alunos está na categoria média, indicando que há espaço para melhorias e reforço no ensino para elevar os índices.</p>
            <h3>🔎 2. Poucos alunos possuem notas extremamente baixas ou extremamente altas</h3>
            <p>O histograma de médias revela que poucos alunos têm médias abaixo de 5 ou acima de 9, sugerindo que a maioria se mantém dentro de um padrão razoável de aprendizado.</p>
            <h3>🔎 3. Disciplinas exatas podem ser um desafio para muitos alunos</h3>
            <p>Comparando os dados, Matemática tende a ter notas ligeiramente menores do que as demais disciplinas, indicando que essa área pode necessitar de mais suporte acadêmico.</p>
            <h3>🔎 4. Estudantes com médias altas possuem consistência entre as matérias</h3>
            <p>Alunos classificados com alto desempenho costumam ter boas notas em todas as disciplinas, o que pode indicar uma boa base de aprendizado e métodos de estudo eficientes.</p>
            <h3>🔎 5. Estratégias de reforço podem melhorar o desempenho geral</h3>
            <p>Para reduzir a quantidade de alunos com médias baixas (abaixo de 6), seria interessante implementar monitorias, aulas de reforço ou revisão de conteúdos essenciais.</p>
        </div>
    )
}