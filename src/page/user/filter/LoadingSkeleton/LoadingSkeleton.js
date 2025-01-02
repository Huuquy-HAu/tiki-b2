import React from 'react'
import './LoadingSkeleton.css'
 const LoadingSkeleton = (props) => {
  return (
    <div className='skeleton'
     style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}>
    </div>
  )
}

export default LoadingSkeleton