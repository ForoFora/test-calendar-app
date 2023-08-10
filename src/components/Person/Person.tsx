import React, { useState } from "react";
import styles from "./Person.module.scss";

type Person = {
  name: string;
  dates: string[];
};

const PersonList = ({
  personList,
  addPerson,
  removePerson,
  selectPerson,
}: {
  personList: Person[];
  addPerson: (name: string) => void;
  removePerson: (name: string) => void;
  selectPerson: (name: string) => void;
}) => {
  const [newName, setNewName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleAddPerson = () => {
    const index = personList.findIndex((person) => person.name === newName);

    if (index !== -1) {
      alert('Пожалуйста выберете другое имя или добавьте фамилию!')
      return;
    }

    if (newName) {
      addPerson(newName);
      setNewName("");
    }
  };

  const handleRemovePerson = (name: string) => {
    selectPerson('');
    removePerson(name);
  };

  return (
    <div className={styles.person}>
      <div className={styles.inputBox}>
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          placeholder="Введите имя"
          className={styles.input}
        />
        <button className={styles.addButton} onClick={handleAddPerson}>Добавить</button>
      </div>
      <div>
        {personList.map((person) => (
          <div key={person.name} className={styles.personItem}>
            
            <div className={styles.personInfo}>
              <button
                className={styles.dateButton}
                onClick={() => selectPerson(person.name)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.icon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </button>
              {person.name}
            </div>
            <button
              className={styles.removeButton}
              onClick={() => handleRemovePerson(person.name)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.icon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
