import ExternalLink from "./ExternalLink";
// Footer Component
// This is written in arrow function
const Footer = () => {
  return (
    <footer className="my-10">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-gray-50 text-xl font-bold">Colophon</h2>
        <p className="text-sm text-neutral-400">Design and code by Javier Lo. <br></br> 
        View source code on <ExternalLink href="https://github.com/javierlocp/j6o-site" className="underline decoration-wavy decoration-0 underline-offset-2 hover:text-neutral-50">Github</ExternalLink></p>
      </div>
      <p className="text-sm">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer