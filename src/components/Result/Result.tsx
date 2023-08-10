import styles from "./Result.module.scss";

type Results = {
  date: string;
  names: string[];
};

const Result = ({ results }: { results: Results[] }) => {
  return (
    <div className={styles.result}>
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.date} className={styles.resultItem}>
            <div className={styles.resultItemDate}>{result.date}</div>
            <div className={styles.resultItemNames}>{result.names.join(", ")}</div>
          </div>
        ))
      ) : (
        <div>Нет совпадений</div>
      )}
    </div>
  );
};

export default Result;