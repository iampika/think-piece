import React, { useState, useEffect } from 'react'
import Posts from './Posts'

import { firestore } from '../firebase'

const Application = () => {
  const [posts, setPosts] = useState([])

  const handleCreate = post => {
    setPosts([...posts, post])
  }

  useEffect(() => {
    ;(async () => {
      const snapshot = await firestore.collection('posts').get()

      const snapshotData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setPosts(snapshotData)
    })()
  }, [])

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts posts={posts} onCreate={handleCreate} />
    </main>
  )
}

export default Application
