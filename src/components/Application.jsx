import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { collectIdsAndDocs } from '../utils'
import Posts from './Posts'

const Application = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const snapshot = await firestore.collection('posts').get()
      const posts = snapshot.docs.map(collectIdsAndDocs)
      setPosts(posts)
    })()
  }, [])

  const handleCreate = async post => {
    const docRef = await firestore.collection('posts').add(post)
    const doc = await docRef.get()
    const newPost = collectIdsAndDocs(doc)
    setPosts([...posts, newPost])
  }

  const handleRemove = async id => {}

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts
        posts={posts}
        onCreate={handleCreate}
        onRemove={handleRemove}
      />
    </main>
  )
}

export default Application
