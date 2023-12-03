import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Walugi(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/walugi.glb")
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={ 0.1 } ref={group} {...props} dispose={null}>
      <group name="AuxScene">
          <skinnedMesh
            castShadow
            receiveShadow
            name="Object1"
            geometry={nodes.Object1.geometry}
            material={materials.Mat_0mat}
            skeleton={nodes.Object1.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Object2"
            geometry={nodes.Object2.geometry}
            material={materials.Mat_0mat}
            skeleton={nodes.Object2.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Object3"
            geometry={nodes.Object3.geometry}
            material={materials.Mat_0mat}
            skeleton={nodes.Object3.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
      </group>
    </group>
  )
}

useGLTF.preload("./assets/models/walugi.glb")