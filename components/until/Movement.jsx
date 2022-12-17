import tankUp from '../../images/greenTank/tankUp.png'
import tankDown from '../../images/greenTank/tankDown.png'
import tankLeft from '../../images/greenTank/tankLeft.png'
import tankRight from '../../images/greenTank/tankRight.png'
export const KeyDown = (code, player, bull) => {
    switch (code) {
        case 32:
            player.shot = true
            break
        case 87:
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
        case 83:
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
        case 65:
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
        case 68:
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
export const KeyUp = (code, player) => {
    switch (code) {
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