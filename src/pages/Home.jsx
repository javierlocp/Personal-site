import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <>
      <div className="intro mb-21 flex flex-col gap-6">
        {/* <h1>Multidisciplinary product designer with 14+ years of experience bridging strategy,
          UX, and visual design to craft user-first digital products.</h1> */}
        <h1 className="text-pretty">Multidisciplinary product designer with 14+ years of experience designing human-centered digital products.</h1>
        <p>In the past, I led high-impact design teams and initiatives across startups and large organizations like Haven1, Agoda, Brankas, Yield App, and Says.com.</p>
      </div>

      <BlogPreview />
    </>
  );
};

export default Home;
