import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryPanel from "components/SummaryPanel/SummaryPanel";
import css from "../Form/Form.module.css";
function UserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState({
    left: 0,
    consumed: 0,
    dailyRate: 0,
    percentOfNormal: 0,
  });
  const [foodNotRecommended, setFoodNotRecommended] = useState([]);
 
  const [formData, setFormData] = useState({
    height: "",
    currentWeight: "",
    desiredWeight: "",
    age: "",
    bloodType: 1,
    consumed: 0,
    error: null,
  });
  
  const [results, setResults] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData,  [name]: name === "bloodType" ? Number(value) : value, error: null,}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { height, desiredWeight, currentWeight, age } = formData;

    if (!height || !desiredWeight || !currentWeight || !age) {
      setFormData((prevData) => ({
        ...prevData,
        error: "Please fill in all required fields.",
      }));
      setIsLoading(false);
      return;
    }
    if (height <= 0 || age <= 0 || currentWeight <= 0 || desiredWeight <= 0) {
      setFormData((prevData) => ({
        ...prevData,
        error: "Please enter valid positive numbers!",
      }));
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json();
      setSummary({
        left: data.left || 0,
        consumed: data.consumed || 0,
        dailyRate: data.dailyRate || 0,
        percentOfNormal: data.percentOfNormal || 0,
      });
  
      setFoodNotRecommended(data.foodNotRecommended || []);
      setResults(data);
     setIsLoading(false);
     navigate('/diary');
    } catch (error) {
      setIsLoading(false);
      console.error('Error calculating daily calories:', error);
      console.error("Error calculating daily calories:", error);
      setFormData((prevData) => ({
        ...prevData,
        error: "Something went wrong. Please try again.",
      }));
    }
  };


 
  return (
    <div className={css.divForm}>
      <h2>Calculate your daily calorie intake right now</h2>
      {formData.error && <p className={css.error}>{formData.error}</p>}
      {isLoading && <p>Loading...</p>}
    <form className={css.formDates} onSubmit={handleSubmit}>
      
      <input
        type="number"
        name="height"
        placeholder="Height *"
        value={formData.height}
        onChange={handleChange}
        required
        className={css.inputFormDates}
      />
      
      <input
        type="number"
        name="desiredWeight"
        placeholder="Desired weight *"
        value={formData.desiredWeight}
        onChange={handleChange}
        required
        className={css.inputFormDates}
      />
           <input
        type="number"
        name="age"
        placeholder="Age *"
        value={formData.age}
        onChange={handleChange}
        required
        className={css.inputFormDates}
      />
      <input
        type="number"
        name="currentWeight"
        placeholder="Current weight *"
        value={formData.currentWeight}
        onChange={handleChange}
        required
        className={css.inputFormDates}
      />
      <div className={css.bloodType}>
        <p>BloodType *</p>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="1"
            checked={formData.bloodType === 1}
            onChange={handleChange}
            className={css.inputRadio}
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="2"
            checked={formData.bloodType === 2}
            onChange={handleChange}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="3"
            checked={formData.bloodType === 3}
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="bloodType"
            value="4"
            checked={formData.bloodType === 4}
            onChange={handleChange}
          />
          4
        </label>
   
      </div>
      <button type="submit"className = {css.startBtn} disabled={isLoading}> {isLoading ? "Calculating..." : "Start losing weight"}</button>
    </form>
    <SummaryPanel summary={summary} foodNotRecommended={foodNotRecommended} />
  
      </div>
  );
}

export default UserForm;