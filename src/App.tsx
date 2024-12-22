import './style/App.scss'

import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { InfoText } from './components/InfoText/InfoText'
import { Offers } from './components/Offers/Offers'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Offers />
        <InfoText />
      </main>
      <Footer />
    </>
  )
}

export default App
