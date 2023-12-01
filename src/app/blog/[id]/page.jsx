import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
  { cache: 'no-store' }
  );
 
  if (!res.ok) {
    console.log('not fpund')
    return notFound()
  }
  return res.json()
}

const BlogPost = async ({ params }) => {
  const data =  await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Oscar ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia delectus quibusdam blanditiis voluptatibus sit nulla! Placeat culpa qui distinctio.
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/4231767/pexels-photo-4231767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Oscar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/12982035/pexels-photo-12982035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam obcaecati asperiores impedit beatae recusandae? Aut sapiente inventore quod amet at!
        </p>
      </div>
    </div>
  )
}

export default BlogPost