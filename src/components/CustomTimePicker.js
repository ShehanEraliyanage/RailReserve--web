import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const CustomTimePicker = ({ value, onChange }) => {
  const [time, setTime] = useState(value);

  const handleTimeChange = (e) => {
    const newValue = e.target.value;
    setTime(newValue);
    onChange(newValue);
  };

  return <Form.Control type="time" value={time} onChange={handleTimeChange} />;
};

export default CustomTimePicker;
