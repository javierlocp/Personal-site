import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/blog/BlogPost';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} className=""></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:slug" element={<BlogPost />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
