import { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { Mario } from './Mario'

const Player = forwardRef((props, ref) =>
{
    useFrame(() =>
    {
        if(ref.current)
        {
            const charPosition = ref.current.translation()
            // console.log(charPosition)
            
            if(charPosition.y < - 30 )
            {
                // console.log(charPosition.y)
                ref.current.setTranslation( { x: 0, y: 25, z: 0 } )
                ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
                ref.current.setAngvel( { x: 0, y: 0, z: 0 } )
            }
        }
    })
    
    const characterURL = "./assets/models/mario.glb"
    const animationSet = 
    {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        jump: "Jump",
        jumpIdle: "Falling",
        jumpLand: "Landing",
        fall: "Falling",
        action1: "1",
        // action2: "2",
        // action3: "3",
        // action4: "4",
    }

    return( 
        <>
            <Ecctrl
                debug={ false }  
                ref={ ref }
                // camCollision={ false }
                capsuleRadius={ 0.3 }
                capsuleHalfHeight={ 0.5 }
                friction={ 1 }
                camInitDis={ - 10 }
                camMaxDis={ - 30 }
                camMinDis={ - 0.1 }
                animated={ true }
                position={ [ 0, 20, 0 ] }
                maxVelLimit={ 3 }
                sprintMult={ 4 }
                jumpVel={ 8 }
                autoBalanceDampingOnY={ 0.01 }
                slopeMaxAngle={ 2 }
                gravityScale={ 1.5 }
                // turnSpeed={ 10 }
                jumpForceToGroundMult={ 20 }
                // characterInitDir={ 160 }
                // camInitDir={ Math.PI * 1 }
            >
                <EcctrlAnimation
                    characterURL={ characterURL }
                    animationSet={ animationSet }
                >
                    <Mario
                        position={ [ 0,  - 1, 0 ] }
                    />
                </EcctrlAnimation>
            </Ecctrl>
        </>
    )
})

export default Player