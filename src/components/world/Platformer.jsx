import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { RGBA_ASTC_5x4_Format } from "three"

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
 *  Block half slope
 */
const BlockSlopeHalf = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockSlopeHalf.glb")
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
                    geometry={nodes.Mesh_blockSlopeHalf.geometry}
                    material={materials.dirt}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockSlopeHalf_1.geometry}
                    material={materials.grass}
                />
            </group>
        </RigidBody>
    )
}

/**
 *  Block dirt
 */
const BlockDirt = (props) => 
{
    const { grav, rest, fric } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockDirt.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            // colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.blockDirt.geometry}
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
    const { grav, rest, fric, col } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockLong.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            colliders={ col }
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
 *  Block large long
 */
const BlockMovingBlue = (props) => 
{
    const { grav, rest, fric, col } = props
    const { nodes, materials } = useGLTF("./assets/models/platformer/blockMovingBlue.glb")
    return (
        <RigidBody
            type="fixed"
            gravityScale={ grav }
            restitution={ rest }
            friction={ fric }
            colliders={ col }
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockMovingBlue.geometry}
                    material={materials.gold}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_blockMovingBlue_1.geometry}
                    material={materials.blue}
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
                {/* Starting group */}
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
                </group>
                {/* Left way group */}
                <group>
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

                {/* Right way group */}
                <group>
                    <BlockHalf
                        position={ [ - 20, 0, 20 ] }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                    />
                    <Brdige
                        position={ [ - 30, 1, 20 ] }
                        scale={ 10 }
                        rotation-y={ Math.PI * 0.5 }
                    />
                    <BlockLong
                        position={ [ - 45, - 5, 20 ] }
                        rotation-y={ Math.PI * 0.5 }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                    />
                    <BlockDirt
                        position={ [ - 60, - 5, 20 ] }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                    />
                    <BlockSlopeHalf
                        position={ [ - 60, 5, 20 ] }
                        rotation-y={ Math.PI * 1.5 }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                    />
                    <BlockLong
                        position={ [ - 75, 0, 20 ] }
                        rotation-y={ Math.PI * 0.5 }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                        col="trimesh"
                    />
                    <BlockLarge
                        position={ [ - 95, 0, 20 ] }
                        scale={ 10 }
                        grav={ GRAVITY }
                        fric={ FRICTION }
                        rest={ RESTITUTION }
                    />
                    <group>
                        {/* Blue up */}
                        <BlockMovingBlue
                            position={ [ - 88, 10, 33 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 93, 13, 33 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 98, 16, 33 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 103, 19, 33 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 22, 33 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 25, 27 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 28, 22 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 31, 17 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 34, 12 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 108, 37, 7 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 103, 37, 7 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 98, 37, 7 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 93, 37, 7 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 88, 37, 7 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 88, 37, 12 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 88, 37, 17 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 88, 37, 22 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 93, 37, 22 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                        <BlockMovingBlue
                            position={ [ - 98, 37, 22 ] }
                            scale={ 5 }
                            grav={ GRAVITY }
                            fric={ FRICTION }
                            rest={ RESTITUTION }
                        />
                    </group>
                </group>

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
useGLTF.preload("./assets/models/platformer/bridgeRamp.glb")
useGLTF.preload("./assets/models/platformer/blockSlopeHalf.glb")
useGLTF.preload("./assets/models/platformer/blockMovingBlue.glb")
useGLTF.preload("./assets/models/platformer/blockDirt.glb")
