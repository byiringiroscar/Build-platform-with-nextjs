import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products. </h1>
        <p className={styles.desc}>Turning your Idea into reality. we bring together the teams from the global tech industry</p>
        <Button text='See our works' url='/' />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='hero' className={styles.img} />  
      </div>
    </div>
  )
}
