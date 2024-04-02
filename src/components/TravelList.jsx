import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getCostLabel = (cost) => {
    if (cost <= 350) {
      return "Great Deal";
    } else if (cost >= 1500) {
      return "Premium";
    } else {
      return ""; // No label for mid-range costs
    }
  };

  const handleRemovePlan = (id) => {
    setTravelPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((item) => (
          <li key={item.id}>
            {item.name} - {item.details}
            <br />
            {getCostLabel(item.totalCost)}
            {item.allInclusive && " - All Inclusive"}
            <button onClick={() => handleRemovePlan(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
