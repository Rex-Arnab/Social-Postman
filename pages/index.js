import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
      </Head>
    <div className="hero is-full-screen">
        <div className="logo is-center is-vertical-align">
          <Image src="/logo.png" alt="logo" width={1200} height={200} />
            <h3>A Social Media Scheduler.</h3>
          <Link href="/login">
            <a className="button dark">Get Started</a>
          </Link>
        </div>
        <nav className="tabs is-center">
            <a href="#features">features</a>
            <a href="#start">start</a>
        </nav>
    </div>

    <section id="features">
        <h2>Features</h2>
        <ul>
            <li>📣 This Tool is can do automatic social media management for you</li>
            <li>🕐 It saves your percious time, by scheduling all the post in advance</li>
            <li>🪜 Plan your day ahread and maximize your potential reach to people</li>
        </ul>
    </section>

    <section id="start">
        <h2>Start</h2>
        <ul>
            <li>📣 Step 1: Create an Account</li>
            <li>🕐 Step 2: Connect Your Social Media Account</li>
            <li>🪜 Step 3: Schedule Your Post</li>
        </ul>
    </section>
    </div>
  )
}
