import { PlusCircle } from 'phosphor-react';
import styles from './FormTask.module.css';
import { FormEvent } from 'react';

export const FormTask = () => {
    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <form className={styles.form_content} onSubmit={handleSubmitForm}>
            <input
                type="text"
                className={styles.input_form}
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submit" className={styles.button_form}  >
                Criar <PlusCircle size={20} />
            </button>
        </form>
    )
}
