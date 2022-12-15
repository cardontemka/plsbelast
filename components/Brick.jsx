export const Brick = (ctx, brick, flex) => {
    let data = new Singlebrick(brick.x, brick.y, brick.width, brick.height, brick.image, flex)
    data.draw(ctx);
}
class Singlebrick {
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
        ctx.drawImage(this.image ,this.x * this.flex, this.y * this.flex, this.width * this.flex, this.height * this.flex)
    }
}