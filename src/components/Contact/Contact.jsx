

const Contact = ({id, name, number, }) => {
  return (
    <li>
        <div>
        <h3>{name} </h3>
        <p> {number} </p>
        </div>

        <button type="button" onClick={()=> (id)} >Delete</button>
        </li>
  )
}

export default Contact