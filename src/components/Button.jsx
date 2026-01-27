import "../css/Button.css"
function Button({id, text, action}) {
  return (
    <button id={id} onClick={action}> {text} </button>
  )
}

export default Button