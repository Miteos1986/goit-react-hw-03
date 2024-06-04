import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/сontacts.json";


function App() {

 
return (
<div>
<h1>Phonebook</h1>
  {/* <ContactForm /> */}
  {/* <SearchBox /> */}
  <ContactList contact={initialContacts} />
   
</div>

)

}

export default App;
