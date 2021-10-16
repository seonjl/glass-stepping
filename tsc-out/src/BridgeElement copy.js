import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
import { GlassPairElement } from './GlassPairElement';
export class BridgeElement extends LitElement {
    constructor() {
        super();
        this.glassPairList = new Array(16).fill(0).map((e, i) => new GlassPairElement(i));
    }
    render() {
        return html `<ul>
    ${this.glassPairList.map((i) => html `<li>${i}</li>`)}
  </ul>`;
    }
}
BridgeElement.styles = css `
    p {
    }
  `;
__decorate([
    property({})
], BridgeElement.prototype, "glassPairList", void 0);
//# sourceMappingURL=BridgeElement%20copy.js.map