"use client";

import React from 'react'

export default function Button() {
    const handleClick = ()=>{
        console.log("Button Clicked");
    }
  return (
    <button onClick={handleClick} className='px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600'>Click Me</button>
  )
}
