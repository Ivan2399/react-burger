import { useContext, useMemo, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from "../ingredients-list/ingredients-list";
import style from "../burger-ingredients/burger-ingredients.module.css";
import { BurgerContext } from "../../contexts/burger-context";

const BurgerIngredients = () => {
  const { state } = useContext(BurgerContext);

  const [currentTab, setCurrentTab] = useState("buns");

  const onTabClick = (tab) => {
    setCurrentTab(tab);
    const elem = document.getElementById(currentTab);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const buns = useMemo(
    () => state.ingredients.filter((el) => el.type === "bun"),
    [state.ingredients]
  );
  const sauces = useMemo(
    () => state.ingredients.filter((el) => el.type === "sauce"),
    [state.ingredients]
  );
  const main = useMemo(
    () => state.ingredients.filter((el) => el.type === "main"),
    [state.ingredients]
  );

  return (
    <section className="mr-10">
      <ul className={style.tabs}>
        <Tab value="buns" active={currentTab === "buns"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={onTabClick}
        >
          Соусы
        </Tab>
        <Tab value="main" active={currentTab === "main"} onClick={onTabClick}>
          Начинка
        </Tab>
      </ul>
      <ul className={style.ingredients}>
        <IngredientCategory title="Булки" id="buns" categoryData={buns} />
        <IngredientCategory title="Соусы" id="sauces" categoryData={sauces} />
        <IngredientCategory title="Начинка" id="main" categoryData={main} />
      </ul>
    </section>
  );
};

export default BurgerIngredients;
