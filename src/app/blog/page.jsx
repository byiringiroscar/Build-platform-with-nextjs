import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
        <Link href='' className={styles}>
            <div className={styles.imageContainer}>
                <Image
                 src=''
                 alt=''
                 width={400}
                 height={250}
                 className={styles.image}
                 />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}></h1>
                <p className={styles.desc}></p>
            </div>
        </Link>
    </div>
  )
}

export default page