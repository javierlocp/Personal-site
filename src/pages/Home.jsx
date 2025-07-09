import { BlogPreview, ExternalLink, ProjectPreview } from '../components/index';
const Home = () => {
  return (
    <>
      <div className="intro mb-22 flex flex-col gap-4">
        <h1 className="text-pretty">I'm a multidisciplinary product designer with a strong focus on designing thoughtful, human-centered digital products.</h1>
        <p className="text-pretty">
          I'm currently leading product design at <ExternalLink href="https://haven1.org/">Haven1</ExternalLink>, a permissioned EVM Layer 1 blockchain. Previously, I led high-impact design
          initiatives and helped build design teams and processes across both startups and large organizations — including <ExternalLink href="https://agoda.comg/">Agoda</ExternalLink>,{' '}
          <ExternalLink href="https://brankas.com/">Brankas</ExternalLink>, Yield App & <ExternalLink href="https://says.com/">Says.com</ExternalLink>.
        </p>
      </div>

      <ProjectPreview />
      <BlogPreview />
    </>
  );
};

export default Home;
