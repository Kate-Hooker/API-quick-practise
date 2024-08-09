import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState } from 'react'
function App() {
  /* const [variable with state, function to change state and set new value of variable] = useState(value variable starts at)*/
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Main />

      {showModal && <SideBar />}
      <Footer />
    </div>
    /* the showModal && booolean means if showModal is true show the SideBar */
  )
}

export default App
