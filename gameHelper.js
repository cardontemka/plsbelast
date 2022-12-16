import tankUp from './images/greenTank/tankUp.png'
import tankDown from './images/greenTank/tankDown.png'
import tankLeft from './images/greenTank/tankLeft.png'
import tankRight from './images/greenTank/tankRight.png'
import brickImg from './images/brick.png'
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
        image: tankRight,
        up: false,
        down: false,
        left: false,
        right: false,
        shot: false,
        isBull: true,
        atkspd: 300,
        last: {
            up: false,
            down: false,
            left: false,
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
        spd: 6,
        color: 'black'
    },
    brick: {
        x: null,
        y: null,
        width: 30,
        height: 30,
        image: brickImg,
        quality: 2,
    }
}