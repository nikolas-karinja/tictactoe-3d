import { useState } from "react"
import { GAMERULES } from "../constants"
import '../sass/DifficultySelection.sass'
import { dispatchEvent, playSound } from "../utils"

const DifficultySelection = ({show}) =>
{
    const [_, _update] = useState(Date.now())

    const _onClick = () =>
    {
        let _diff

        if (GAMERULES.difficulty === "Easy")
            _diff = "Medium"
        else if (GAMERULES.difficulty === "Medium")
            _diff = "Hard"
        else if (GAMERULES.difficulty === "Hard")
            _diff = "Easy"

        GAMERULES.difficulty = _diff
        playSound("UI", "Difficulty")
        dispatchEvent("update")
    }

    window.addEventListener("update", () =>
    {
        _update(Date.now())
    })

    return <div className="DifficultySelection"
        style={{display: show ? "inline-block" : "none"}}
        onClick={_onClick}>
        {GAMERULES.difficulty}
    </div>
}

export default DifficultySelection