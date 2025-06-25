import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <h1>You can replace the content inside {"<MainLayout>...</MainLayout>"} later with {"<Home />"}, {"<About />"}, etc.</h1>        
      <p className="text-neutral-500">This is a text</p>
    </MainLayout>
  )
}

export default App