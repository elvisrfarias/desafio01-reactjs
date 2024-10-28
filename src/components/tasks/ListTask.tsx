import styles from './ListTask.module.css';


export const ListTask = () => {
    return (
        <div className={styles.content_task}>
            <div className={styles.gestao_task}>
                <h3 className={styles.tarefa_criada}>
                    Tarefas Criadas <span className={styles.quantidade_task}>5</span>
                </h3>
                <h3 className={styles.tarefa_concluida} >
                    Concluídas <span className={styles.quantidade_task}>2 de 5</span>
                </h3>
            </div>
        </div>
    )
}
