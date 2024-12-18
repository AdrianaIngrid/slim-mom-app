import React from "react";
import css from "./ModalDailyCalories.module.css";
const ModalDailyCalories = ({ isOpen, onClose, onNavigate, results }) => {
  if (!isOpen) return null; 

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <button onClick={onClose}>x</button>
        <p>Your reccomended daily calorie intake is: {results.data.dailyCalories} kcal</p>
        <p>Foods you should not eat</p>
        <ol>
          {[...new Set(results.data.notRecommended.map((item) => item.categories))].map(
            (category, index) => (
              <li key={index}>{category}</li>
            )
          )}
        </ol>
       
        <button onClick={onNavigate}>Start Losing Weight</button>
      </div>
    </div>
  );
};

export default ModalDailyCalories;