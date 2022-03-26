import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm <b>Jordan</b>. I'm a software engineer / game developer. You can contact me at <a href="mailto:jordan@jxrdxn.xyz">jordan@jxrdxn.xyz</a></p>
        <p>
          (This is a sample site made with next.js following{" "}
          <a href="https://nextjs.org/learn">this tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}