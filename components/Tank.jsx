import { StyledTankMap } from "./styles"
import { StyledPlayer } from "./styles"
import { useEffect, useRef, useState } from "react"
import { atkSpeed } from "../gameHelper"

export const Tank = () => {
    const [positionX, setPositionX] = useState(10);
    const [positionY, setPositionY] = useState(15);
    const [start, setStart] = useState(true);
    const keys = useRef({
        up: false,
        down: false,
        left: false,
        right: false,
        shot: true,
    })

    const move = () => {
        if (keys.current.up) {
            setPositionY((positionY) => positionY -= 1)
        } else if (keys.current.down) {
            setPositionY((positionY) => positionY += 1)
        } else if (keys.current.left) {
            setPositionX((positionX) => positionX -= 1)
        } else if (keys.current.right) {
            setPositionX((positionX) => positionX += 1)
        }
    }

    const createBulls = () => {
        if (keys.current.shot) {
            keys.current.shot = false;
            console.log('shot')
            setTimeout(() => {
                keys.current.shot = true;
            }, atkSpeed);
        }
    }

    useEffect(() => {
        var timeId;

        if (start) {
            timeId = setInterval(() => {
                move();
            }, 33);
        }

        return () => {
            clearInterval(timeId)
        }
    }, [start])

    document.addEventListener('keydown', (e) => {
        keyDown(e)
    })
    document.addEventListener('keyup', (e) => {
        keyUp(e)
    })

    const keyDown = ({ keyCode }) => {
        if (keyCode === 32) {
            createBulls();
        }
        if (keyCode === 87) {
            keys.current.up = true
            keys.current.down = false
            keys.current.left = false
            keys.current.right = false
        } else if (keyCode === 83) {
            keys.current.up = false
            keys.current.down = true
            keys.current.left = false
            keys.current.right = false
        } else if (keyCode === 65) {
            keys.current.up = false
            keys.current.down = false
            keys.current.left = true
            keys.current.right = false
        } else if (keyCode === 68) {
            keys.current.up = false
            keys.current.down = false
            keys.current.left = false
            keys.current.right = true
        }
    }
    const keyUp = ({ keyCode }) => {
        if (keyCode === 87) {
            keys.current.up = false
        } else if (keyCode === 83) {
            keys.current.down = false
        } else if (keyCode === 65) {
            keys.current.left = false
        } else if (keyCode === 68) {
            keys.current.right = false
        }
    }

    return (
        <StyledTankMap>
            <StyledPlayer
                x={positionX}
                y={positionY}
                up={keys.current.up}
                down={keys.current.down}
                left={keys.current.left}
                right={keys.current.right}
            />
        </StyledTankMap>
    )
}