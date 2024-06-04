

const Contact = ({id, name, number, onDelete}) => {
  return (
    <li>
        <div>
        <h3>{name} </h3>
        <p> {number} </p>
        </div>

        <button type="button" onClick={()=> onDelete(id)} >Delete</button>
        </li>
  )
}

export default Contact