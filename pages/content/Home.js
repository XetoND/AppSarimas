import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import peta from '../../public/PetaSarimas.png'
import Link from 'next/link'
import Button from '@mui/material/Button'


export function Home({ posts }) {

    function hello() {
      console.log("hello")
    }
    console.log("Main",posts)
    return (
      <div className={styles.container}>
      <Head>
        <title>Perumahan Sarimas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Perumahan Sarimas
        </h1>

        <p className={styles.description}>
          Lihat beberapa fasilitas yang ada di Perumahan Sarimas
        </p>

        <Image src={peta} alt="" useMap="#sarimasmap" />
        <map name="sarimasmap">
          <Link href={{ pathname: '/content/Detail', query: { id: 1} }}>
            <area shape="poly" coords="917,104,932,92,948,107,941,120,919,120" alt="posSatpam1" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 2} }}>
            <area shape="poly" coords="927,224,945,205,962,218,951,234" alt="warungNindi" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 3} }}>
            <area shape="poly" coords="918,257,905,239,917,230,928,239" alt="Jne" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 4} }}>
            <area shape="poly" coords="592,246,620,247,619,284,593,283" alt="bankSampah" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 5} }}>
            <area shape="poly" coords="615,426,649,437,613,449,596,434" alt="kerambaIkan" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 6} }}>
            <area shape="poly" coords="666,455,682,469,696,468,697,443,679,442" alt="posKerambaIkan" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 7} }}>
            <area shape="poly" coords="547,489,530,503,531,522,560,523,562,503" alt="posSatpam2" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 1} }}>
            <area shape="poly" coords="655,540,655,559,710,559,710,540,655,539" alt="Masjid" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 9} }}>
            <area shape="poly" coords="594,626,595,658,644,659,644,626,594,625" alt="kebunTani" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 10} }}>
            <area shape="poly" coords="602,771,603,795,633,796,633,770,616,759" alt="Gazebo" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 2} }}>
            <area shape="poly" coords="507,935,512,970,547,968,549,934" alt="Posyandu" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 12} }}>
            <area shape="poly" coords="182,871,186,904,212,907,216,872" alt="warungNajwa" />
          </Link>
          <Link href={{ pathname: '/content/Detail', query: { id: 13} }}>
            <area shape="poly" coords="85,923,87,945,119,946,118,924,103,906" alt="pakRW" />
          </Link>
        </map>

        <div className={styles.grid}>
          {posts && posts.data.map(post =>(
            <Link key={post.id} href={{ pathname: '/content/Detail', query: { id: post.id } }}>
            <a data-key={post.id} className={styles.card}>
              {post.id}
              <h2>{post.attributes.judul}</h2>
              <p>{post.attributes.deskripsi}</p>
            </a>
            </Link>
          ))}
        </div>
        <div className={styles.grid}>
          <a className={styles.card} href="http://localhost:3000/simple-pie.html">
          <h2>Data Umur Warga</h2>
          </a>
        </div>
      </main>
    </div>
    )
}
export default Home ;
