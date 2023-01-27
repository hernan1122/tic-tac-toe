export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handerClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handerClick} className={className}>
      {children}
    </div>
  )
}