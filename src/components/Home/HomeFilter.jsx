import style from "../../styles/home/home_filter.module.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { companyData } from "../../data/HomePageData";

function HomeFilter({showFilter, setShowFilter}) {
  const [compnay, setCompany] = useState(companyData);
  return (
    <div className={`${showFilter? style.show : ""} ${style.section}`}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.header}>
            <h5 className="fw-6 mb-0">Filter By</h5>
            <div className={style.close} onClick={() => setShowFilter(!showFilter)}>
              <MdClose />
            </div>
          </div>
          <div className={style.searcharea}>
            <p className={style.company}>
              <b>Company</b>
            </p>
            <div className={style.input_box}>
              <input type="text" placeholder="Search Company" />
            </div>
          </div>
          <div>
            {compnay.map((data, index) => (
              <div key={index} className={`form-check ${style.my_check}`}>
                <label className="form-check-label" for={data}>
                  <b>{data}</b>
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={data}
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFilter;
