import '#/styles/globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <section>{children}</section>
        <section>      
        <Link className='p-3' href="/">home</Link>
        <Link href="blog">blog</Link>
        </section>
      </body>
    </html>
  )
}
