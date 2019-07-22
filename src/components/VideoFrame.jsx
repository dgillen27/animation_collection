import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function VideoFrame() {
  const delay = 300
  const [video, setVideo] = useState(false);
  const slideDown = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: delay, from: {transform: 'translate3d(0%, -150%, 0)'}})
  const slideDown2 = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: delay, from: {transform: 'translate3d(0%, -150%, 0)'}})
  const opacityChange = useSpring({opacity: 1, delay: delay + 100, from: {opacity: 0}})
  const slideRight = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: delay, from: {transform: 'translate3d(-200%, 0, 0)'}})
  const slideUp = useSpring({ transform: 'translate3d(0%, 0, 0)', delay: delay, from: {transform: 'translate3d(0%, 150%, 0)'}})
  const slideLeft = useSpring({onRest: () => setVideo(true), delay: delay, transform: 'translate3d(0%, 0, 0)', from: {transform: 'translate3d(200%, 0, 0)'}})
  const slideLeft1 = useSpring({onRest: () => setVideo(true), delay: 350, transform: 'translate3d(0%, 0, 0)', from: {transform: 'translate3d(250%, 0, 0)'}})
  const opacity = useSpring({opacity: 1, from: {opacity: 1}})


  return (
    <div className="component">
      <div className="video-page">
        <animated.div style={opacityChange} className="blue-square"></animated.div>
        <animated.div style={slideDown} className="vertical-one"></animated.div>
        <animated.div style={slideRight} className="horizontal-one"></animated.div>
        <animated.div style={slideUp} className="vertical-two"></animated.div>
        <animated.div style={slideLeft} className="horizontal-two"></animated.div>
        { <iframe className="video" width="1050" height="525" src="https://www.youtube.com/embed/CSSNP2DudNw?autoplay=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      </div>
    </div>
  )
}