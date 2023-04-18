import styles from "./EmissionByCarding.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const EmissionByCarding = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <a className={styles.typemetricStylestyle8}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.emissionByCarding}>Emission by Carding</div>
          <div className={styles.div}>266,678</div>
          <div className={styles.co2e}>CO2e</div>
        </div>
        <div className={styles.info}>
          <div className={styles.badge}>
            <div className={styles.content1}>
              <div className={styles.indicator} />
              <img
                className={styles.icontrendUp}
                alt=""
                src="/icontrend-up2.svg"
              />
              <div className={styles.hello}>+0.6%</div>
              <img
                className={styles.icontrendUp}
                alt=""
                src="/iconclose2.svg"
              />
            </div>
          </div>
          <div className={styles.from46}>From 4.6%</div>
        </div>
      </div>
    </a>
  );
};

export default EmissionByCarding;
