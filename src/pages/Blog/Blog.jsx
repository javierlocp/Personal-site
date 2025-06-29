import { posts } from '../../data/posts';

// Blog Index
const Blog = () => {
  return (
    <>
      <div className="mb-12 flex flex-col gap-1">
        <h1 className="text-neutral-50">Vestigia</h1>
        <p className="text-neutral-400">My notes on design, tech, and the strange joy of figuring things out.</p>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="my-2">
            <a
              href={`/blog/${post.slug}`}
              className="-mx-4 flex flex-col gap-1.5 rounded-md px-4 py-3 text-base text-neutral-50 transition-all duration-250 hover:bg-stone-50/5 hover:text-neutral-50 active:bg-stone-50/5"
            >
              <div className="flex items-center justify-between gap-4 md:gap-8">
                <h2 className="max-w-[320px] truncate md:max-w-[500px]">{post.title}</h2>
                <div class="block flex-grow border-t border-gray-400/25"></div>
                <span className="shrink-0 font-mono text-xs text-neutral-400">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <span className="line-clamp-2 text-neutral-400">{post.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
