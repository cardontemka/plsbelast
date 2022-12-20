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
import { BullDamage } from "./until/BullDamage";
import { BullRock } from "./until/BullRock";

var end = false
export const Tank = () => {
    const { player, player2, map, bull, constant, brick, rock } = data;
    const canvasRef = useRef(null);
    const players = useRef([player, player2]);
    const bulls = useRef([]);
    const bricks = useRef([
        { x: 240, y: 90, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 360, y: 90, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 210, y: 180, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 240, y: 210, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 270, y: 210, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 300, y: 210, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 330, y: 210, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 360, y: 210, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
        { x: 390, y: 180, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart },
    ]);
    const rocks = useRef([
        { x: 90, y: 30, width: rock.width, height: rock.height, image: rock.image },
        { x: 90, y: 60, width: rock.width, height: rock.height, image: rock.image },
        { x: 90, y: 90, width: rock.width, height: rock.height, image: rock.image },
        { x: 60, y: 90, width: rock.width, height: rock.height, image: rock.image },
        { x: 30, y: 90, width: rock.width, height: rock.height, image: rock.image },
        //bottom
        { x: 540, y: 300, width: rock.width, height: rock.height, image: rock.image },
        { x: 540, y: 270, width: rock.width, height: rock.height, image: rock.image },
        { x: 540, y: 240, width: rock.width, height: rock.height, image: rock.image },
        { x: 570, y: 240, width: rock.width, height: rock.height, image: rock.image },
        { x: 600, y: 240, width: rock.width, height: rock.height, image: rock.image },
    ]);
    var count = 0;

    // for (let i = 0; i < 12; i++) {
    //     for (let q = 0; q < 22; q++) {
    //         if (i > 0 && i < 11) {
    //             if (q == 0 || q == 21) {
    //                 bricks.current.push({ x: q * 30, y: i * 30, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart })
    //             }
    //         } else if (i == 0) {
    //             bricks.current.push({ x: q * 30, y: i * 30, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart })
    //         } else if (i == 11) {
    //             bricks.current.push({ x: q * 30, y: i * 30, width: brick.width, height: brick.height, image: brick.image, heart: brick.heart })
    //         }
    //     }
    // }

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

            // if (players.current.length == 1 && !end) {
            //     end = true
            //     alert('idk one player is win')
            // }

            players.current.map((player, pindex) => {
                if (bricks.current.length) {
                    bricks.current.map((brick) => {
                        BrickCollision(player, brick)
                        Brick(ctx, brick, constant.flex);
                    })
                }
                if (rocks.current.length) {
                    rocks.current.map((rock) => {
                        BrickCollision(player, rock)
                        Brick(ctx, rock, constant.flex);
                    })
                }

                if (bulls.current.length) {
                    bulls.current.map((bull, bindex) => {
                        let gone = BulldWall(bull, bindex, map);
                        let damage = BullDamage(bull, bindex, player, pindex, map)
                        if (gone !== null) {
                            bulls.current.splice(gone, 1);
                        }
                        if (damage !== null) {
                            bulls.current.splice(damage.bindex, 1)
                            if (player.heart <= 0) {
                                players.current.splice(pindex, 1)
                            }
                        }
                        bricks.current.map((brick, ondex) => {
                            let destroy = BullDetect(bull, bindex, brick, ondex, map)
                            if (destroy !== null) {
                                bulls.current.splice(destroy.bindex, 1)
                                if (brick.heart <= 0) {
                                    bricks.current.splice(destroy.ondex, 1)
                                }
                            }
                        })
                        rocks.current.map((rock, ondex) => {
                            let pop = BullRock(bull, bindex, rock, ondex, map)
                            if (pop !== null) {
                                bulls.current.splice(pop.bindex, 1)
                            }
                        })
                        Bull(ctx, bull, constant.flex);
                    })
                }

                Player(ctx, player, constant.flex);

                move(player, pindex);
            })

        }
        render();
    }, []);

    const createBulls = (player, bull, i) => {
        if (player.isBull) {
            player.isBull = false;
            bulls.current.push({ x: player.x + player.width / 2 - bull.width / 2, y: player.y + player.height / 2 - bull.height / 2, width: bull.width, height: bull.height, color: bull.color, spd: bull.spd, index: i, vector: player.last.up ? 'up' : player.last.down ? 'down' : player.last.left ? 'left' : 'right' });
            setTimeout(() => {
                player.isBull = true;
            }, player.atkspd);
        }
    }

    const move = (player, pindex) => {
        if (player.shot) {
            createBulls(player, bull, pindex);
        }
        if (player.last.up || player.last.down || player.last.left || player.last.right) {
            WallCollision(player, map)
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