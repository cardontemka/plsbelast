export const Bull = (ctx, bull, flex) => {
    let data = new SingleBull(bull.x, bull.y, bull.width, bull.height, bull.image, flex);
}
class SingleBull {
    constructor(x, y, width, height, color, flex) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.flex = flex;
    }
    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}