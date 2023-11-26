import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src='' alt='' className={styles.img} />
        </div>
        <div className={styles.textContainer}></div>
    </div>
  )
}

export default page