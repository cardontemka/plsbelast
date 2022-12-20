import tankUpM from './images/greenTank/tankUp.png'
import tankDownM from './images/greenTank/tankDown.png'
import tankLeftM from './images/greenTank/tankLeft.png'
import tankRightM from './images/greenTank/tankRight.png'
import tankUpC from './images/cardonTank/tankUp.png'
import tankDownC from './images/cardonTank/tankDown.png'
import tankLeftC from './images/cardonTank/tankLeft.png'
import tankRightC from './images/cardonTank/tankRight.png'
import brickImg from './images/bricks/brick.png'
import rockImg from './images/bricks/rock.png'
import bg from './images/noteBg.jpeg'
export default {
    constant: {
        flex: (window.innerWidth - (window.innerWidth * 0.1)) / 660,
    },
    map: {
        width: 660,
        height: 360,
        image: bg,
    },
    player: {
        x: 30,
        y: 30,
        spd: 1.5,
        width: 30,
        height: 30,
        image: tankRightM,
        up: false,
        down: false,
        left: false,
        right: false,
        shot: false,
        isBull: true,
        atkspd: 300,
        heart: 5,
        last: {
            up: false,
            down: false,
            left: false,
            right: true,
        },
        moveHandler: {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    },
    player2: {
        x: 500,
        y: 300,
        spd: 2,
        width: 30,
        height: 30,
        image: tankLeftC,
        up: false,
        down: false,
        left: false,
        right: false,
        shot: false,
        isBull: true,
        atkspd: 300,
        heart: 5,
        last: {
            up: false,
            down: false,
            left: true,
            right: false,
        },
        moveHandler: {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    },
    bull: {
        width: 4,
        height: 3,
        spd: 4,
        color: 'gray',
    },
    brick: {
        width: 30,
        height: 30,
        image: brickImg,
        heart: 2,
    },
    rock: {
        width: 30,
        height: 30,
        image: rockImg,
    },
}