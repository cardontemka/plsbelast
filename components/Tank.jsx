import { useEffect, useRef, useState } from "react"
import { Player } from "./Player";
import data from "../gameHelper"
import { Bull } from "./Bull";

export const Tank = () => {
    const canvasRef = useRef(null);
    const bulls = useRef([]);
    // const [bullet, setBullet] = useState([]);
    const { player, map, bull } = data;
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
            
            ctx.clearRect(0, 0, map.width * data.constant.flex, map.heigh * data.constant.flex);
            ctx.fillStyle = 'gray'
            ctx.fillRect(0, 0, map.width * data.constant.flex, map.heigh * data.constant.flex);

            if (bulls.current.length) {
                bulls.current.map((bull) => {
                    Bull(ctx, bull, data.constant.flex);
                })
            }

            Player(ctx, player, data.constant.flex);

            move();

        }
        render();
    }, []);

    const createBulls = () => {
        if (player.isBull) {
            player.isBull = false;
            // setBullet((bullet) => [...bullet, { x: player.y + player.height / 2, y: player.x + player.width / 2, width: bull.width, height: bull.height, color: 'yellow' }])
            bulls.current.push({x: player.x + player.width / 2 - bull.width / 2, y: player.y + player.height / 2 - bull.height / 2, width: bull.width, height: bull.height, color: 'yellow', spd: bull.spd, vector: player.last.up ? 'up' : player.last.down ? 'down' : player.last.left ? 'left' : 'right'});
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
                if (player.y + player.height <= map.heigh) {
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
            style={{ backgroundColor: 'gray' }}
            ref={canvasRef}
            width={map.width * data.constant.flex}
            height={map.heigh * data.constant.flex}
        />
    )
}