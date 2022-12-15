import { useEffect, useRef, useState } from "react"
import { Player } from "./Player";
import { Bull } from "./Bull";
import { Brick } from "./Brick";
import data from "../gameHelper"
import tankUp from '../images/tankUp.png'
import tankDown from '../images/tankDown.png'
import tankLeft from '../images/tankLeft.png'
import tankRight from '../images/tankRight.png'

export const Tank = () => {
    const { player, map, bull, constant, brick } = data;
    const canvasRef = useRef(null);
    const bulls = useRef([]);
    const bricks = useRef([
        { x: 240, y: 150, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 360, y: 150, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 210, y: 240, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 240, y: 270, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 270, y: 270, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 300, y: 270, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 330, y: 270, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 360, y: 270, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 390, y: 240, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
    ]);
    // const [bullet, setBullet] = useState([]);
    player.image = tankRight
    var count = 0;

    useEffect(() => {
        const render = () => {
            requestAnimationFrame(render);
            // 15 fps
            if (++count < 4) {
                return;
            }
            count = 0;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, map.width * constant.flex, map.height * constant.flex);
            ctx.fillStyle = 'gray'
            ctx.fillRect(0, 0, map.width * constant.flex, map.height * constant.flex);

            if (bricks.current.length) {
                bricks.current.map((brick) => {
                    Brick(ctx, brick, constant.flex);
                })
            }

            if (bulls.current.length) {
                bulls.current.map((bull) => {
                    Bull(ctx, bull, constant.flex);
                })
            }

            Player(ctx, player, constant.flex);

            move();

        }
        render();
    }, []);

    const createBulls = () => {
        if (player.isBull) {
            player.isBull = false;
            // setBullet((bullet) => [...bullet, { x: player.y + player.height / 2, y: player.x + player.width / 2, width: bull.width, height: bull.height, color: 'yellow' }])
            bulls.current.push({ x: player.x + player.width / 2 - bull.width / 2, y: player.y + player.height / 2 - bull.height / 2, width: bull.width, height: bull.height, color: 'yellow', spd: bull.spd, vector: player.last.up ? 'up' : player.last.down ? 'down' : player.last.left ? 'left' : 'right' });
            setTimeout(() => {
                player.isBull = true;
            }, player.atkspd);
        }
    }

    const move = () => {
        if (player.shot) {
            createBulls();
        }
        if (player.last.up || player.last.down || player.last.left || player.last.right) {
            if (player.up) {
                if (player.y >= 0) {
                    player.y -= player.spd
                }
            } else if (player.down) {
                if (player.y + player.height <= map.height) {
                    player.y += player.spd
                }
            } else if (player.left) {
                if (player.x >= 0) {
                    player.x -= player.spd
                }
            } else if (player.right) {
                if (player.x + player.width <= map.width) {
                    player.x += player.spd
                }
            }
        }
    }

    onkeydown = ({ keyCode }) => {
        switch (keyCode) {
            case 32:
                player.shot = true
                break
            case 87:
                if (player.image !== tankUp) {
                    player.image = tankUp
                }
                bull.width = 3
                bull.height = 4
                player.last.up = true
                player.last.down = false
                player.last.left = false
                player.last.right = false
                player.up = true
                player.down = false
                player.left = false
                player.right = false
                break
            case 83:
                if (player.image !== tankDown) {
                    player.image = tankDown
                }
                bull.width = 3
                bull.height = 4
                player.last.up = false
                player.last.down = true
                player.last.left = false
                player.last.right = false
                player.up = false
                player.down = true
                player.left = false
                player.right = false
                break
            case 65:
                bull.width = 4
                bull.height = 3
                if (player.image !== tankLeft) {
                    player.image = tankLeft
                }
                player.last.up = false
                player.last.down = false
                player.last.left = true
                player.last.right = false
                player.up = false
                player.down = false
                player.left = true
                player.right = false
                break
            case 68:
                if (player.image !== tankRight) {
                    player.image = tankRight
                }
                bull.width = 4
                bull.height = 3
                player.last.up = false
                player.last.down = false
                player.last.left = false
                player.last.right = true
                player.up = false
                player.down = false
                player.left = false
                player.right = true
                break
        }
    }

    onkeyup = ({ keyCode }) => {
        switch (keyCode) {
            case 32:
                player.shot = false
                break
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
            style={{ width: map.width * constant.flex + 'px', height: map.height * constant.flex + 'px', backgroundColor: 'gray' }}
            ref={canvasRef}
            width={map.width * constant.flex}
            height={map.height * constant.flex}
        />
    )
}