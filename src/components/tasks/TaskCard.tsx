import { Check, Trash } from 'phosphor-react';
import styles from './TaskCard.module.css';
import { useState } from 'react';

interface TaskCardProps {
    text: string;
    onDeletTask: (text: string) => void;
    onToggleCompletion: () => void;
}

export const TaskCard = ({ text, onDeletTask, onToggleCompletion }: TaskCardProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onToggleCompletion();
    };

    const handleDelete = () => {
        onDeletTask(text);
    };

    return (
        <div className={styles.task_card}>
            <div className={styles.check_box}>
                <button
                    className={`${styles.button_check_box} ${isClicked ? styles.button_check_box_clicked : ''}`}
                    onClick={handleClick} // Chama handleClick ao clicar
                >
                    {isClicked && <Check size={18} />}
                </button>
            </div>

            <p className={isClicked ? styles.task_finalizada : ''}>{text}</p>

            <button title='Deletar comentário' onClick={handleDelete}>
                <Trash size={20} />
            </button>
        </div>
    );
};
