import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleDelete = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleSaveContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: name,
      surname: surname,
      phone: phone
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setSurname('');
    setPhone('');
    setShowForm(false);
  };

  return (
    <div className="App">
      <h1>Список контактів</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showForm ? (
        <button className="add-contact-button" onClick={handleFormToggle}>
          Додати контакт
        </button>
      ) : (
        <div className="contact-form">
          <h2>Форма контакту</h2>
          <label>
            Ім'я:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Прізвище:
            <input
              type="text"
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
          </label>
          <br />
          <label>
            Телефон:
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </label>
          <br />
          <button className="save-button" onClick={handleSaveContact}>
            Зберегти
          </button>
          <button className="cancel-button" onClick={handleFormToggle}>
            Скасувати
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


