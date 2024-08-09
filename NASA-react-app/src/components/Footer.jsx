export default function Footer(props) {
  const { showModal, handleToggleModal } = props

  return (
    <footer>
      <div className="bgGrdaient"> </div>
      <div>
        <h2>Bowies in space</h2>
        <h1> APOD project</h1>
      </div>

      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}
