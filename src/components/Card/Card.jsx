import React from "react"; 
import './Card.css'

export const Card = ({ symbol, title, keywords,  }) => {
  return (
    <div className="Card">
      <p className="card-symbol">{symbol}</p>
      <h1 className="card-title">{title}</h1>
      <p className="card-keywords">{keywords}</p>
    </div>
  );
};
