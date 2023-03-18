import '@/styles/main.css';
import '@/styles/base.css';
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-play',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable}  ${space.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
