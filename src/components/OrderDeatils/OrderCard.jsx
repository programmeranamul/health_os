import React from "react";
import { orderData } from "./../../data/OrderPageData";
import img from "../../image/pump-oil.png";
import style from "../../styles/orderdetails/OrderDetailsCard.module.css";

function OrderCard() {
  return (
    <section className={style.section}>
      <div className="container">
        {orderData.products.map((data, index) => (
          <article className={style.wrapper} key={index}>
            <div className={style.left}>
              <img src={img} alt="" />
            </div>
            <div className={style.middle}>
              <h5 className={style.title}>{data.title}</h5>
              <div className={style.m_r}>
                <p className={style.quate}>
                  {data.quantity} x {data.mainPrice}
                </p>
                <p className={style.discount}>{data.discount}%</p>
              </div>
            </div>
            <div className={style.right}>
              <p className={style.main_price}>
                $ {data.quantity * data.mainPrice}
              </p>
              <p className={style.discount_ammount}>
                $ -{(data.quantity * data.mainPrice * data.discount) / 100}
              </p>
              <p className={style.fainal_price}>
                $
                {data.quantity * data.mainPrice -
                  (data.quantity * data.mainPrice * data.discount) / 100}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OrderCard;
