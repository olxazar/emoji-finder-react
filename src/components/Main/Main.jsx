import "./Main.css";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";

import React from "react";
import { GridSection } from "../../layout/GridSection/GridSection";

export const Main = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // запрос

  useEffect(() => {
    fetch("http://api.codeoverdose.space/api/emoji/v1")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  // удаление повторяющихся элементов в объекте

  const deleteRepeats = (arr) => {
    let clearedData = arr.map((card) => {
      return {
        ...card,
        keywords: [...new Set(card.keywords.split(" "))].join(" "),
      };
    });
    return clearedData;
  };

  const handlerInput = (evt) => {
    const inputValue = evt.target.value.toLowerCase();
    setValue(inputValue);

    // фильтруем данные на основе полученного значения из инпута

    const filteredArr = clearedArr.filter(
      (elem) =>
        elem.keywords.toLowerCase().includes(inputValue) ||
        elem.title.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredArr);
  };

  // Отрисовываем карточки
  const clearedArr = deleteRepeats(data);
  const emoji = filteredData.map((elem, id) => (
    <Card
      key={id}
      symbol={elem.symbol}
      title={elem.title}
      keywords={elem.keywords}
    />
  ));

  return (
    <>
      <input
        value={value}
        onChange={handlerInput}
        className="input"
        type="text" 
        placeholder="Enter emoji"
      />
      <GridSection>{emoji}</GridSection>
    </>
  );
};
