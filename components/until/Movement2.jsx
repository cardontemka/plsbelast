import tankUp from '../../images/cardonTank/tankUp.png'
import tankDown from '../../images/cardonTank/tankDown.png'
import tankLeft from '../../images/cardonTank/tankLeft.png'
import tankRight from '../../images/cardonTank/tankRight.png'
export const KeyDown2 = (code, player, bull) => {
    switch (code) {
        case 13:
            player.shot = true
            break
        case 38:
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
        case 40:
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
        case 37:
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
        case 39:
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
export const KeyUp2 = (code, player) => {
    switch (code) {
        case 13:
            player.shot = false
            break
        case 38:
            player.up = false
            break
        case 40:
            player.down = false
            break
        case 37:
            player.left = false
            break
        case 39:
            player.right = false
            break
    }
}