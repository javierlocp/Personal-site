import { BlogPreview, ExternalLink } from '../components/index';

const Home = () => {
  return (
    <>
      <div className="intro mb-22 flex flex-col gap-4">
        <h1 className="text-pretty">Multidisciplinary product designer with 14+ years of experience designing human-centered digital products.</h1>
        <p>
          In the past, I led high-impact design teams and initiatives across startups and large organizations like <ExternalLink href="https://agoda.com/">Haven1</ExternalLink>,{' '}
          <ExternalLink href="https://haven1.org/">Agoda</ExternalLink>, <ExternalLink href="https://brankas.com/">Brankas</ExternalLink>, Yield App, and{' '}
          <ExternalLink href="https://says.com/">Says.com</ExternalLink>.
        </p>
      </div>

      <BlogPreview />
    </>
  );
};

export default Home;
