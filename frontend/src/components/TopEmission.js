import styles from "./TopEmission.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const TopEmission = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getdata").then((response) => {
      setData(response.data);
    });
  }, []);
  return <div className={styles.groupChild} />;
};

export default TopEmission;
