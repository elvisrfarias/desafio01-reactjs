import { TaskCard } from './TaskCard';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './ListTask.module.css';

export interface Task {
    id: number;
    content: string;
    isCompleted: boolean,
}

export const ListTask = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskContent, setNewTaskContent] = useState('');

    const onDeletTask = (taskContent: string) => {
        const updatedTasks = tasks.filter(task => task.content !== taskContent);
        setTasks(updatedTasks);
    };

    const handleAddTask = () => {
        if (newTaskContent.trim()) {
            const newTask: Task = {
                id: Date.now(), // Gera um ID único com base no timestamp atual
                content: newTaskContent,
                isCompleted: false,
            };
            setTasks([...tasks, newTask]);
            setNewTaskContent('');
        }
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();
    };

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskContent(event.target.value)
    };

    const completedTasksCount = tasks.filter(task => task.isCompleted).length;

    return (
        <div className={styles.content_task}>
            <header>
                <form className={styles.form_content} onSubmit={handleSubmitForm}>
                    <input
                        type="text"
                        className={styles.input_form}
                        placeholder="Adicione uma nova tarefa"
                        value={newTaskContent}
                        onChange={handleChangeInput}
                    />
                    <button type="submit" className={styles.button_form} onClick={handleAddTask}>
                        Criar <PlusCircle size={20} />
                    </button>
                </form>
            </header>

            <div className={styles.gestao_task}>
                <h3 className={styles.tarefa_criada}>
                    Tarefas Criadas <span className={styles.quantidade_task}>{tasks.length}</span>
                </h3>
                <h3 className={styles.tarefa_concluida}>
                    Concluídas <span className={styles.quantidade_task}>{completedTasksCount} de {tasks.length}</span>
                </h3>
            </div>

            <main>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        text={task.content}
                        onDeletTask={onDeletTask}
                        onToggleCompletion={() => toggleTaskCompletion(task.id)}
                    />
                ))}
            </main>
        </div>
    );
};
