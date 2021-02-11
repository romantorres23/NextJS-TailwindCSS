import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SleepyLite</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <div class="getting-started container">
        <h2>Getting Started</h2>
        <p>02/10/2021 - Roman A. Torres</p>

        <div class="flex">
          <img src="/images/getting-started.jpg" class="w-400 border"/>
          <p class="ml-5 mt-5">
            Congratulations on successfully installing SleepyLITE!.
            You can visit the <Link href='/'>documentation page</Link> to
            learn more or hit the ground running by viewing the 
            <Link href='/'>getting started</Link> section.
          </p>
        </div>
      </div>
    </>
  )  
}
