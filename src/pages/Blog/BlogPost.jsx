import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const markdownFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      const matchKey = Object.keys(markdownFiles).find((key) => key.endsWith(`${slug}.md`));

      if (matchKey) {
        const mod = await markdownFiles[matchKey]();
        setContent(mod);
      }
    };

    loadMarkdown();
  }, [slug]);

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
      <div className="md-content-style">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
