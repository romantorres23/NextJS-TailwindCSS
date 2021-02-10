import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SleepyLite</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <h1>Welcome to SleepyMustache</h1>
    </div>
  )  
}
