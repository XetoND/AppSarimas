import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export async function getServerSideProps(context){
  const id = (parseInt(context.query.id) || 1).toString();
  console.log("Running Server Side",id);
  const res = await fetch('http://66.42.54.84/api/menus/'+id+"/?populate=*")
  const posts = await res.json()
  console.log("posts detail",posts)
    return {
      props: {
        posts: posts
      }
    }
}

export default function Masjid(posts) {
  console.log("post 2 ",posts.posts.data.attributes.detil_menu_list_acaras)
  return (
    <div className={styles.container}>
      <Head>
        <title>Masjid-Al Muhajirin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
      {posts.posts.data.attributes.judul}
      </h1>
      <p className={styles.description}>
      {posts.posts.data.attributes.deskripsi}
      </p>
      <h1 className={styles.judul}>
        Jadwal Acara
        
      </h1>

      {posts && posts.posts.data.attributes.detil_menu_list_acaras.data.map(acara =>(
        <div className={styles.grids}>
          <div className={styles.cards}>
            <h2>{acara.attributes.judul}</h2>
            <p><br></br>Senin : <br></br><br></br>
            {acara.attributes.waktu_acara}<br></br><br></br>
            {acara.attributes.DeskripsiAcara}<br></br><br></br><br></br>
            </p>
          </div>
        </div>
      ))}
      

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
