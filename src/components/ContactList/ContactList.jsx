import Contact from "../Contact/Contact"


const ContactList = (contacts,onDelete) => {
  return (
    <div>
        <ul>
            {contacts.map(({id, name, number}) => (
                <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
            ))}
        </ul>
    </div>
  )
}

export default ContactList