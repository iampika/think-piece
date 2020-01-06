import { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { collectIdsAndDocs } from '../utils'

const useCollection = path => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    return firestore.collection(path).onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      setDocs(posts)
    })
  }, [])

  return docs
}

export default useCollection
