import { useKeyboardControls } from '@react-three/drei'
import useGame from '../stores/useGame.jsx'

export default function Interface()
{
    const coins = useGame((state) => state.coins)
    const totalCoins = useGame((state) => state.totalCoins)

    // Get true / false values for the keyboard controls
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)
    const run = useKeyboardControls((state) => state.run)

    return <>
        <div className="mobileInterface">
            <div className='flex justify-end pr-2 pt-2'>
                <div className='flex bg-white bg-opacity-50 rounded-md p-2 border border-[#D6001C]'>
                    <div className='text-[15px] pt-1 text-[#E4000F]'>
                        { coins } / { totalCoins }
                    </div>
                    <div className='pl-2'>
                        <img className='w-6' src={ "./assets/images/coin.png" } alt="coin" />
                    </div>
                </div>
            </div>
        </div>
        <div className="interface">

            {/* Controls */}
            <div className="controls">
                <div className="raw">
                    <div className={ `key ${ forward ? 'active' : '' }` }>
                        <p>W</p>
                    </div>
                </div>
                <div className="raw">
                    <div className={ `key ${ leftward ? 'active' : '' }` }>
                        <p>A</p>
                    </div>
                    <div className={ `key ${ backward ? 'active' : '' } ` }>
                        <p>S</p>
                    </div>
                    <div className={ `key ${ rightward ? 'active' : '' } ` }>
                        <p>D</p>
                    </div>
                </div>
                <div className="raw">
                    <div className={ `key large ${ run ? 'active' : '' } ` }>
                        <p>shift</p>
                    </div>
                    <div className={ `key large ${ jump ? 'active' : '' } ` }>
                        <p>space</p>
                    </div>
                </div>
            </div>

        </div>
    </>
}
