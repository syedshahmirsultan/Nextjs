'use client';
import './globals.css'
import Front from './Front/page'
import Footer from './Footer/page';
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
      <body><Front/>{children}<Footer/></body>
    </html>
  )
}
