import { useEffect, useRef, useState } from "react"
import { Player } from "./Player";
import data from "../gameHelper"

export const Tank = () => {
    const canvasRef = useRef(null);
    const { player, map } = data;
    var count = 0;

    useEffect(() => {
        const render = () => {
            requestAnimationFrame(render);
            if (++count < 4) {
                return;
            }
            count = 0;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, map.width * data.constant.flex, map.heigh * data.constant.flex);

            Player(ctx, player, data.constant.flex);

            move();

        }
        render();
    }, []);

    const move = () => {
        if (player.up) {
            if (player.y >= 0) {
                player.y -= player.spd
            }
            return player.y;
        } else if (player.down) {
            if (player.y + player.height <= map.heigh) {
                player.y += player.spd
            }
            return player.y;
        } else if (player.left) {
            if (player.x >= 0) {
                player.x -= player.spd
            }
            return player.x;
        } else if (player.right) {
            if (player.x + player.width <= map.width) {
                player.x += player.spd
            }
            return player.x;
        }
    }

    onkeydown = ({ keyCode }) => {
        switch (keyCode) {
            case 87:
                player.up = true
                player.down = false
                player.left = false
                player.right = false
                break
            case 83:
                player.up = false
                player.down = true
                player.left = false
                player.right = false
                break
            case 65:
                player.up = false
                player.down = false
                player.left = true
                player.right = false
                break
            case 68:
                player.up = false
                player.down = false
                player.left = false
                player.right = true
                break
        }
    }

    onkeyup = ({ keyCode }) => {
        switch (keyCode) {
            case 87:
                player.up = false
                break
            case 83:
                player.down = false
                break
            case 65:
                player.left = false
                break
            case 68:
                player.right = false
                break
        }
    }

    return (
        <canvas
            style={{ backgroundColor: 'gray' }}
            ref={canvasRef}
            width={map.width * data.constant.flex}
            height={map.heigh * data.constant.flex}
        />
        // <StyledTankMap width={mapWidth} height={mapHeight} >
        //     {console.log(`render ${renderCount}`)}
        //     <StyledText show={start} >Paused</StyledText>
        //     {bullet.map((bull, index) => {
        //         <StyledBullet
        //             key={index}
        //             x={bull.x}
        //             y={bull.y}
        //             size={tankSize * 0.3}
        //         />
        //     })}
        //     <StyledPlayer
        //         x={player.x}
        //         y={player.y}
        //         up={player.up}
        //         down={player.down}
        //         left={player.left}
        //         right={player.right}
        //         size={tankSize}
        //     />
        // </StyledTankMap>
    )
}