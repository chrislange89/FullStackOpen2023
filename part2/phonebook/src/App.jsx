import { useState, useEffect } from 'react';

import Numbers from './components/numbers.component';
import Search from './components/search.component';
import Entry from './components/entry.component';
import Notification from './components/notification.component';

import personsService from './services/persons.service';

import './App.styles.css';

const NotificationTypes = {
  ERROR: 'error',
  NOTIFICATION: 'notification',
}

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
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
        console.log(res);
        const remainingPeople = persons.filter((person) => person.id != personId);
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

  const updateExisting = (person) => {
    const updatedPerson = {
      ...person,
      number: newNumber,
    }
    personsService.update(person.id, updatedPerson)
    .then((res) => {
      console.log(res.data);
      const updatedPeople = persons.map((person) => person.id !== updatedPerson.id ? person : res.data);
      setPersons(updatedPeople);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (personExists(newName)) {
      const foundPerson = persons.find((person) => person.name === newName);
      const userWantsToUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (userWantsToUpdate) {
        updateExisting(foundPerson);
      }
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
      displayNotification(`${newPerson.name} was added to the phonebook`, NotificationTypes.NOTIFICATION)
    })
    .catch((err) => {
      console.log(err);
    })

    clearForm();
  }

  const handleSubmit = (event) => {
    addNewPerson(event);
  }

  const displayNotification = (message, type) => {
    switch (type) {
      case NotificationTypes.ERROR:
        setErrorMessage(message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        break;
      case NotificationTypes.NOTIFICATION:
        setNotificationMessage(message);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        break;
      default:
        break;
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification 
        message={notificationMessage}
        notificationType={NotificationTypes.NOTIFICATION}
      />
      <Notification 
        message={errorMessage}
        notificationType={NotificationTypes.ERROR}
      />
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
      <Numbers 
        people={filteredPeople}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App