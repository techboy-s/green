import styles from "./EmissionBySpinning.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const EmissionBySpinning = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <a className={styles.typemetricStylestyle6}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.emissionsBySpinning}>
            Emissions by Spinning
          </div>
          <div className={styles.t}>75,4235t</div>
          <div className={styles.co2e}>CO2e</div>
        </div>
        <div className={styles.badge}>
          <div className={styles.content1}>
            <div className={styles.indicator} />
            <img
              className={styles.icontrendUp}
              alt=""
              src="/icontrend-up1.svg"
            />
            <div className={styles.hello}>-60%</div>
            <img className={styles.icontrendUp} alt="" src="/iconclose1.svg" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default EmissionBySpinning;
