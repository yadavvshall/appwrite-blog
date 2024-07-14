import React from 'react'

function Logo({ src, width = '100px' }) {
  return (
    <div>
      <img src="./blg.png" alt="Logo" style={{ width }} />
    </div>
  )
}

export default Logo
