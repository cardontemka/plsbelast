export const Bull = (ctx, bull, flex) => {
    let data = new SingleBull(bull.x, bull.y, bull.width, bull.height, bull.color, flex)
    switch (bull.vector) {
        case 'up':
            bull.y -= bull.spd * flex;
            break;
        case 'down':
            bull.y += bull.spd * flex;
            break;
        case 'left':
            bull.x -= bull.spd * flex;
            break;
        case 'right':
            bull.x += bull.spd * flex;
            break;
    }
    data.draw(ctx);
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
        ctx.fillRect(this.x * this.flex, this.y * this.flex, this.width * this.flex, this.height * this.flex)
    }
}