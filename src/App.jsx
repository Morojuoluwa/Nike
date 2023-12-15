import { Hero,Popular,SuperQuality, Services,
        SpecialOffer, CustomerReviews, Subscribe, Footer } from './sections'
import Navbar from './Components/Navbar'



const App = () => {
  return (
    <>
      <main className='relative w-screen  h-full'>
        <Navbar/>
        <section className=' xl:padding-l wide:padding-r padding-b'>
        <Hero/>
        </section>
        <section className='padding'>
          <Popular/>
        </section>
        <section className='padding'>
          <SuperQuality/>
        </section>
        <section className=' padding-x py-10'>
          <Services/>
        </section>
        <section className=' padding-x py-10'>
          <SpecialOffer/>
        </section>
        <section className=' padding-x py-10 bg-pale-blue'>
          <CustomerReviews/>
        </section>
        <section className=' padding-x py-16 sm:py-32 w-full'>
          <Subscribe/>
        </section>
        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer/>
        </section>
      </main>
   
    </>
  )
}

export default App