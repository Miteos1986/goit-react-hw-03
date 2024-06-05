import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./components/сontacts.json";


function App() {
const [contacts, setContacts]= useState(initialContacts)

  const [filter, setFilter] = useState("") 

  const filterContact = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()) )
 
return (
<div>
<h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts={filterContact} />
   
</div>

)

}

export default App;
