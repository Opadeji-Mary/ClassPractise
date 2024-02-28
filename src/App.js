import NavBar from './component/NavBar'
import myStyle from './MyStyle.module.css'
import Foot from './component/Foot'
import Portal from './component/Portal'
import Button from './component/Button'

const App = () => { 
  let myName = "Feranmi"
  return (
    <> 
    <div>
      <h1 className={myStyle.header}>hufuf</h1>
      <h1>Welcome {myName}</h1>
      <h2>This is react</h2>
      <h3>hjefhuierbuer</h3>
    </div>
    <NavBar></NavBar>
    <Foot></Foot>
    <Portal></Portal>
  
    <Button title="edit"/>
    <Button title="Delete"/>
    <Button title="create"/>
    </>
  )
}

export default App