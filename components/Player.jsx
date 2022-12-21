export const Player = (ctx, obj, flex) => {
    let data = new Square(obj.x, obj.y, obj.width, obj.height, obj.image, flex);
    if (obj.moveHandler.up) {
        obj.y -= obj.spd
    } else if (obj.moveHandler.down) {
        obj.y += obj.spd
    } else if (obj.moveHandler.left) {
        obj.x -= obj.spd
    } else if (obj.moveHandler.right) {
        obj.x += obj.spd
    }
    data.draw(ctx);
}
class Square {
    constructor(x, y, width, height, image, flex) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image;
        this.image.src = image;
        this.flex = flex;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x * this.flex, this.y * this.flex, this.width * this.flex, this.height * this.flex)
    }
}