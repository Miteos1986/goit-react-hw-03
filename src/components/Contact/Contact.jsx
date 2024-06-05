import css from "./Contact.module.css"

const Contact = ({id, name, number, }) => {
  return (
    <li className={css.li}>
        <div>
        <h3 className={css.h3}>{name} </h3>
        <p className={css.p}> {number} </p>
        </div>

        <button className={css.button} type="button" onClick={()=> (id)} >Delete</button>
        </li>
  )
}

export default Contact