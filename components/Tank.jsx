import { useEffect, useRef, useState } from "react"
import { Player } from "./Player";
import { Bull } from "./Bull";
import { Brick } from "./Brick";
import data from "../gameHelper"
import { Background } from "./Background";
import { WallCollision } from "./until/WallCollision";
import { BrickCollision } from "./until/BrickCollision";
import { BullDetect } from "./until/BullDetect";
import { BulldWall } from "./until/BulldWall";
import { KeyDown, KeyUp } from "./until/Movement";
import { KeyDown2, KeyUp2 } from "./until/Movement2";

export const Tank = () => {
    const { player, player2, map, bull, bull2, constant, brick } = data;
    const canvasRef = useRef(null);
    const bulls = useRef([]);
    const bulls2 = useRef([]);
    const bricks = useRef([
        { x: 240, y: 90, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 360, y: 90, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 210, y: 180, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 240, y: 210, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 270, y: 210, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 300, y: 210, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 330, y: 210, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 360, y: 210, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
        { x: 390, y: 180, width: brick.width, height: brick.height, image: brick.image, quality: brick.quality },
    ]);
    // const [bullet, setBullet] = useState([]);
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
            Background(ctx, map, constant.flex);

            if (bricks.current.length) {
                bricks.current.map((brick) => {
                    BrickCollision(player, brick)
                    BrickCollision(player2, brick)
                    Brick(ctx, brick, constant.flex);
                })
            }

            if (bulls.current.length) {
                bulls.current.map((bull, bindex) => {
                    let gone = BulldWall(bull, bindex, map);
                    if (gone !== null) {
                        bulls.current.splice(gone, 1);
                    }
                    bricks.current.map((brick, brindex) => {
                        let destroy = BullDetect(bull, bindex, brick, brindex, map)
                        if (destroy !== null) {
                            bulls.current.splice(destroy.indexb, 1)
                            if (brick.quality <= 0) {
                                bricks.current.splice(destroy.indexbr, 1)
                            }
                        }
                    })
                    Bull(ctx, bull, constant.flex);
                })
            }
            if (bulls2.current.length) {
                bulls2.current.map((bull, bindex) => {
                    let gone = BulldWall(bull, bindex, map);
                    if (gone !== null) {
                        bulls2.current.splice(gone, 1);
                    }
                    bricks.current.map((brick, brindex) => {
                        let destroy = BullDetect(bull, bindex, brick, brindex, map)
                        if (destroy !== null) {
                            bulls2.current.splice(destroy.indexb, 1)
                            if (brick.quality <= 0) {
                                bricks.current.splice(destroy.indexbr, 1)
                            }
                        }
                    })
                    Bull(ctx, bull, constant.flex);
                })
            }

            Player(ctx, player, constant.flex);
            Player(ctx, player2, constant.flex);

            move();

        }
        render();
    }, []);

    const createBulls = () => {
        if (player.isBull) {
            player.isBull = false;
            // setBullet((bullet) => [...bullet, { x: player.y + player.height / 2, y: player.x + player.width / 2, width: bull.width, height: bull.height, color: 'yellow' }])
            bulls.current.push({ x: player.x + player.width / 2 - bull.width / 2, y: player.y + player.height / 2 - bull.height / 2, width: bull.width, height: bull.height, color: bull.color, spd: bull.spd, vector: player.last.up ? 'up' : player.last.down ? 'down' : player.last.left ? 'left' : 'right' });
            setTimeout(() => {
                player.isBull = true;
            }, player.atkspd);
        }
    }
    const createBulls2 = () => {
        if (player2.isBull) {
            player2.isBull = false;
            // setBullet((bullet) => [...bullet, { x: player.y + player.height / 2, y: player.x + player.width / 2, width: bull.width, height: bull.height, color: 'yellow' }])
            bulls2.current.push({ x: player2.x + player2.width / 2 - bull2.width / 2, y: player2.y + player2.height / 2 - bull2.height / 2, width: bull2.width, height: bull2.height, color: bull2.color, spd: bull2.spd, vector: player2.last.up ? 'up' : player2.last.down ? 'down' : player2.last.left ? 'left' : 'right' });
            setTimeout(() => {
                player2.isBull = true;
            }, player2.atkspd);
        }
    }

    const move = () => {
        if (player.shot) {
            createBulls();
        }
        if (player2.shot) {
            createBulls2();
        }
        if (player.last.up || player.last.down || player.last.left || player.last.right) {
            WallCollision(player, map)
        }
        if (player2.last.up || player2.last.down || player2.last.left || player2.last.right) {
            WallCollision(player2, map)
        }
    }

    onkeydown = ({ keyCode }) => {
        KeyDown(keyCode, player, bull)
        KeyDown2(keyCode, player2, bull)
    }

    onkeyup = ({ keyCode }) => {
        KeyUp(keyCode, player)
        KeyUp2(keyCode, player2)
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