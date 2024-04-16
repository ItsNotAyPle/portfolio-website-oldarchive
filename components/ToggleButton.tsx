import React, { useState, useEffect } from "react";
import styles from "../styles/components/ToggleButton.module.css";


const ToggleButton = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    alert("state: " + state)
  });

  const onclick = function () {
    if (state) return setState(false);
    setState(true);
  }

  return (
    <button className={styles.button} onClick={() => onclick()}>
      <div className={styles.foo} style= {state ?
        {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      </div>
    </button>
  );
}

export default ToggleButton;
