import styles from "./EmmisionByTransportation.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const EmmisionByTransportation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <a className={styles.typemetricStylestyle7}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.emissionByTransportation}>
            Emission By Transportation
          </div>
          <div className={styles.t}>360,983t</div>
          <div className={styles.co2e}>CO2e</div>
        </div>
        <div className={styles.info}>
          <div className={styles.badge}>
            <div className={styles.content1}>
              <div className={styles.indicator} />
              <img
                className={styles.icontrendUp}
                alt=""
                src="/icontrend-up.svg"
              />
              <div className={styles.hello}>0.00</div>
              <img className={styles.icontrendUp} alt="" src="/iconclose.svg" />
            </div>
          </div>
          <div className={styles.from46}>From 4.6%</div>
        </div>
      </div>
    </a>
  );
};

export default EmmisionByTransportation;
