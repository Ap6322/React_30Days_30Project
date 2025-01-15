import React from 'react'
import styles from "./Display.module.css"

const Display = ({displayValue}) => {
  return (
    <div>
      <input type="text" name="" className={styles.display} value ={displayValue} readOnly/>
    </div>
  )
}

export default Display
