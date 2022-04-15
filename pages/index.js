import Head from 'next/head'
import Image from 'next/image'
import Home from './content/Home'
import Axios from "axios";
import Link from "next/link";

export async function getServerSideProps(){
  console.log("Running Server Side");
  const res = await fetch('http://66.42.54.84/api/menus')
  const posts = await res.json()
  console.log("posts",posts)
    return {
      props: {
        posts: posts
      }
    }
}

function Main({posts}) {
  console.log("main2",posts)
  return (
    <div className="App">
      <Home posts={posts}/>
    </div>
  );
};
export default Main;
