import { useState } from 'react'
import Numbers from './components/numbers.component'
import Search from './components/search.component'
import Entry from './components/entry.component'

const App = () => {
  const defaultPersons = [
    { 
      id: 1,
      name: 'Arto Hellas', 
      number: '040-1234567' 
    },
    {
      id: 2,
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    }
  ]

  const [persons, setPersons] = useState(defaultPersons); 

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNewName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }
  
  const handleSearchTerm = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const personExists = (name) => {
    return persons.some((person) => person.name === name);
  }

  const clearForm = () => {
    setNewName('');
    setNewNumber('');
  }

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      id: crypto.randomUUID(),
      name: newName,
      number: newNumber,
    }
    if (personExists(newName)) {
      alert(`${newName} is already added to phonebook`);
      clearForm();
      return;
    }

    if (newName === '') {
      alert('Please enter a name');
      return;
    }

    if (newNumber === '') {
      alert('Please enter a number');
      return;
    }

    setPersons(persons.concat(newPerson));
    clearForm();
  }

  const handleSubmit = (event) => {
    addNewPerson(event);
  }

  const shownPeople = persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <Search 
        searchTerm={searchTerm} 
        handleSearchTerm={handleSearchTerm}
      />
      <Entry 
        handleSubmit={handleSubmit} 
        newName={newName} 
        handleNewName={handleNewName} 
        newNumber={newNumber} 
        handleNewNumber={handleNewNumber} 
        addNewPerson={addNewPerson}
      />
      <Numbers people={shownPeople} />
    </div>
  )
}

export default App