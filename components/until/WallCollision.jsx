export const WallCollision = (player, map) => {
    if (player.up) {
        if (player.y >= false) {
            player.moveHandler.up = true
            player.moveHandler.down = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        } else {
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        }
    } else if (player.down) {
        if (player.y + player.height <= map.height) {
            player.moveHandler.down = true
            player.moveHandler.up = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        } else {
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        }
    } else if (player.left) {
        if (player.x >= false) {
            player.moveHandler.left = true
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.right = false
        } else {
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        }
    } else if (player.right) {
        if (player.x + player.width <= map.width) {
            player.moveHandler.right = true
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.left = false
        } else {
            player.moveHandler.up = false
            player.moveHandler.down = false
            player.moveHandler.left = false
            player.moveHandler.right = false
        }
    } else {
        player.moveHandler.up = false
        player.moveHandler.down = false
        player.moveHandler.left = false
        player.moveHandler.right = false
    }
}