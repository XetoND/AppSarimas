import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from 'next/link'
import React, { useState } from 'react'

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
    const [isReadMoreShown, setReadMoreShown] =
    useState(true)

    const toggleBtn = () =>{
      setReadMoreShown(prevState => !prevState)
    }
  return (
  <div className={styles.container}>
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
            <p>
            Senin :<br></br><br></br>
            {acara.attributes.waktu_acara}<br></br><br></br>
            {acara.attributes.DeskripsiAcara}
            </p>
            <div className="read-more-less">
              {isReadMoreShown ? posts.map : acara.attributes.DeskripsiAcara.slice(0,1000)}
              <button className={styles.btn} onClick={toggleBtn}>{isReadMoreShown ?'...Read More' : 'Read Less'}</button>
            </div>
          </div>
        </div>

      ))}
    <center>
      <div className={styles.button}>
      <Link href="https://info.sarimas.org/" passHref>
        <Button variant="contained" color="info">Kembali</Button>
      </Link>
      </div>
    </center>
  </div>
  )
}
