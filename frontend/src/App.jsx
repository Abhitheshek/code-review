import React, { useEffect, useState } from 'react'
import prism from 'prismjs'
;
import 'prismjs/components/prism-jsx';

import 'prismjs/themes/prism-tomorrow.css'
import Editor  from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

const App = () => {

  const [code, setcode] = useState("")
  const [review, setreview] = useState("")
  
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewer(){
    setIsLoading(true) // Set loading to true
    try {
      const response = await axios.post('https://code-review-backend-gilt.vercel.app/ai/code-review', { code })
      console.log(response.data)
      setreview(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false
    }
  }

  return (
    <>
     <div className='w-screen h-screen bg-gradient-to-br from-blue-600 to-gray-300 grid md:grid-cols-2 grid-cols-1 gap-4 p-4 m-0'>
  <div className='left relative h-full bg-gray-900 rounded-lg m-0 overflow-auto'>
    <div className='code h-full '>
    
      <Editor

      value={code}
      onValueChange={newCode => setcode(newCode)}
      highlight={code => {
        if (!Prism.languages.jsx) {
          // Fallback to javascript if jsx is not available
          return Prism.highlight(code, Prism.languages.javascript, 'javascript');
        }
        return Prism.highlight(code, Prism.languages.jsx, 'jsx');
      }}
      
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        background: '#1e1e1e',
        color: '#fff',
        fontSize: 16,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        borderRadius: '8px',
        outline: 'none',
        border: 'none',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 1,
        
        

      }}
      />
    
    </div>
    <div>
      <button
      onClick={reviewer}
        className={`absolute bottom-5 right-5 z-20  ${ isLoading ? "bg-red-600" : "bg-green-500"} px-3 py-2 rounded`}>
        {isLoading ? 'Loading...' : 'Review'} 
      </button>
    </div>
    <div className='absolute top-1 left-1 z-10 p-2'>
    <p className=' text-white opacity-10'>// past your code here</p>
    </div>
  </div>
  <div className='right h-full bg-white rounded-lg p-4 overflow-auto'>
    <Markdown rehypePlugins={[rehypeHighlight]}>
      {review}
    </Markdown>
  </div>
  
</div>

    </>
  )
}

export default App