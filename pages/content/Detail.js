import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'
import Link from 'next/link'

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
    <div>
      <Head>
        <title>{posts.posts.data.attributes.judul}</title>
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

      <div className={styles.button}>
      <Link href="http://localhost:3000/" passHref>
        <Button variant="contained" color="secondary">Kembali</Button>
      </Link>
      </div>
    </div>
  )
}
