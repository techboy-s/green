import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CarbonfootprintData from "../components/CarbonfootprintData";
import EmissionBySpinning from "../components/EmissionBySpinning";
import EmmisionByTransportation from "../components/EmmisionByTransportation";
import EmissionByCarding from "../components/EmissionByCarding";
import CarbonFootprint from "../components/CarbonFootprint";
import TopEmission from "../components/TopEmission";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.body}>
        <Navbar />
        <a className={styles.metrics} href="https://greenstitch.io/">
          <CarbonfootprintData />
          <EmissionBySpinning />
          <EmmisionByTransportation />
          <EmissionByCarding />
        </a>
        <iframe className={styles.bodyChild} src="https://greenstitch.io/" />
      </div>
      <CarbonFootprint />
      <a
        className={styles.rectangleParent}
        href="https://greenstitch.io/"
        target="_blank"
      >
        <TopEmission />
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="/ellipse-86.svg" />
            <div className={styles.spinning}>Spinning</div>
            <div className={styles.div}>22%</div>
          </div>
          <div className={styles.ellipseGroup}>
            <img className={styles.groupChild} alt="" src="/ellipse-85.svg" />
            <div className={styles.spinning}>Transportation</div>
            <div className={styles.div}>16%</div>
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.groupChild} alt="" src="/ellipse-84.svg" />
            <div className={styles.spinning}>Carding</div>
            <div className={styles.div}>27%</div>
          </div>
          <div className={styles.groupDiv}>
            <img className={styles.groupChild} alt="" src="/ellipse-83.svg" />
            <div className={styles.spinning}>{`Heating & Cooling`}</div>
            <div className={styles.div}>35%</div>
          </div>
        </div>
        <b className={styles.title}>Top emissions by type</b>
        <img className={styles.groupIcon} alt="" src="/group-156.svg" />
      </a>
    </div>
  );
};

export default Dashboard;
