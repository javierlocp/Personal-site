import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Check if post exist
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article>
      <span className="mb-4 inline-block font-mono text-xs text-neutral-400">
        {new Date(post.date).toLocaleDateString('en-GB', {
          weekday: 'long',
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })}
        {post.readingTime && ` · ${post.readingTime} min read`}
      </span>
      <div className="flex flex-col gap-2">
        <h1>{post.title}</h1>
        <p className="text-pretty">{post.description}</p>
      </div>
      <div className="my-12 text-sm text-neutral-400">
        <img src="https://placehold.co/600x400" alt="" />
        {post.image && <img src={post.image} alt={post.title} className="mb-6 h-auto w-full rounded-md" />}
      </div>
      <div>
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="mt-4 text-neutral-100">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;
