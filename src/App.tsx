import { Header } from "./components/header/Header"
import { ListTask } from "./components/tasks/ListTask"

import styles from './App.module.css'

export const App = () => {

  return (
    <>
      <Header />
      <div className={styles.app}>
        <ListTask  />
      </div>
    </>
  )
}
