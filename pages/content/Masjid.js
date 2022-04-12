import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Masjid() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Masjid-Al Muhajirin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
      Masjid Al-Muhajirin
      </h1>
      <p className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h1 className={styles.judul}>
        Jadwal Ta'lim Rutin
      </h1>
      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>Tahsin Ibu-Ibu</h2>
          <p><br></br>Senin : <br></br><br></br>
          09:00 - 11:30<br></br><br></br>
          Ust. H. Syarifudin. SAg<br></br><br></br><br></br>
          </p>
        </div>
      </div>

      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>Tahsin Ibu-Ibu Privat</h2>
          <p>Selasa & Rabu : <br></br><br></br>
          13:00-14:00<br></br><br></br>
          Ust Endang Saefurohman<br></br><br></br><br></br>
          </p>
        </div>
      </div>

      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>TPQ TK & SD</h2>
          <p><br></br>Senin - Kamis : <br></br><br></br>
          15:30-17:00<br></br><br></br>
          Ustadzah Intan,<br></br>
          Ustadzah Ade,dan<br></br>
          Ust Endang Saefurohman
          </p>
        </div>
      </div>

      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>Ta'lim Umahat Al-Muhajirin</h2>
          <p>Rabu : <br></br><br></br>
          10:00-11:30<br></br><br></br>
          Ust Mashuri Afandi,SAg<br></br><br></br><br></br>
          </p>
        </div>
      </div>

      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>Kitab Bulughul Maram</h2>
          <p>Rabu : <br></br><br></br>
          Ba'da Maghrib<br></br><br></br>
          Ust Mashuri Afandi,SAg<br></br><br></br><br></br>
          </p>
        </div>
      </div>

      <div className={styles.grids}>
        <div className={styles.cards}>
          <h2>Tafsir Tematik</h2>
          <p><br></br>Sabtu : <br></br><br></br>
          Ba'da Subuh<br></br><br></br>
          Ust Deni Albar,Lc<br></br><br></br><br></br><br></br>
          </p>
        </div>
      </div>


    </div>
  )
}
