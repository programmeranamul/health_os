import {
  FaSearch,
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaBriefcaseMedical,
} from "react-icons/fa";
import style from "../../styles/home/home_page_header.module.css"

function HomePageHeader({showFilter, setShowFilter}) {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.section_wrapper}>
          <div className="logo">Logo</div>
          <div className={style.right}>
            <div>
              <FaSearch />
            </div>
            <div>
              <FaSortAlphaDown />
            </div>
            <div>
              <FaBriefcaseMedical onClick={() =>setShowFilter(!showFilter) }/>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomePageHeader;
