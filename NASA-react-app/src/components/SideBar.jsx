export default function SideBar(props) {
  const { handleToggleModal } = props

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h1>SideBar</h1>
        <h2>Ground control to major tom</h2>

        <div>
          <p>Descriptoion:</p>
          <p>Full length decsription</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
