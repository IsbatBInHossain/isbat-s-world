import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import HomeLoader from '../components/HomeLoader'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [moved, setMoved] = useState(false)

  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  useEffect(() => {
    if (isMusicPlaying) audioRef.current.play()
    return audioRef.current.pause()
  }, [isMusicPlaying])

  useEffect(() => {
    window.addEventListener('click', () => setMoved(true))
    return window.removeEventListener('click', () => setMoved(true))
  })

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition]
  }
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <Suspense fallback={<HomeLoader />}>
      <section className=' w-full h-screen relative'>
        <div className=' absolute flex items-center justify-center top-28 left-0 right-0 z-10'>
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={`w-full bg-transparent h-screen ${
            isRotating ? ' cursor-grabbing' : 'cursor-grab'
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Canvas>
        <div
          className=' absolute bottom-2 left-2'
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        >
          <img
            src={isMusicPlaying ? soundon : soundoff}
            alt='sound'
            className=' w-10 h-10 object-contain cursor-pointer'
          />
        </div>
        {!moved && (
          <div className=' absolute bottom-4 left-[50%] -translate-x-[50%] flex flex-col gap-2 justify-center items-center'>
            <img src='/drag.svg' alt='drag' className=' w-12 h-12' />
            <p className=' uppercase font-semibold text-xl'>Drag to explore</p>
          </div>
        )}
      </section>
    </Suspense>
  )
}

export default Home
