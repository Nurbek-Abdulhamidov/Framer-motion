import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

const SwitchComp = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    // console.log(isOn, "Hello");
    setIsOn(!isOn);
  };
  return (
    <div>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 20,
};

export default SwitchComp;
