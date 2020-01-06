import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { collectIdsAndDocs } from '../utils'
import Posts from './Posts'

const useCollection = path => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    return firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      setPosts(posts)
    })
  }, [])
}

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
