import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"



/**
 *  Block large sqaure
 */
const StonePlatform = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/stone-platform.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.StonePlatform_Cylinder.geometry}
                    material={materials["Material.001"]}
                />
            </group>
        </RigidBody>
    )
}


/**
 *  Block large sqaure
 */
const BlockLarge = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockLarge.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockLarge.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockLarge_1.geometry}
                    material={materials.dirt}
                />
            </group>
        </RigidBody>
    )
}






/**
 *  https://poly.pizza/m/jLjH1jMIpH
 */
const Platform1 = (props) => 
{
    const { color, mapRepeat, colSize, gravity, texture, boxSize, fric, rest, rotY } = props
    const map = useTexture(texture)
    map.wrapS = map.wrapT = THREE.RepeatWrapping
    return (
        <RigidBody 
            gravityScale={ gravity }
            friction={ fric }
            restitution={ rest }
            type="fixed" 
            colliders={ false }
            {...props} 
        >
            <mesh 
                receiveShadow
                castShadow
                rotation-x={ - Math.PI / 2 }
            >
                <boxGeometry 
                    args={ boxSize } 
                    position={ [ 0, - 4, 0 ] }
                />
                <meshStandardMaterial 
                    map={ map } 
                    map-repeat={ mapRepeat } 
                    color={ color } 
                    side={ THREE.DoubleSide } 
                />
            </mesh>
            <CuboidCollider 
                args={ colSize } 
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}


export default function Platforms()
{
    const { downgradedPerformance } = props

    return(
        <>  
            <Platform1 
                position={ [ 0, 0, 0 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 8, 8 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/images/mario.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 30, 3, 0 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/sand_1.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 60, 5, 0 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/sand_2.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 60, 8, 30 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/cobblestone_2.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 60, 11, 60 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/cobblestone_3.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 60, 15, 90 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 2, 2 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/dirty_2.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 30, 19, 90 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 2, 2 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/dirty_3.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 30, 22, 60 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/grass_2.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 30, 26, 30 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/grass_3.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 0, 30, 30 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/sand_3.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />



            <Platform1 
                position={ [ 0, 0, 30 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 2, 2 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/cobblestone_1.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 0, 0, 60 ] }
                rotY={ Math.PI * 0.5 }
                color={ "white" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/dirty_1.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />
            <Platform1 
                position={ [ 0, 0, 90 ] }
                rotY={ Math.PI * 0.5 }
                color={ "green" } 
                mapRepeat={ [ 4, 4 ] }
                boxSize={ [ 20 , 20, 20 ] }
                colSize={ [ 10, 10, 10 ] }
                texture={ "./assets/textures/grass_1.png" }
                gravity={ 0.1 }
                fric={ 0.01 }
                rest={ 0.5 }
            />


            
        </>
    )
}


useTexture.preload('./assets/textures/cobblestone_1.png')
useTexture.preload('./assets/textures/cobblestone_2.png')
useTexture.preload('./assets/textures/cobblestone_3.png')
useTexture.preload('./assets/textures/dirty_1.png')
useTexture.preload('./assets/textures/dirty_2.png')
useTexture.preload('./assets/textures/dirty_3.png')
useTexture.preload('./assets/textures/grass_1.png')
useTexture.preload('./assets/textures/grass_2.png')
useTexture.preload('./assets/textures/grass_3.png')
useTexture.preload('./assets/textures/sand_1.png')
useTexture.preload('./assets/textures/sand_2.png')
useTexture.preload('./assets/textures/sand_3.png')
useTexture.preload('./assets/images/mario.png')