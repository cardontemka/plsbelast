export const Background = (ctx, obj, flex) => {
    let data = new Square(obj.width, obj.height, obj.image, flex);
    data.draw(ctx);
}
class Square {
    constructor(width, height, image, flex) {
        this.width = width;
        this.height = height;
        this.image = new Image;
        this.image.src = image;
        this.flex = flex;
    }
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width * this.flex, this.height * this.flex)
    }
}