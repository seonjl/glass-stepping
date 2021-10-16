import { html, css, LitElement, property } from 'lit-element'
import { BridgeElement } from './BridgeElement'
import { HumanElement } from './HumanElement'

export class GameElement extends LitElement {
  static styles = css`
    .container {
      display: flex;
    }
    .console-container {
       text-align: center;
    }
    .human-container {
      display: flexbox;
      margin-top: 20px;
    }
  `;

  @property({ }) Bridge: BridgeElement = new BridgeElement()
  @property({ }) HumanList: HumanElement[]
  @property({ }) currentIndex: number = 0
  @property({ }) dieCount: number = 0

  constructor () {
    super()
    this.HumanList = new Array(16).fill(0).map(e => new HumanElement())
  }

  step (_direction: string): void {
    const direction = _direction === 'left' ? 0 : 1
    const curIndex = this.currentIndex
    const nextGlass = this.Bridge.glassPairList[curIndex].glasses[direction]

    if (curIndex > 0) this.Bridge.glassPairList[curIndex - 1].glasses.map(glass => glass.playerOff())
    nextGlass.takeStep()
    const isHardGlass = nextGlass.isHard()
    if (!isHardGlass) {
      this.dieCount++
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }
  }

  stepLeft () {
    this.step('left')
  }

  stepRight () {
    this.step('right')
  }

  render () {
    return html`
    <div class=container>

      <div>
        ${this.Bridge}
      </div>
      <div class=console-container>
        <div class=button-container>

          dieCount : ${this.dieCount} <br>
          currentIndex : ${this.currentIndex} <br>
          <button @click=${this.stepLeft}> Left </button>
          <button @click=${this.stepRight}>Right</button>
        </div>
      </div>
    </div>

    `
  }
}
