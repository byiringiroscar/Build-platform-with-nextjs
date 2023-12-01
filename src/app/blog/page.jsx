import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const page = async () => {

    const data = await getData();

  return (
    <div className={styles.mainContainer}>
        {data.map(item => (
        <Link key={item.id} href='/blog/testId' className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                 src='https://images.pexels.com/photos/4533596/pexels-photo-4533596.jpeg'
                 alt=''
                 width={400}
                 height={250}
                 className={styles.image}
                 />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
            </div>
        </Link>
        ))}
    </div>
  )
}

export default page