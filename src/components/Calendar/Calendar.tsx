import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';
import styles from './Calendar.module.scss';

type Person = {
  name: string;
  dates: string[];
};

function CalendarComponent({
  selectedPerson,
  setPersonDates,
}: {
  selectedPerson: Person | undefined;
  setPersonDates: (name: string, dates: string[]) => void;
}) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<Array<string>>([]);
  const [selectPerson, setSelectPerson] = useState<Person>();

  useEffect(() => {
    setSelectPerson(selectedPerson);
  });

  useEffect(() => {
    if (selectPerson?.dates) {
      setSelectedDates(selectPerson?.dates)
    }
  }, [selectPerson]);

  const onChange = (value: any, event: React.MouseEvent<HTMLButtonElement>) => {

    setSelectedDate(value);

    const dates = [...selectedDates];
    const index = dates.indexOf(value.toDateString());

    if (index !== -1) {
      dates.splice(index, 1);
    } else {
      dates.push(value.toDateString());
    }
    setSelectedDates(dates);

    if (selectedPerson?.name) {
      setPersonDates(selectedPerson.name, dates)
    }
  };

  return (
    <div>
    <div>
        <Calendar onChange={onChange} value={selectedDate} selectRange={false} />
    </div>
    <div className={styles.selectedDates}>
      <div className={styles.selectedName}>{selectedPerson?.name}</div>
    {selectedDates.length > 0 ? (
      selectedDates.map((value, index) => (
        <div key={index}>
          <div>{value}</div>
        </div>
      ))
    ) : (
      <div className="no-match">Нет выбранных дат</div>
    )}
</div>
</div>
  );
}

export default CalendarComponent;