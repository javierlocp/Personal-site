// import post
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogPreview = () => {
  return (
    <>
      <section aria-label="Blog Preview">
        <div className="mb-4 flex flex-col gap-1">
          <h2 className="text-base font-bold text-neutral-50">From the Blog</h2>
        </div>
        <ul>
          {[...posts] // By extracting this wont mutate the original array
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
            .map((post) => (
              <li key={post.slug} className="my-2">
                <a
                  href={`/blog/${post.slug}`}
                  className="-mx-4 flex flex-col gap-1.5 rounded-md px-4 py-3 text-base text-neutral-50 transition-all duration-250 hover:bg-stone-50/5 hover:text-neutral-50 active:bg-stone-50/5"
                >
                  <div className="flex items-center justify-between gap-4 md:gap-8">
                    <h3 className="max-w-[320px] truncate md:max-w-[500px]">{post.title}</h3>
                    <div className="block flex-grow border-t border-gray-400/25"></div>
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

        <Link to="/blog" aria-label="Read all blog posts" className="mt-6 inline-block underline decoration-wavy decoration-0 underline-offset-2 hover:text-neutral-50">
          Read All
        </Link>
      </section>
    </>
  );
};

export default BlogPreview;
