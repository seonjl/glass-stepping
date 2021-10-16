"use strict";
class Player {
    constructor() {
        this.status = 'alive';
    }
}
class Glass {
    constructor(type) {
        this._status = 'unknown';
        this._type = type;
    }
    isHardGlass() {
        this._status = 'known';
        return this._type === 'hard';
    }
    getStatus() {
        return this._status;
    }
    getType() {
        return this._type;
    }
}
class GlassPair {
    constructor() {
        const glasss = [new Glass('hard'), new Glass('normal')];
        const random = Math.random() % 2;
        this._leftGlass = glasss[random];
        this._rightGlass = glasss[(random + 1) % 2];
    }
}
class Bridge {
    constructor() {
        this.glassPairList = new Array(16).fill(new GlassPair());
    }
}
class Game {
    constructor() {
        this.bridge = new Bridge();
        this.playerList = new Array(16).fill(new Player());
        this._remainAlivePlayer = 16;
    }
}
//# sourceMappingURL=game.js.map