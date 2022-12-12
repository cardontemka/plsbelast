import { StyledBullet, StyledTankMap } from "./styles"
import { StyledPlayer } from "./styles"
import { useEffect, useRef, useState } from "react"
import { atkSpeed, movementSpeed } from "../gameHelper"
import { StyledText } from "./styles"

export const Tank1 = () => {
    const [mapWidth, setMapWidth] = useState(window.innerWidth * 0.9)
    const [mapHeight, setMapHeight] = useState(window.innerWidth * 0.5)
    const [tankSize, setTankSize] = useState(window.innerWidth * 0.03)
    const [positionX, setPositionX] = useState(10);
    const [positionY, setPositionY] = useState(15);
    const [bullet, setBullet] = useState([]);
    const [start, setStart] = useState(true);
    const [renderCount, setRenderCount] = useState(0);
    const keys = useRef({
        up: false,
        down: false,
        left: false,
        right: false,
        shot: true,
    })

    const move = () => {
        if (keys.current.up) {
            setPositionY((positionY) => {
                if (positionY >= 0) {
                    positionY -= movementSpeed
                }
                return positionY;
            })
        } else if (keys.current.down) {
            setPositionY((positionY) => {
                if (positionY + tankSize <= mapHeight) {
                    positionY += movementSpeed
                }
                return positionY;
            })
        } else if (keys.current.left) {
            setPositionX((positionX) => {
                if (positionX >= 0) {
                    positionX -= movementSpeed
                }
                return positionX;
            })
        } else if (keys.current.right) {
            setPositionX((positionX) => {
                if (positionX + tankSize <= mapWidth) {
                    positionX += movementSpeed
                }
                return positionX;
            })
        }
    }

    const createBulls = () => {
        if (keys.current.shot) {
            keys.current.shot = false;
            console.log(bullet)
            setBullet((bullet) => [...bullet, {x: positionX, y: positionY}])
            setTimeout(() => {
                keys.current.shot = true;
            }, atkSpeed);
        }
    }

    useEffect(() => {
        var timeId;

        if (start) {
            timeId = setInterval(() => {
                setRenderCount((renderCount) => renderCount += 1)
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
            if (keys.current.shot) {
                createBulls();
            }
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
        <StyledTankMap width={mapWidth} height={mapHeight} >
            {console.log(`render ${renderCount}`)}
            <StyledText show={start} >Paused</StyledText>
            {bullet.map((bull, index) => {
                <StyledBullet
                    key={index}
                    x={bull.x}
                    y={bull.y}
                    size={tankSize * 0.3}
                />
            })}
            <StyledPlayer
                x={positionX}
                y={positionY}
                up={keys.current.up}
                down={keys.current.down}
                left={keys.current.left}
                right={keys.current.right}
                size={tankSize}
            />
        </StyledTankMap>
    )
}