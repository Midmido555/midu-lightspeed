import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Midu Lightspeed</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold mb-4">⚡ Midu Lightspeed</h1>
        <p className="text-xl text-center max-w-2xl">
          The fastest way to create cinematic scripts, voices, videos, and PDFs — powered by AI.
        </p>
      </main>
    </>
  );
}