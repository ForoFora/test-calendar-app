import { useMemo } from "react";

type Result = {
  date: string;
  names: string[];
};

type Person = {
    name: string;
    dates: string[];
  };

const useResult = (personList: Person[]) => {
  const results = useMemo(() => {
    const results: Result[] = [];

    let value = personList.flatMap(person => person.dates);
    let uniqueValue = [...new Set(value)];

    let selectedDates: string[] = uniqueValue;

    for (let date of selectedDates) {
      const names: string[] = [];

      for (let person of personList) {
        if (person.dates.includes(date)) {
          names.push(person.name);
        }
      }

      if (names.length > 1) {
        const result: Result = {
          date,
          names,
        };
        results.push(result);
      }
    }

    results.sort((a, b) => b.names.length - a.names.length);
    return results;

}, [personList]);

return { results }; };

export default useResult;