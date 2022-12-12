export const Player = (ctx, obj, flex) => {
    let data = new Square(obj.x, obj.y, obj.width, obj.height, obj.image, flex);
    data.draw(ctx);
    // obj.x += obj.spd;
}
class Square {
    constructor(x, y, width, height, image, flex) {
        this.x = x * flex;
        this.y = y * flex;
        this.width = width * flex;
        this.height = height * flex;
        this.image = new Image;
        this.image.src = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}