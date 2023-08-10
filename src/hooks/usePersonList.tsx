import { useState } from "react";

type Person = {
  name: string;
  dates: string[];
};

const usePersonList = () => {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person>();

  const addPerson = (name: string) => {
    const person: Person = {
      name,
      dates: [],
    };
    setPersonList([...personList, person]);
  };

  const removePerson = (name: string) => {
    const filteredList = personList.filter((person) => person.name !== name);
    setPersonList(filteredList);
  };

  const selectPerson = (name: string) => {
    const index = personList.findIndex((person) => person.name === name);
    if (index !== -1) {
        setSelectedPerson(personList[index]);
      } else {
        setSelectedPerson(undefined)
      }
  }

  const setPersonDates = (name: string, dates: string[]) => {
    const index = personList.findIndex((person) => person.name === name);
    if (index !== -1) {
      const newList = [...personList];
      newList[index].dates = dates;
      setPersonList(newList);
    }
  };

  return { personList, selectedPerson, addPerson, removePerson, selectPerson, setPersonDates };
};

export default usePersonList;
