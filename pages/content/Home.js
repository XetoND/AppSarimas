import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import peta from '../../public/PetaSarimas.png'


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://66.42.54.84/api/menus')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

const Home = ( {posts} )  => {
 console.log(posts)
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
          <area shape="poly" coords="917,104,932,92,948,107,941,120,919,120" alt="posSatpam1" href="#" />
          <area shape="poly" coords="927,224,945,205,962,218,951,234" alt="warungNindi" href="#" />
          <area shape="poly" coords="918,257,905,239,917,230,928,239" alt="Jne" href="#" />
          <area shape="poly" coords="592,246,620,247,619,284,593,283" alt="bankSampah" href="#" />
          <area shape="poly" coords="615,426,649,437,613,449,596,434" alt="kerambaIkan" href="#" />
          <area shape="poly" coords="666,455,682,469,696,468,697,443,679,442" alt="posKerambaIkan" href="#" />
          <area shape="poly" coords="547,489,530,503,531,522,560,523,562,503" alt="posSatpam2" href="#" />
          <area shape="poly" coords="655,540,655,559,710,559,710,540,655,539" alt="Masjid" href="http://localhost:3000/content/Masjid" />
          <area shape="poly" coords="594,626,595,658,644,659,644,626,594,625" alt="kebunTani" href="#" />
          <area shape="poly" coords="602,771,603,795,633,796,633,770,616,759" alt="Gazebo" href="#" />
          <area shape="poly" coords="507,935,512,970,547,968,549,934" alt="Posyandu" href="#" />
          <area shape="poly" coords="182,871,186,904,212,907,216,872" alt="warungNajwa" href="#" />
          <area shape="poly" coords="85,923,87,945,119,946,118,924,103,906" alt="pakRW" href="#" />
        </map>

        <div className={styles.grid}>
        <div>
            {posts.map(post =>(
              <div key={post.id}>
                <a href="#" className={styles.card}>
                  <h2>{post.judul}</h2>
                </a>
              </div>
            ))}
        </div>
          <a href="#" className={styles.card}>
            <h2>Posyandu Manggis</h2>
            <p>Pos Pelayanan Terpadu adalah layanan untuk Ibu dan Balita yang sudah berjalan selama beberapa waktu.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Kelompok Tani</h2>
            <p>Kami mengembangkan konsep ketahanan pangan lingkungan dengan membuat kelompok budidaya ikan dan kebun TOGA.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Bank Sampah</h2>
            <p>
              Bank sampah merupakan fasilitas untuk para warga supaya sampah atau limbah rumah dapat diolah menjadi sesuatu yang dapat bermanfaat
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
export default Home ;
