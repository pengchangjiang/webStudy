
const world = {
    'EPSG4490': { bounds: [-180, -90, 180, 90], base: 180, level: [1, 18] },
    'EPSG4326': { bounds: [-180, -90, 180, 90], base: 180, level: [1, 18] },
    'EPSG3857': {
        bounds: [-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892],
        base: 20037508.3427892, level: [1, 18]
    },
}
class WTMSCrawler {
    constructor(opt = { tileSize=256 }) {
        this.tileSize = opt.tileSize;

    }

    calResolution(pro) {
        let bb = world[pro];
        let resolution = [];
        for (let i = bb.level[0]; i < bb.level[1]; i++) {
            resolution.push(world[pro].base / (this.tileSize * Math.pow(2, i - 1)));
        }

    }
}