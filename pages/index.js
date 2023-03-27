import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        a{text-decoration: none; color: rgba(249,160,27,1); font-weight: 500;
          }
     
        li{list-style: none; margin: 0 15px; display: inline-block;position: relative;}
        ul{display: flex; padding: 0; width: 100%; justify-content: space-evenly}
      `}</style>
    </div>
  )
}
