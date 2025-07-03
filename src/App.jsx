import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog/BlogPost';
import { inject } from '@vercel/analytics';

inject();

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
