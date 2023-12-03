import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

const GRAVITY = 1
const FRICTION = 1
const RESTITUTION = 1


/**
 *  Bridge
 */
const Brdige = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/bridge.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            //colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_bridge.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_bridge_1.geometry}
                    material={materials.woodDark}
                />
            </group>
        </RigidBody>
    )
}

/**
 *  BridgeRamp
 */
const BrdigeRamp = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/bridgeRamp.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_bridgeRamp.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_bridgeRamp_1.geometry}
                    material={materials.woodDark}
                />
            </group>
        </RigidBody>
    )
}

/**
 *  Block 1 x 1
 */
const Block = (props) => 
{
    const { grav, rest, fric, colliders } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/block.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            colliders={ colliders }
            //colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_block.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_block_1.geometry}
                    material={materials.dirt}
                />
            </group>
        </RigidBody>
    )
}

/**
 *  Block 1 x 0.5
 */
const BlockHalf = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockHalf.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            //colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockHalf.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockHalf_1.geometry}
                    material={materials.dirt}
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
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockLarge.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            //colliders="hull"
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
 *  Block large long
 */
const BlockLong = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockLong.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            //colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockLong.geometry}
                    material={materials.grass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockLong_1.geometry}
                    material={materials.dirt}
                />
            </group>
        </RigidBody>
    )
}

/**
 *  Block moving sq
 */
const BlockMoving = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockMoving.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            //colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockMoving.geometry}
                    material={materials.gold}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockMoving_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockMoving_2.geometry}
                    material={materials._defaultMat}
                />
            </group>
        </RigidBody>
    )
}



export default function Platforms(props)
{
    const { char } = props
    return(
        <>  
            <group>
                {/* Start block */}
                <BlockHalf
                    position={ [ 0, 0, 0 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* First bridge */}
                <Brdige
                    position={ [ 0, 1, 10 ] }
                    scale={ 10 }
                />
                {/* Chose your path */}
                <BlockHalf
                    position={ [ 0, 0, 20 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* 3 bridges */}
                <Brdige
                    position={ [ 10, 1, 20 ] }
                    scale={ 10 }
                    rotation-y={ Math.PI * 0.5 }
                />
                <Brdige
                    position={ [ - 10, 1, 20 ] }
                    scale={ 10 }
                    rotation-y={ Math.PI * 0.5 }
                />
                <Brdige
                    position={ [ 0, 1, 30 ] }
                    scale={ 10 }
                    rotation-y={ Math.PI * 0 }
                />
                {/* Left way */}
                <BlockLong
                    position={ [ 25, - 5, 20 ] }
                    rotation-y={ Math.PI * 0.5 }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* Left higher */}
                <Block
                    position={ [ 40, 0, 20 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                    colliders="hull"
                />
                {/* Left ramp bridge */}
                <BrdigeRamp
                    position={ [ 30, 5, 20 ] }
                    rotation-y={ Math.PI * 0.5 }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* Left long higher */}
                <BlockLong
                    position={ [ 50, 0, 20 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <Brdige
                    position={ [ 50, 6, 35 ] }
                    scale={ 10 }
                    rotation-y={ Math.PI * 0 }
                />
                {/* Left long higher */}
                <BlockLong
                    position={ [ 50, 0, 50 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* Left last sq */}
                <BlockMoving
                    position={ [ 65, 7.5, 50 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 80, 9.5, 50 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 80, 11.5, 35 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 80, 13.5, 20 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 80, 15.5, 5 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 65, 17.5, 5 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 65, 20.5, 20 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 65, 23.5, 35 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                <BlockMoving
                    position={ [ 65, 26.5, 50 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
                {/* Left lower near water */}
                <Block
                    position={ [ 50, - 4, 5 ] }
                    scale={ 10 }
                    grav={ GRAVITY }
                    fric={ FRICTION }
                    rest={ RESTITUTION }
                />
            </group>

        </>
    )
}

useGLTF.preload("./assets/models/platformer/blockLarge.glb")
useGLTF.preload("./assets/models/platformer/blockLong.glb")
useGLTF.preload("./assets/models/platformer/blockMoving.glb")
useGLTF.preload("./assets/models/platformer/block.glb")
useGLTF.preload("./assets/models/platformer/blockHalf.glb")
useGLTF.preload("./assets/models/platformer/bridge.glb")