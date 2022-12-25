import Head from 'next/head';

const HOME_TITLE = 'API time checker';

export default function Home() {
  return (
    <>
      <Head>
        <title>{HOME_TITLE}</title>
      </Head>

      <main>
        <h1>{HOME_TITLE}</h1>
      </main>
    </>
  );
}
