// Import necessary dependencies from the React Three Fiber and React Three Drei libraries
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Define the Bird component
const Bird = () => {
  // Load the GLTF model and its animations using the useGLTF hook
  const { scene, animations } = useGLTF(birdScene)

  // Create a reference for the bird mesh to manipulate it
  const birdRef = useRef()

  // Extract animations and actions from the useAnimations hook
  const { actions } = useAnimations(animations, birdRef)

  // Use useEffect to play the initial animation when the component mounts
  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])

  // Use useFrame to update the bird's position and rotation in each frame
  useFrame(({ clock, camera }) => {
    // Make the bird move up and down in a sinusoidal motion
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    // Flip the bird's rotation when it reaches certain positions relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0
    }

    // Move the bird forward and backward based on its rotation
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    } else {
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  // Render the bird mesh with the loaded GLTF model
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

// Export the Bird component as the default export
export default Bird
