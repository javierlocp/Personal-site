import { BlogPreview } from '../components/index';

const Home = () => {
  return (
    <>
      <div className="intro mb-22 flex flex-col gap-4">
        <h1 className="text-pretty">Multidisciplinary product designer with 14+ years of experience designing human-centered digital products.</h1>
        <p>In the past, I led high-impact design teams and initiatives across startups and large organizations like Haven1, Agoda, Brankas, Yield App, and Says.com.</p>
      </div>

      <BlogPreview />
    </>
  );
};

export default Home;
