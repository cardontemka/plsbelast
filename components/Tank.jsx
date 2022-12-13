import { useEffect, useRef, useState } from "react"
import { Player } from "./Player";
import data from "../gameHelper"
import { Bull } from "./Bull";

export const Tank = () => {
    const canvasRef = useRef(null);
    const [bullet, setBullet] = useState([]);
    const { player, map, bull } = data;
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

            let newBull = Bull(ctx, bullet, data.constant.flex);

            if (newBull) {
                newBull.map((bull) => bull.data.draw(ctx))
            }

            Player(ctx, player, data.constant.flex);

            move();

        }
        render();
    }, []);

    const createBulls = () => {
        if (player.isBull) {
            player.isBull = false;
            setBullet((bullet) => [...bullet, { x: player.y + player.height / 2, y: player.x + player.width / 2, width: bull.width, height: bull.height, color: 'yellow' }])

            setTimeout(() => {
                player.isBull = true;
            }, player.atkspd);
        }
    }

    const move = () => {
        if (player.shot) {
            createBulls();
        }
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
            case 32:
                player.shot = true
                break
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