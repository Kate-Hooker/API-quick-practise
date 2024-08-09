import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useState, useEffect } from 'react'
function App() {
  /* const [variable with state, function to change state and set new value of variable] = useState(value variable starts at)*/
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log('DATA\n', data)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchAPIData()
  }, [])

  return (
    <div>
      <Main />

      {showModal && <SideBar handleToggleModal={handleToggleModal} />}
      <Footer showModal={handleToggleModal} />
    </div>
    /* the showModal && booolean means if showModal is true show the SideBar

      the first showModal in the footer assigns 'showModal' as a prop
      the scond sets showModal as the boolean useState value

      these props are imported from footer 
    
    */
  )
}

export default App
