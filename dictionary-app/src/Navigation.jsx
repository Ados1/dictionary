import React, { useState } from "react";
import Switch from "./Switch";
import Moon from "./assets/icon-moon.svg";
import logo from "./assets/logo.svg";

import Select from "./Select";

const Navigation = () => {
  const [selected, setSelected] = useState("Mono");
  return (
    <div className="my-2 h-14 flex flex-row items-center justify-between">
      <img src={logo} alt="logo" />
      <div className="my-2 h-14 flex flex-row items-center">
        <Select selected={selected} setSelected={setSelected} />

        <Switch />
        <img src={Moon} alt="darkmode" />
      </div>
    </div>
  );
};

export default Navigation;
