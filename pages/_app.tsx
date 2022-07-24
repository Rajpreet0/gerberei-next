import '../styles/globals.css'
import '../components/footer/Footer.css';
import '../components/error/Error.css';
import '../components/home/hero/HeroSection.css';
import '../components/home/multiplebox/MultipleBox.css';
import '../components/home/informationCards/InformationCards.css';
import '../components/home/three_d_btn/Three_D_Btn.css';
import '../components/history/timeline/Timeline.css';
import '../components/history/historyCards/HistoryCards.css';
import '../components/eventComponent/Event.css';
import '../components/contact/Contact.css';
import '../components/productCards/ProductCards.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
