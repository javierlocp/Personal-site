// Blog Index

const Blog = () => {

  const posts = [{ //Array of blogpost objects
    title: "How I design for outcomes, not outputs",
    date: "June 2025",
    slug: "outcomes-not-outputs",
  }, 
  {
    title: "Lessons from building a personal design system",
    date: "May 2025",
    slug: "personal-design-system",
  },
  ]; 

  return(
    <>
      <h3 className="text-neutral-50 text-base">Vestigia</h3>
      <p className="text-neutral-400 text-sm mt-2">My notes on design, tech, and the strange joy of figuring things out.</p>

      <ul className="my-14">
        {posts.map((post) => (
          <li key={post.slug} className="my-2">
            <a href={`/blog/${ post.slug }`} className="flex flex-col gap-1 text-base text-neutral-50 hover:text-neutral-50 rounded-md active:bg-neutral-900 hover:bg-neutral-900 block p-4 -mx-4 transition-all duration-250">
              {post.title}
              <span className="text-sm text-neutral-400 block">{post.date}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;