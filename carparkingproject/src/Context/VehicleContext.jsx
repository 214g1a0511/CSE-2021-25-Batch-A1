import React, { useState } from "react";
import { createContext } from "react";
export const slotContext = createContext();

const VehicleContext = ({ children }) => {
  const [vehicleDetails, setVehicleDetails] = useState({
    email: "",
    mobile: "",
    parking_slot: "",
    vehicle_number: "",
    vehicle_type: "",
    days_of_parking: "",
    vehicle_name: "",
  });
  const [paymentID, setPaymentID] = useState("");

  return (
    <slotContext.Provider
      value={{ setVehicleDetails, vehicleDetails, setPaymentID, paymentID }}
    >
      {children}
    </slotContext.Provider>
  );
};

export default VehicleContext;
