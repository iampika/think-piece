import React, { useState } from 'react'

const AddComment = () => {
  const [content, setContent] = useState('')

  const handleContentChange = event => {
    setContent(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <input
        type="text"
        name="content"
        placeholder="Comment"
        value={content}
        onChange={handleContentChange}
      />
      <input
        className="create"
        type="submit"
        value="Create Comment"
      />
    </form>
  )
}

export default AddComment
