import '@/styles/globals.css';
import Navbar from '@/components/Navbar'; // Certifique-se de que o caminho para o seu componente Navbar está correto
import Banner from '@/components/Banner';
import Noticias from './noticias';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> 
      <Banner/>
<Noticias/>
      <Component {...pageProps} />
    </>
  );
}
