import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>chksupply</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">🔐 chksupply</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Your open source platform for software supply chain security.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
          Get Started
        </button>
      </main>
    </>
  );
}
