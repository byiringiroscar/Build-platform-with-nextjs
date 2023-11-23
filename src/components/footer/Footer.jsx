import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div>
          <Image src="/1.png" alt="Instagram" width={15} height={15} />
          <Image src="/2.png" alt="Facebook" width={15} height={15} />
          <Image src="/3.png" alt="Twitter" width={15} height={15} />
          <Image src="/4.png" alt="YouTube" width={15} height={15} />
        </div>
    </div>
  )
}

export default Footer