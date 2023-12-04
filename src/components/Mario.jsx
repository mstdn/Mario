import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Mario(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/mario.glb")
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={ 0.3 } ref={group} {...props} dispose={null}>
      <group name="AuxScene">
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0023"
            geometry={nodes.mesh0023.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0023.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0024"
            geometry={nodes.mesh0024.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0024.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0025"
            geometry={nodes.mesh0025.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0025.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0026"
            geometry={nodes.mesh0026.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0026.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0027"
            geometry={nodes.mesh0027.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0027.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0028"
            geometry={nodes.mesh0028.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0028.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0029"
            geometry={nodes.mesh0029.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0029.skeleton}
          />
          <skinnedMesh
            name="mesh0030"
            geometry={nodes.mesh0030.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0030.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0031"
            geometry={nodes.mesh0031.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0031.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0032"
            geometry={nodes.mesh0032.geometry}
            material={materials.mesh0032matmat}
            skeleton={nodes.mesh0032.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0033"
            geometry={nodes.mesh0033.geometry}
            material={materials.mesh0032matmat}
            skeleton={nodes.mesh0033.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0034"
            geometry={nodes.mesh0034.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0034.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0035"
            geometry={nodes.mesh0035.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0035.skeleton}
          />
          <skinnedMesh
            castShadow
            receiveShadow
            name="mesh0036"
            geometry={nodes.mesh0036.geometry}
            material={materials.mesh0023matmat}
            skeleton={nodes.mesh0036.skeleton}
          />
          <primitive object={nodes.mixamorigHips_4} />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/mario.glb")