import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

/**
 * House 
 */
// const HouseX = (props) => 
// {
    // const { position, scale } = props
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-.glb")
//     return (
//         <RigidBody
//             type="fixed"
//             colliders="trimesh"
            // position={ position }
            // scale={ scale }
//         >
//             <group scale={ 22 } {...props} dispose={null}>
               
//             </group>
//         </RigidBody>
//     )
// }


/**
 * Tree 1 
 */
const Tree1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-1.glb")
    return (
        // <RigidBody
        //     type="fixed"
        //     // colliders="hull"
        // >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh"].geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh_1"].geometry}
                    material={materials.mat20}
                />
            </group>
        // </RigidBody>
    )
}



export default function Trees()
{
    return(
        <>
            
        </>
    )
}

useGLTF.preload("./assets/models/world/trees/tree-1.glb")
