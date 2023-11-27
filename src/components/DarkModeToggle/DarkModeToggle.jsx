import React from 'react'
import styles from './darkModeToggle.module.css'

const DarkModeToggle = () => {
    const mode = 'dark'
  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball}
            style={mode === 'dark' ? {left: "2px"} : { right: "2px" }}
        />
    </div>
  )
}

export default DarkModeToggle