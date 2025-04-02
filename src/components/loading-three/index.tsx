"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const CubeThree = () => {

    const cubeRef = useRef<THREE.Mesh>(null!)

    useFrame((state,delta) => {

        cubeRef.current.rotation.y += delta * 0.4
    })


    return(
        <mesh ref={cubeRef}  >
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    )

}


const LoadingThree = () => {
  return (
    <Canvas camera={{position:[3,3,3],fov:45}} >
        <CubeThree />
    </Canvas>
  )
}

export default LoadingThree