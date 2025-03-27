"use client"
import React, { useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import {Environment} from "@react-three/drei"
import { Mesh } from 'three'
import * as THREE from "three"


const CubeMesh  = () => {

    const ref = useRef<THREE.Mesh>(null!)

    useFrame((state,delta) => {
        ref.current.rotation.y += delta * 1.4
    })

    return(
        <mesh ref={ref} scale={[2,2,2]} >
            <boxGeometry />
            <meshStandardMaterial color={'green'} />
        </mesh>
    )


}



const ThreeNotFound = () => {
  return (
    <Canvas camera={{position:[3,3,3],fov:45}} >
        <CubeMesh />
        <ambientLight intensity={0.6} />
        <Environment preset='city' />
        <pointLight position={[10, 10, 10]} />
    </Canvas>
  )
}

export default ThreeNotFound