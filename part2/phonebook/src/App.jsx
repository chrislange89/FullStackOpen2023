import { useState, useEffect } from 'react'

import Numbers from './components/numbers.component'
import Search from './components/search.component'
import Entry from './components/entry.component'

import personsService from './services/persons.service'

const App = () => {
  const getInitialPersons = () => {
    personsService.getAll()
    .then((res) => {
      setPersons(res.data);
    }).catch((err) => {
      console.log(err);
    })
  } 

  useEffect(getInitialPersons, []);

  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let filteredPeople = persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleNewName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }
  
  const handleDelete = (event) => {
    event.preventDefault();
    const personId = event.target.id;
    const foundPerson = persons.find((person) => person.id == personId);
    const confirmDelete = window.confirm(`Delete ${foundPerson.name}?`);
    if (confirmDelete) {
      personsService.deletePerson(personId)
      .then((res) => {
        console.log(res.data);
        const remainingPeople = persons.filter((person) => person.id !== personId);
        const parent = event.target.parentNode;
        parent.parentNode.removeChild(parent);
        setPersons(remainingPeople);
      })
      .catch((err) => {
        console.log(err);
      })
    }
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

    personsService.create(newPerson)
    .then((res) => {
      console.log(res);
      setPersons(persons.concat(newPerson));
    })
    .catch((err) => {
      console.log(err);
    })

    clearForm();
  }

  const handleSubmit = (event) => {
    addNewPerson(event);
  }

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
      <Numbers people={filteredPeople} handleDelete={handleDelete}/>
    </div>
  )
}

export default App