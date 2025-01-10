import Heading from './components/heading'
import Body from './components/body'
import Footer from './components/footer'

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        <Heading></Heading>
        <br></br>
        <Body></Body>
        <br></br>
        <Footer></Footer>
      </main>
    </div>
  )
}
