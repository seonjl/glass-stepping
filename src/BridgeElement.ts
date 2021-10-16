import { html, css, LitElement, property } from 'lit-element'
import { GlassPairElement } from './GlassPairElement'

export class BridgeElement extends LitElement {
  static styles = css`
    p {
    }
  `;

  @property({ }) glassPairList: GlassPairElement[]

  constructor () {
    super()
    this.glassPairList = new Array(16).fill(0).map((e, i) => new GlassPairElement(i))
  }

  render () {
    return html`<ul>
      ${this.glassPairList.map((i: unknown) => html`<li>${i}</li>`)}
    </ul>`
  }
}
