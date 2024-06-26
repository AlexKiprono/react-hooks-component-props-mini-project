import React from 'react'
import Article from './Article'


export default function ArticleList(posts) {
    console.log("Posts", posts);

  return (
    <main>
      {
        posts && posts.map(post => 
        (<Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    ))}
    </main>
  );
}
