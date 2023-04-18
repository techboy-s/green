import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.elementstopBar}>
      <div className={styles.items}>
        <div className={styles.icons}>
          <img
            className={styles.iconIndicator}
            alt=""
            src="/icon-indicator.svg"
          />
          <img className={styles.iconcalendar} alt="" src="/iconcalendar.svg" />
          <img
            className={styles.iconcalendar}
            alt=""
            src="/iconlayoutgrid1.svg"
          />
        </div>
        <div className={styles.avatar}>
          <div className={styles.imagePlaceholder}>
            <img
              className={styles.pasteImageIcon}
              alt=""
              src="/paste-image@2x.png"
            />
          </div>
          <div className={styles.indicator} />
        </div>
      </div>
      <div className={styles.formInput}>
        <div className={styles.formelementstitle}>Label</div>
        <div className={styles.input}>
          <div className={styles.iconinput}>
            <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
            <div className={styles.yourEmail}>Search...</div>
          </div>
          <img
            className={styles.iconarrowRight}
            alt=""
            src="/iconarrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
