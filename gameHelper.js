import tankUp from './images/tankUp.png'
import tankDown from './images/tankDown.png'
import tankLeft from './images/tankLeft.png'
import tankRight from './images/tankRight.png'
import brickImg from './images/brick.png'
export default {
    constant: {
        flex: (window.innerWidth - (window.innerWidth * 0.1)) / 660,
    },
    map: {
        width: 660,
        height: 360,
    },
    player: {
        x: 30,
        y: 30,
        spd: 2,
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
        }
    },
    bull: {
        width: 4,
        height: 3,
        spd: 6,
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