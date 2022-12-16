export const BulldWall = (bull, bindex, map) => {
    if (bull.y > map.height || bull.y + bull.height < 0 || bull.x > map.width || bull.x + bull.width < 0) {
        console.log(bindex)
        return bindex
    }
    return null
}