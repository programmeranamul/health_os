import React from "react";
import { productData } from "./../../data/HomePageData";
import img from "../../image/pump-oil.png";
import style from "../../styles/home/home_page_card.module.css";
import { FaDollarSign } from "react-icons/fa";

function HomePageCards() {
  return (
    <section className={style.section}>
      <div className="container">
        {productData.map((data, index) => (
          <article className={style.card} key={index}>
            <div className={style.wrapper}>
              <div className={style.tab_img}>
                <img src={img} alt="" />
              </div>
              <div className={style.right}>
                <div className={style.header}>
                  <p className={style.companyName_name}>{data.companyName}</p>
                  <p className={style.discount}>{data.discount}%</p>
                </div>
                <h4 className={style.title}>{data.title}</h4>
                <div className={style.footer}>
                  <div className={style.f_left}>
                    <p className={style.discount_price}>
                      <span>
                        <FaDollarSign />
                      </span>
                      <span>{data.mainPrice}</span>
                    </p>
                    <p className={style.main_price}>
                      <span>
                        <FaDollarSign />
                      </span>
                      <span>{data.mainPrice}</span>
                    </p>
                  </div>
                  <div>
                    <button className={style.btn}>Add To Bag</button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomePageCards;
