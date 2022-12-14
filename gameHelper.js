import playerTank from './images/ptank.png'
export default {
    constant: {
        flex: (window.innerWidth - (window.innerWidth * 0.1)) / 640,
    },
    map: {
        width: 640,
        heigh: 360,
    },
    player: {
        x: 30,
        y: 30,
        spd: 2,
        width: 30,
        height: 30,
        image: playerTank,
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
        width: 5,
        height: 4,
        spd: 3,
    }
}