import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <footer className={styles.footer}>
        <img className={styles.iconsettings} alt="" />
        <img className={styles.iconlogout} alt="" />
        <img className={styles.iconlogout} alt="" />
      </footer>
      <div className={styles.menu}>
        <div className={styles.section01}>
          <div className={styles.title}>
            <div className={styles.dAS}>D A S H B O A R D</div>
          </div>
          <div className={styles.links}>
            <div className={styles.elementsmenuLink}>
              <div className={styles.header}>
                <div className={styles.frameParent}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconstats.svg"
                    />
                    <div className={styles.dashboard}>Dashboard</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronUp}
                  alt=""
                  src="/iconchevronup.svg"
                />
              </div>
              <div className={styles.links1}>
                <div className={styles.record}>Record</div>
                <div className={styles.dashboard}>Reports</div>
                <div className={styles.dashboard}>Analyse</div>
                <div className={styles.dashboard}>Learn</div>
              </div>
            </div>
            <div className={styles.elementsmenuLink1}>
              <div className={styles.frameGroup}>
                <div className={styles.iconstatsParent}>
                  <img
                    className={styles.iconlogout}
                    alt=""
                    src="/iconemail.svg"
                  />
                  <div className={styles.dashboard}>Messages</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
              <img
                className={styles.iconchevronDown}
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
            <div className={styles.elementsmenuLink1}>
              <div className={styles.frameGroup}>
                <div className={styles.iconstatsParent}>
                  <img
                    className={styles.iconlogout}
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className={styles.dashboard}>Friends</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
              <img
                className={styles.iconchevronDown}
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
            <div className={styles.elementsmenuLink1}>
              <div className={styles.frameGroup}>
                <div className={styles.iconstatsParent}>
                  <img
                    className={styles.iconlogout}
                    alt=""
                    src="/iconlayoutgrid.svg"
                  />
                  <div className={styles.dashboard}>Apps</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
              <img
                className={styles.iconchevronDown}
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.section01}>
          <div className={styles.title}>
            <div className={styles.dAS}>P A G E S</div>
          </div>
          <div className={styles.links}>
            <div className={styles.elementsmenuLink4}>
              <div className={styles.frameGroup}>
                <div className={styles.iconstatsParent}>
                  <img
                    className={styles.iconlogout}
                    alt=""
                    src="/iconsupport.svg"
                  />
                  <div className={styles.dashboard}>Help Center</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
              <img
                className={styles.iconchevronDown}
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
            <div className={styles.elementsmenuLink4}>
              <div className={styles.frameGroup}>
                <div className={styles.iconstatsParent}>
                  <img
                    className={styles.iconlogout}
                    alt=""
                    src="/iconfolder.svg"
                  />
                  <div className={styles.dashboard}>File Manager</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
              <img
                className={styles.iconchevronDown}
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.screenshot20230301At1056}
        alt=""
        src="/screenshot-20230301-at-1056-1@2x.png"
      />
    </div>
  );
};

export default Sidebar;
