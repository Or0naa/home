import React from 'react'
import Artical from './Artical'
import postData from './posts.json';

export default function List() {
  return (
    <div className="list">
        <Artical posts={postData} />
    </div>
  )
}

