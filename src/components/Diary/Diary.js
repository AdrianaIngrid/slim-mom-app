import React  from "react";
import SummaryPanel from "../SummaryPanel/SummaryPanel";
import PropTypes from "prop-types";
function Diary ({summary, foodNotRecommended}) {
      return (
        <div><p> Diary</p>
        <SummaryPanel summary={summary} foodNotRecommended={foodNotRecommended} />

        </div>
    );
    
}
Diary.defaultProps = {
    summary: {
      left: 0,
      consumed: 0,
      dailyRate: 0,
      percentOfNormal: 0,
    },
    foodNotRecommended: [],
  };
  
  // PropTypes pentru validarea props
  Diary.propTypes = {
    summary: PropTypes.shape({
      left: PropTypes.number.isRequired,
      consumed: PropTypes.number.isRequired,
      dailyRate: PropTypes.number.isRequired,
      percentOfNormal: PropTypes.number.isRequired,
    }),
    foodNotRecommended: PropTypes.arrayOf(PropTypes.string),
  };
export default Diary;