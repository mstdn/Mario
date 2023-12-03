import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import useGame from '../stores/useGame.jsx'
import { Vector3 } from "three"
import useSound from "use-sound"

const Coin = (props) => 
{
    const [ playCoinSound ] = useSound('./assets/audio/coin.wav')
    const { coin, char , dis } = props
    const [ collected, setCollected ] = useState(false)
    const coins = useGame()
    const { nodes, materials } = useGLTF("./assets/models/coin.glb")

    useFrame((_, delta) =>
    {
        // Item rotate
        coin.current.rotation.y += delta

        if(char.current)
        {
            const coinPosition = coin.current.position
            const playerPosition = char.current.translation()
            const distance = coinPosition.distanceTo(new Vector3(playerPosition.x, playerPosition.y, playerPosition.z))

            if( !collected && distance < dis )
            {
                setCollected(true)
                coins.increaseCoins()
                playCoinSound()
                coin.current.visible = false
                // console.log(coins.coins)
            }
        }
    })

    return(
        <>
            <group scale={ 2 } ref={coin} {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_1.geometry}
                    material={materials.Yellow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_2.geometry}
                    material={materials.DarkYellow}
                    />
                </group>
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 11
}

export default function Collectables(props)
{
    const { char } = props
    const coin1  = useRef()
    const coin2  = useRef()
    const coin3  = useRef()
    const coin4  = useRef()
    const coin5  = useRef()
    const coin6  = useRef()
    const coin7  = useRef()
    const coin8  = useRef()
    const coin9  = useRef()
    const coin10  = useRef()
    const coin11  = useRef()
    // const coin12  = useRef()
    // const coin13  = useRef()

    return(
    <>
        <Coin 
            coin={ coin1 }
            position={ [ 0.1, 7, 19.7 ] }
            dis={ 2 }
            scale={ 3 } 
            char={ char }
        />
        <Coin 
            coin={ coin2 } 
            position={ [ 50.25, 8, 4.2 ] } 
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin3 } 
            position={ [ 64.73, 12, 50 ] } 
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin4 } 
            position={ [ 79.5, 14, 50 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin5 } 
            position={ [ 79.5, 16, 35 ] }
            dis={ 2 }
            scale={ 2 }
            char={ char } 
        />
        <Coin 
            coin={ coin6 } 
            position={ [ 79.5, 18, 20 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin7 } 
            position={ [ 79.5, 20.5, 5 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin8 } 
            position={ [ 65, 22, 5 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin9 } 
            position={ [ 65, 25, 20 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin10 } 
            position={ [ 65, 28, 35 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />
        <Coin 
            coin={ coin11 } 
            position={ [ 65, 31, 50 ] }
            dis={ 2 }
            scale={ 2 } 
            char={ char } 
        />

        {/* <Coin position={ [ - 802, 42, - 126 ] } pos={ [ - 802, 42, - 126 ] } scale={ 2 } char={ char } coin={ coin12 } /> */}
        {/* <Coin position={ [ - 820, 56, - 152 ] } pos={ [ - 820, 56, - 152 ] } scale={ 2 } char={ char } coin={ coin13 } /> */}
    </>
    )
}



useGLTF.preload("./assets/models/coin.glb")