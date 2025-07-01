import matter from 'gray-matter';

export const getAllPosts = () => {
  const markdownFiles = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  });

  const posts = Object.entries(markdownFiles).map(([path, raw]) => {
    const { data } = matter(raw);
    return data;
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
