import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Roshan's Blog</h1>
      <ul>
        <li><Link href="/post/hello-world">Hello World</Link></li>
        <li><Link href="/post/harrys-tailor">My Second Post</Link></li> {/* new */}
      </ul>
    </main>
  );
}