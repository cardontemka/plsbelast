export const BullDetect = (bull, indexb, brick, indexbr) => {
    if (bull.y <= brick.y + brick.height && bull.y + bull.height >= brick.y && bull.x <= brick.x + brick.width && bull.x + bull.width >= brick.x) {
        console.log(indexb)
        brick.quality--;
        return {indexb, indexbr}
    }
    return null
}