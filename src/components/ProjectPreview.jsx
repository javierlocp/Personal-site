import { Link } from 'react-router-dom';
import { ExternalLink } from '.'; //import directly from barrel file

const ProjectPreview = () => {
  return (
    <>
      <section aria-label="Project Preview" className="mb-20">
        <div className="mb-4 flex flex-col gap-1">
          <h2 className="text-base text-neutral-50">Projects</h2>
          <p className="mb-4">
            This site is an ongoing experiment, so things <span className="text-neutral-400 line-through decoration-1">might</span> will break. Feel free to reach out at{' '}
            <ExternalLink href="mailto:hello@javierlo.com">hello@javierlo.com</ExternalLink> or <ExternalLink href="https://www.linkedin.com/in/javierlo">LinkedIn</ExternalLink> for case studies.
          </p>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div className="overflow-hidden rounded-lg border border-neutral-50/10">
            <img src="/showcase/neptune.png" alt="Neptune for Solana Riptide 2022" loading="lazy" className="aspect-3/2 w-[100%]" />
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-50/10">
            <img src="/showcase/tr-assets.png" alt="Trulyremote side project" loading="lazy" className="aspect-3/2 w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPreview;
