import ContactList from "./components/ContactList/ContactList";



function App() {

 
return (
<div>
<h1>Phonebook</h1>
  {/* <ContactForm /> */}
  {/* <SearchBox /> */}
  <ContactList contacts={ContactList} />
   
</div>

)

}

export default App;
