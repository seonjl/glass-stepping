import { html, css, LitElement, property } from 'lit-element'
import { GlassElement } from './GlassElement'

export class GlassPairElement extends LitElement {
  static styles = css`
    div {
      display: flex;
      margin-top: 20px;

    }
    .left {
      margin-right: 10px;
    }
    .right {
      margin-left:  10px;
    }
  `;

  @property({ type: Number }) index;
  @property({ }) glasses;

  constructor (index: number) {
    super()
    const glasss = [new GlassElement('hard'), new GlassElement('normal')]
    const random = Math.random() < 0.5 ? 0 : 1
    this.index = index
    this.glasses = [glasss[random], glasss[(random + 1) % 2]]
  }

  takeStepLeft () {
    this.glasses[0].takeStep()
  }

  takeStepRight () {
    this.glasses[1].takeStep()
  }

  render () {
    return html`
    <div>
      ${this.index}
      <div class=left>${this.glasses[0]}</div>
      <div class=right>${this.glasses[1]}</div>
    </div>
    `
  }
}
