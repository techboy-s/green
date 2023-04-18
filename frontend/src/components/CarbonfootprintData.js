import styles from "./CarbonfootprintData.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CarbonfootprintData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <a className={styles.metricCards}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.carbonFootprint}>Carbon FootPrint</div>
          <div className={styles.tCo2e}>2,456,343t CO2e</div>
        </div>
        <div className={styles.badge}>
          <div className={styles.content1}>
            <div className={styles.indicator} />
            <img
              className={styles.icontrendUp}
              alt=""
              src="/icontrend-up.svg"
            />
            <div className={styles.hello}>-45%</div>
            <img className={styles.icontrendUp} alt="" src="/iconclose.svg" />
          </div>
        </div>
        <div className={styles.info} />
      </div>
    </a>
  );
};

export default CarbonfootprintData;
