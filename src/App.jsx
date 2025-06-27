import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home"
import Blog from "./pages/Blog/Blog"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={ <Blog /> }></Route>
      </Routes>
    </MainLayout>
  )
}

export default App