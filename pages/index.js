import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Carousel from "../components/core/Carousel"
import Button from '../components/Button'
import indexStyles from '../styles/pages/index.module.css'

export default function Home() {
  const activateLasers = (e) => {
    e.preventDefault();
    alert('pew pew pew');
  }
  
  return (
    <>
      <Head>
        <title>SleepyLite</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <div className={indexStyles.content}>

        <section className='getting-started container'>
          <h2>Getting Started</h2>
          <p>02/10/2021 - Roman A. Torres</p>

          <div className='flex'>
            <img src='/images/getting-started.jpg' className='w-56 border'/>
            <p className='ml-5 mt-5'>
              Congratulations on successfully installing SleepyLITE!.
              You can visit the <Link href='/'>documentation page</Link> to
              learn more or hit the ground running by viewing
              the <Link href='/'>getting started</Link> section.
            </p>
          </div>
        </section>

        <section className='sample-modules container'>
          <h2>Sample Modules</h2>
          <p>02/10/2021 - Roman A. Torres</p>

          <div className='flex'>
            <img src='/images/modules.png' className='w-56 border'/>
            <p className='ml-5 mt-5'>
              By default there are 2 sample modules included with the framework. These
              modules demonstrate how to create your own modules, and impliment existing
              functionality. You may safely delete them.
            </p>
          </div>

          <Button className='btn my-10 mx-auto' onClick={activateLasers}>Activate Lasers</Button>
        </section>
      </div>
    </>
  )  
}