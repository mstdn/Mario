import { Ground } from "./Ground"
import Environment from "./world/Environment"
import Platforms from "./world/Platformer"
import Collectables from "./Collectables"
// import NPCs from "./world/NPCs"
// import Structures from "./world/Structures"
// import Trees from "./world/Trees"
// import Teleports from "./world/Teleports"
// import Texts from "./world/Texts"

export default function World(props)
{
    const { char, downgradedPerformance } = props

    return(
    <>
        <group>
            <Platforms char={ char } />
            <Collectables char={ char } />
            {/* <NPCs char={ char } /> */}
            {/* <Trees />
            <Teleports char={ char } />
            <Structures char={ char } />
            <Texts char={ char } /> */}
            <Ground />
            <Environment />
        </group>
    </>
    )
}