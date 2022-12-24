import React from "react";
import Report from "../AddReport/ReportVisuals";
import PopupReport from "../AddReport/PopupReport";

import styles from "./PartialCode.module.scss";

export default function PartialCode(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.flexCol}>
          <div className={styles.content_box3}>
            <div className={styles.flexRow}>
              <div className={styles.flexRow__spacer} />
              <div className={styles.flexRow__item}>
                <div className={styles.flexRow1}>
                  <div className={styles.flexRow1__item}>
                    <svg
                      className={styles.image2}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div className={styles.flexRow1__spacer} />
                  <div className={styles.flexRow1__item1}>
                    <h2 className={styles.medium_title}>Cyethack Solutions</h2>
                  </div>
                </div>
              </div>
              <div className={styles.flexRow__spacer1} />
              <div className={styles.flexRow__item1}>
                <div className={styles.list}>
                  <div className={styles.list__item}>
                    <px-grid
                      track-style="flex-grow: 1;"
                      x="0px 189fr 0px"
                      y="0px minmax(0px, max-content) 0px"
                      md-x="0px 189fr 0px"
                      md-y="0px minmax(0px, max-content) 0px"
                      sm-x="0px minmax(0px,189px) 0px"
                      sm-y="0px minmax(0px, max-content) 0px"
                    >
                      <button
                        className={styles.btn}
                        onClick={() => alert("It is clickable")}
                      >
                        <div className={styles.flexRow2}>
                          <div className={styles.flexRow2__item}>
                            <span className={styles.btn__text}>VMDR</span>
                          </div>
                          <div className={styles.flexRow2__spacer} />
                          <div className={styles.flexRow2__item1}>
                            <svg
                              className={styles.btn__icon}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </px-grid>
                  </div>
                  <div className={styles.list__item1}>
                    <div className={styles.group}>
                      <svg
                        className={styles.image}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.list__item2}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                      <circle cx="12" cy="10" r="3" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.flexRow3}>
            <div className={styles.flexRow3__item}>
              <div className={styles.content_box4}>
                <div className={styles.flexCol1}>
                  <div className={styles.flexCol2}>
                    <div className={styles.flexCol2__item}>
                      <svg
                        className={styles.icon1}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className={styles.flexCol2__item}>
                      <h5 className={styles.highlights}>Dashboard</h5>
                    </div>
                  </div>

                  <div className={styles.flexCol3}>
                    <div className={styles.flexCol3__item}>
                      <svg
                        className={styles.image3}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className={styles.flexCol3__item}>
                      <h5 className={styles.highlights1}>Team</h5>
                    </div>
                  </div>

                  <div className={styles.flexCol4}>
                    <div className={styles.flexCol4__item}>
                      <svg
                        className={styles.wrapper}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className={styles.flexCol4__item}>
                      <h5 className={styles.highlights11}>Report</h5>
                    </div>
                  </div>

                  <div className={styles.flexCol4}>
                    <div className={styles.flexCol4__item1}>
                      <svg
                        className={styles.image6}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className={styles.flexCol4__item1}>
                      <h5 className={styles.highlights2}>Target</h5>
                    </div>
                  </div>

                  <div className={styles.flexCol5}>
                    <div className={styles.flexCol5__item}>
                      <svg
                        className={styles.icon2}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div className={styles.flexCol5__item}>
                      <h5 className={styles.highlights}>Setting</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flexRow3__spacer} />
            <div className={styles.flexRow3__item1}>
              <div className={styles.flexCol6}>
                <div className={styles.group1}>
                  <div className={styles.rect} />

                  <div className={styles.flexCol}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginRight: "5px",
                      }}
                    >
                      <h5 className={styles.highlights3}>7 Reports</h5>
                      <PopupReport>
                        <div
                          style={{
                            background: "#303e55",
                            color: "white",
                            borderRadius: "5px",
                            padding: "16px 48px",
                            fontSize: "18px",
                          }}
                        >
                          Add Report
                        </div>
                      </PopupReport>
                    </div>

                    <div className={styles.content_box2}>
                      <div className={styles.flexRow4}>
                        <div className={styles.flexRow4__item}>
                          <h4 className={styles.highlights4}>Name</h4>
                        </div>
                        <div className={styles.flexRow4__spacer} />
                        <div className={styles.flexRow4__item1}>
                          <h4 className={styles.highlights4}>Format</h4>
                        </div>
                        <div className={styles.flexRow4__spacer1} />
                        <div className={styles.flexRow4__item2}>
                          <h4 className={styles.highlights41}>Type</h4>
                        </div>
                        <div className={styles.flexRow4__spacer2} />
                        <div className={styles.flexRow4__item3}>
                          <h4 className={styles.highlights4}>Status</h4>
                        </div>
                        <div className={styles.flexRow4__spacer1} />
                        <div className={styles.flexRow4__item4}>
                          <h4 className={styles.highlights4}>Size</h4>
                        </div>
                        <div className={styles.flexRow4__spacer3} />
                        <div className={styles.flexRow4__item5}>
                          <h4 className={styles.highlights4}>
                            Generation Date
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className={styles.flexRow5}>
                      <div className={styles.flexRow5__item}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow5__spacer} />
                      <div className={styles.flexRow5__item1}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow5__spacer1} />
                      <div className={styles.flexRow5__item2}>
                        <h5 className={styles.highlights21}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow5__spacer2} />
                      <div className={styles.flexRow5__item3}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow5__spacer3} />
                      <div className={styles.flexRow5__item4}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow5__spacer4} />
                      <div className={styles.flexRow5__item5}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line} size={1} />

                    <div className={styles.flexRow6}>
                      <div className={styles.flexRow6__item}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow6__spacer} />
                      <div className={styles.flexRow6__item1}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow6__spacer1} />
                      <div className={styles.flexRow6__item2}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow6__spacer2} />
                      <div className={styles.flexRow6__item3}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow6__spacer3} />
                      <div className={styles.flexRow6__item4}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow6__spacer4} />
                      <div className={styles.flexRow6__item5}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line} size={1} />

                    <div className={styles.flexRow7}>
                      <div className={styles.flexRow7__item}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow7__spacer} />
                      <div className={styles.flexRow7__item1}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow7__spacer1} />
                      <div className={styles.flexRow7__item2}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow7__spacer2} />
                      <div className={styles.flexRow7__item3}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow7__spacer3} />
                      <div className={styles.flexRow7__item4}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow7__spacer4} />
                      <div className={styles.flexRow7__item5}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line} size={1} />

                    <div className={styles.flexRow6}>
                      <div className={styles.flexRow6__item6}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow6__spacer5} />
                      <div className={styles.flexRow6__item7}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow6__spacer6} />
                      <div className={styles.flexRow6__item8}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow6__spacer7} />
                      <div className={styles.flexRow6__item9}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow6__spacer8} />
                      <div className={styles.flexRow6__item10}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow6__spacer9} />
                      <div className={styles.flexRow6__item11}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line2} size={1} />

                    <div className={styles.flexRow6}>
                      <div className={styles.flexRow6__item12}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow6__spacer10} />
                      <div className={styles.flexRow6__item13}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow6__spacer11} />
                      <div className={styles.flexRow6__item14}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow6__spacer12} />
                      <div className={styles.flexRow6__item15}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow6__spacer13} />
                      <div className={styles.flexRow6__item16}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow6__spacer14} />
                      <div className={styles.flexRow6__item17}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line} size={1} />

                    <div className={styles.flexRow7}>
                      <div className={styles.flexRow7__item6}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow7__spacer5} />
                      <div className={styles.flexRow7__item7}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow7__spacer6} />
                      <div className={styles.flexRow7__item8}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow7__spacer7} />
                      <div className={styles.flexRow7__item9}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow7__spacer8} />
                      <div className={styles.flexRow7__item10}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow7__spacer9} />
                      <div className={styles.flexRow7__item11}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>

                    <hr className={styles.line} size={1} />

                    <div className={styles.flexRow6}>
                      <div className={styles.flexRow6__item18}>
                        <h5 className={styles.highlights31}>Asset Name</h5>
                      </div>
                      <div className={styles.flexRow6__spacer15} />
                      <div className={styles.flexRow6__item19}>
                        <h5 className={styles.highlights21}>PDF Document</h5>
                      </div>
                      <div className={styles.flexRow6__spacer16} />
                      <div className={styles.flexRow6__item20}>
                        <h5 className={styles.highlights22}>
                          Executive Report
                        </h5>
                      </div>
                      <div className={styles.flexRow6__spacer17} />
                      <div className={styles.flexRow6__item21}>
                        <h5 className={styles.highlights5}>Complete</h5>
                      </div>
                      <div className={styles.flexRow6__spacer18} />
                      <div className={styles.flexRow6__item22}>
                        <h5 className={styles.highlights21}>257.8 KB</h5>
                      </div>
                      <div className={styles.flexRow6__spacer19} />
                      <div className={styles.flexRow6__item23}>
                        <h5 className={styles.highlights21}>11 Dec 2022</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
