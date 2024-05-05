import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children} 
        {/* This has all the children, for exapmle, the page.tsx   */}
        <footer className='py-10 flex justify-center items-center'>
          Made with love from vercel!
        </footer>
      </body>
    </html>
  );
}
