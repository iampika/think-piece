import React from 'react'
import Posts from './Posts'
import useCollection from '../hooks/useCollection'

const Application = () => {
  const posts = useCollection('posts')

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts posts={posts} />
    </main>
  )
}

export default Application
