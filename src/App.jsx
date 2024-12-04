import Nav from "./Components/Nav"
import ImgProfile from "../public/ImgProfile.jpg"

function App() {
  return (
    <>
      <Nav />
      <main
        className="flex-grow mt-20
      "
      >
        <div className="container px-4 py-8 mx-auto max-w-6xl">
          <section className="mb-48">
            <div className=" relative w-40 h-40 mx-auto mb-12">
              <img
                src={ImgProfile}
                alt=""
                className="rounded-full shadow-lg border-4 border-primary-dark"
              />
              <div className="flex justify-center items-center">
                <h1 className="font-bold font-sans text-4xl text-primary-dark mt-6 whitespace-nowrap">
                  Luis Rodriguez
                </h1>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
