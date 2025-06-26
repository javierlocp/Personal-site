import ExternalLink from "./ExternalLink";
// Footer Component
// This is written in arrow function
const Footer = () => {
  return (
    <footer className="my-10">
      <div className="my-8">
        <h2 className="mb-3.5 text-gray-50 text-2xl font-bold">Colophon</h2>
        <p className="text-sm text-neutral-400">Design and code by Javier Lo. <br></br> Source Code on <ExternalLink href="https://github.com/javierlocp/j6o-site">Github</ExternalLink></p>
      </div>
      <p className="text-neutral-400 text-sm">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer