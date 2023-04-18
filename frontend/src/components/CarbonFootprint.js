import styles from "./CarbonFootprint.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CarbonFootprint = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <a className={styles.consumptionPerDay} target="_blank">
      <b className={styles.title}>Carbon Footprint</b>
      <img className={styles.buttonIcon} alt="" src="/button.svg" />
      <div className={styles.groupParent}>
        <div className={styles.lineParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.kParent}>
            <div className={styles.k}>50k</div>
            <div className={styles.k1}>100k</div>
            <div className={styles.k2}>150k</div>
            <div className={styles.k3}>200k</div>
            <div className={styles.k4}>250k</div>
            <div className={styles.k5}>300k</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild1} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-360.svg"
            />
          </div>
          <div className={styles.jan}>Jan</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <img
              className={styles.groupChild5}
              alt=""
              src="/rectangle-3601.svg"
            />
          </div>
          <div className={styles.feb}>Feb</div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
            <div className={styles.groupChild8} />
            <img
              className={styles.groupChild9}
              alt=""
              src="/rectangle-3602.svg"
            />
          </div>
          <div className={styles.mar}>Mar</div>
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild10} />
            <div className={styles.groupChild11} />
            <div className={styles.groupChild12} />
            <img
              className={styles.groupChild13}
              alt=""
              src="/rectangle-3603.svg"
            />
          </div>
          <div className={styles.apr}>Apr</div>
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild14} />
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <img
              className={styles.groupChild17}
              alt=""
              src="/rectangle-3604.svg"
            />
          </div>
          <div className={styles.may}>May</div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild18} />
            <div className={styles.groupChild19} />
            <div className={styles.groupChild20} />
            <img
              className={styles.groupChild21}
              alt=""
              src="/rectangle-3605.svg"
            />
          </div>
          <div className={styles.june}>June</div>
        </div>
        <div className={styles.groupParent5}>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild22} />
            <div className={styles.groupChild23} />
            <div className={styles.groupChild24} />
            <img
              className={styles.groupChild25}
              alt=""
              src="/rectangle-3606.svg"
            />
          </div>
          <div className={styles.july}>July</div>
        </div>
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-86.svg" />
          <div className={styles.spinning}>Spinning</div>
        </div>
        <div className={styles.ellipseGroup}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-85.svg" />
          <div className={styles.spinning}>Transportation</div>
        </div>
        <div className={styles.ellipseContainer}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-84.svg" />
          <div className={styles.spinning}>Carding</div>
        </div>
        <div className={styles.ellipseParent1}>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-83.svg" />
          <div className={styles.spinning}>{`Heating & Cooling`}</div>
        </div>
      </div>
    </a>
  );
};

export default CarbonFootprint;
