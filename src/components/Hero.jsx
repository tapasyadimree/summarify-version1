{/* this is the front page title section */} 
import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">

       <nav className="flex justify-between items-center w-full mb-10 pt-3">
          
         
          <div className="flex items-center ">
               
               <button type="button" 
               onClick={ () => window.open('https://github.com/tapasyadimree')}
               className="black_btn" >
                  Github
               </button>
          
          </div>

       </nav>

       <h1 className="head_text">
          Summarize Articles with <br className="max-md:hidden"/>
          <span className="orange_gradient">OpenAI GPT-4</span>
       </h1>

       <h2 className="desc">
          Simplify your reading with Summarify, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
       </h2>

    </header>
  )
}

export default Hero