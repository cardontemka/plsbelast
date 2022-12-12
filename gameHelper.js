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
    }
    // map: {
    //     width: window.innerWidth * 0.9,
    //     heigh: window.innerWidth * 0.5,
    // },
    // player: {
    //     x: 20,
    //     y: 20,
    //     spd: window.innerWidth * 0.003,
    //     width: window.innerWidth * 0.03,
    //     height: window.innerHeight * 0.03,
    //     color: 'blue',
    // }
}