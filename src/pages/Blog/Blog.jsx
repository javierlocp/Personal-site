// Blog Index

const Blog = () => {
  const posts = [
    {
      //Array of blogpost objects
      title: 'How I design for outcomes, not outputs',
      description: 'What the hell does this mean?',
      date: 'June 2025',
      slug: 'outcomes-not-outputs',
    },
    {
      title: 'Redesign after being idle for 10 years',
      description: 'Hi, this is a description for the blog',
      date: 'May 2025',
      slug: 'personal-design-system',
    },
  ];

  return (
    <>
      <div className="mb-12 flex flex-col gap-1">
        <h2 className="text-base text-neutral-50">Vestigia</h2>
        <p className="text-neutral-400">My notes on design, tech, and the strange joy of figuring things out.</p>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="my-2">
            <a
              href={`/blog/${post.slug}`}
              className="-mx-4 flex flex-col gap-1.5 rounded-md px-4 py-3 text-base text-neutral-50 transition-all duration-250 hover:bg-stone-50/5 hover:text-neutral-50 active:bg-stone-50/5"
            >
              {post.title}
              <span className="block text-neutral-400">{post.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
