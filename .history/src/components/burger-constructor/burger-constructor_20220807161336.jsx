import React, { useState } from "react";
import PropTypes from "prop-types";
import { ingredientsPropsType } from "../../utils/prop-type";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import style from "../burger-constructor/burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = ({ ingredientsInBurger }) => {
  const [order, setOrder] = useState(null);
  const closeOrderModar = () => setOrder(null);
  const img = ingredientsInBurger[0].image_mobile;
  return (
    <section className={style.constructor}>
      <ul className={style.constructor_list}>
        <div className={style.buns}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div className={`pr-1 ${style.in_burger}`}>
          {ingredientsInBurger
            .filter((el) => el.type === "main")
            .map((el) => {
              return (
                <div className={style.in_burger_elem} key={el._id}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image_mobile}
                  />
                </div>
              );
            })}
        </div>
        <div className={style.buns}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
      </ul>
      <div className={`mt-10 ${style.ready}`}>
        <div className={`mr-10 ${style.total_price}`}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={setOrder}>Оформите заказ</Button>
      </div>
      {order && (
        <Modal closeModal={closeOrderModar}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredientsInBurger: PropTypes.arrayOf(ingredientsPropsType.isRequired)
    .isRequired,
};

export default React.memo(BurgerConstructor);
