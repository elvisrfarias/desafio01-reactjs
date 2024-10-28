import styles from './Header.module.css'
import logo from '../../assets/foguete.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo de um foguete" />
            <h1>to<span>do</span></h1>
        </header >
    )
}
