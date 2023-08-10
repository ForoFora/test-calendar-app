import styles from "./App.module.scss";
import CalendarComponent from "./components/Calendar/Calendar"
import PersonList from "./components/Person/Person";
import Result from "./components/Result/Result";
import usePersonList from "./hooks/usePersonList";
import useResult from "./hooks/useResult";

function App() {
  const { personList, selectedPerson, addPerson, removePerson, selectPerson, setPersonDates } = usePersonList();
  const { results } = useResult(personList);

  return (
    <div className={styles.app}>
      <div className={styles.header}>hike calendar ⛺</div>
      <div className={styles.content}>
        {selectedPerson ? (<CalendarComponent selectedPerson={selectedPerson} setPersonDates={setPersonDates}/>) : null}
        <PersonList
            personList={personList}
            addPerson={addPerson}
            removePerson={removePerson}
            selectPerson={selectPerson}
          />
        <Result results={results} />
      </div>
    </div>
  );
}

export default App;