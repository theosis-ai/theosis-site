import Heading from './components/heading'
import Body from './components/body'
import Footer from './components/footer'

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        <Heading></Heading>
        <br></br>
        <Body></Body>
        <br></br>
        <br></br>
        <Footer></Footer>
      </main>
    </div>
  )
}
