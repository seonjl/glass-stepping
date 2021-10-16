class Player {
    status: 'alive' | 'dead' = 'alive'
}

type glassStatus = 'known' | 'unknown'
type glassType = 'hard' | 'normal'
class Glass {
    private _status: glassStatus = 'unknown'
    private _type: glassType

    constructor (type: glassType) {
      this._type = type
    }

    isHardGlass () : boolean {
      this._status = 'known'
      return this._type === 'hard'
    }

    getStatus () : glassStatus {
      return this._status
    }

    getType (): glassType {
      return this._type
    }
}

class GlassPair {
    public _leftGlass
    public _rightGlass

    constructor () {
      const glasss = [new Glass('hard'), new Glass('normal')]
      const random = Math.random() % 2
      this._leftGlass = glasss[random]
      this._rightGlass = glasss[(random + 1) % 2]
    }
}

class Bridge {
    glassPairList: Array<GlassPair> = new Array(16).fill(new GlassPair())
}

class Game {
    bridge: Bridge = new Bridge()
    playerList: Array<Player> = new Array(16).fill(new Player())
    _remainAlivePlayer: number = 16
}
