import { Header } from "./components/header/Header"
import { FormTask } from "./components/tasks/FormTask"
import { ListTask } from "./components/tasks/ListTask"

function App() {

  return (
    <>
      <Header />
      <main style={{ width: 1440, margin: '0 auto' }}>
        <FormTask />
        <ListTask />
      </main>
    </>
  )
}

export default App
