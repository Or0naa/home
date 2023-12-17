import React from 'react'

export default function Artical(props) {
    const { posts } = props;

    return (
        <div className="list">
            {posts.map((post, i) => (
                <div key={i} className="artical">
                    <img src={post.coverImage} alt={post.title} />
                    <p>{post.date}</p>
                    <h2>{post.title}</h2>
                    <p>{post.intro}</p>
                </div>
            ))}
        </div>
    );

}