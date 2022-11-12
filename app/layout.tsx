import '#/styles/globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        
        <section>
        <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/50">
              <div className="rounded-lg bg-black p-4 lg:p-6">{children}</div>
            </div>
            </section>
        
        <section>
          <div className='flex space-x-4 p-3'>
          <Link href="/">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="/styling">styling</Link>
        </div>      
        
        </section>
        
      </body>
    </html>
  )
}
