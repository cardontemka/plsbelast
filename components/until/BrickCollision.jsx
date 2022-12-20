export const BrickCollision = (player, brick) => {
    if (player.y <= brick.y + brick.height - 6 && player.y + player.height >= brick.y + 6 && player.x <= brick.x + brick.width - 6 && player.x + player.width >= brick.x + 6) {
        if (player.y == brick.y + brick.height - 6) {
            player.moveHandler.up = 0
            console.log('up')
        } else if (player.y + player.height == brick.y + 6) {
            player.moveHandler.down = 0
            console.log('down')
        } else if (player.x == brick.x + brick.width - 6) {
            player.moveHandler.left = 0
            console.log('left')
        } else if (player.x + player.width == brick.x + 6) {
            player.moveHandler.right = 0
            console.log('right')
        }
    }
}