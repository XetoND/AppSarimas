import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import peta from '../../public/PetaSarimas.png'

function Home() {
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

        <img src={peta} alt="" />

        <div className={styles.grid}>
          <a href="http://localhost:3000/content/Masjid" className={styles.card}>
            <h2>Masjid Al-Muhajirin</h2>
            <p>Masjid menjadi salah satu pusat kegiatan warga yang terus kami kembangkan untuk kebutuhan ibadah umat Islam ataupun untuk kegiatan warga lainnya.</p>
          </a>

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
