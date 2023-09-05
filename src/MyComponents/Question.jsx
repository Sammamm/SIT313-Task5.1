import React from 'react'
import './question.css'

function Question() {
  return (
    <div className='QueContainer'>
        <div className="queHead">
            <h3>Your Question</h3> 
        </div>
        <div className="queTitle">
            <h4>Title: </h4>
            <input type="text" name="" id="" placeholder='Enter a descriptive title'/>
        </div>
        <div className="queAbstract">
            <h4>Abstract: </h4>
            <textarea type="text" name="" id="" placeholder='Enter a 1 para abstract' col="32"/>
        </div>
        <div className="queArticle">
            <h4>Article Text: </h4>
            <textarea type="text" name="" id="" placeholder='Enter a 1 para Article' col="32"/>
        </div>
        <div className="queTags">
            <h4>Tags: </h4>
            <input type="text" name="" id="" placeholder='Describe in 3 tags to describe what your article is about e.g. Java'/>
        </div>

        <div className="post">
            <button>Post</button>
        </div>
    </div>
  )
}

export default Question
