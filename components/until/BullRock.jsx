export const BullRock = (bull, bindex, obj, ondex) => {
    if (bull.y <= obj.y + obj.height && bull.y + bull.height >= obj.y && bull.x <= obj.x + obj.width && bull.x + bull.width >= obj.x) {
        return { bindex, ondex }
    }
    return null
}