import React from "react";

const SummaryPanel = ({ summary, foodNotRecommended }) => {
  return (
    <div className="summary-panel">
      <h3>Summary for {new Date().toLocaleDateString()}</h3>
      <p>Left: {summary.left || "000"} kcal</p>
      <p>Consumed: {summary.consumed || "000"} kcal</p>
      <p>Daily rate: {summary.dailyRate || "000"} kcal</p>
      <p>n% of normal: {summary.percentOfNormal || "000"} kcal</p>
      
      <h4>Food not recommended</h4>
      <ul>
        {foodNotRecommended?.length > 0 ? (
          foodNotRecommended.map((food, index) => <li key={index}>{food}</li>)
        ) : (
          <li>Your diet will be displayed here</li>
        )}
      </ul>
    </div>
  );
};

export default SummaryPanel;