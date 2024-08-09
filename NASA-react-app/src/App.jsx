import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState } from 'react'
function App() {
  /* const [variable with state, function to change state and set new value of variable] = useState(value variable starts at)*/
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {

    setShowModal(!showModal)
  }

  return (
    <div>
      <Main />

      {showModal && <SideBar />}
      <Footer showModal={showModal}/>
    </div>
    /* the showModal && booolean means if showModal is true show the SideBar

      the first showModal in the footer assigns 'showModal' as a prop
      the scond sets showModal as the boolean useState value

      these props are imported from footer 
    
    */

  
  )
}


export default App
