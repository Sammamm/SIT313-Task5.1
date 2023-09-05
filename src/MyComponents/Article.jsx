import React from 'react'
import "./Article.css"

function Article() {
  return (
    <div className='ArtContainer'>
        <div className="ArtHead">
            <h3>Your Article</h3> 
        </div>
        <div className="ArtTitle">
            <h4>Title: </h4>
            <input type="text" name="" id="" placeholder='Enter a descriptive title'/>
        </div>
        <div className="ArtArticle">
            <h4>Article Text: </h4>
            <textarea type="text" name="" id="" placeholder='Enter a 1 para Article' col="32"/>
        </div>
        <div className="ArtTags">
            <h4>Tags: </h4>
            <input type="text" name="" id="" placeholder='Describe in 3 tags to describe what your article is about e.g. Java'/>
        </div>

        <div className="post">
            <button>Post</button>
        </div>
    </div>
  )
}

export default Article
