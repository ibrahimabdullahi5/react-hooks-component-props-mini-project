import React from 'react'
import Article from "./Article";

 function ArticleList({posts}) {
  return (
    <div>
      <main>
        {posts.map((post)=>(
            <Article
                key={post.id}
                title={post.title}
                data={post.date || "January 1, 1970"}
                preview={post.preview} 
                   minutes={post.minutes || 0} 
            />
        ))}
      </main>
    </div>
  )
}
export default ArticleList;