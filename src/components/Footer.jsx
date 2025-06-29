import ExternalLink from './ExternalLink';
// Footer Component
// This is written in arrow function
const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-base text-gray-50">Colophon</h2>
        <p className="text-sm text-neutral-400">
          Design and code by Javier Lo. <br></br>
          Check it out on{' '}
          <ExternalLink href="https://github.com/javierlocp/j6o-site" className="underline decoration-wavy decoration-0 underline-offset-2 hover:text-neutral-50">
            Github
          </ExternalLink>
        </p>
      </div>
      <p className="text-sm">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
