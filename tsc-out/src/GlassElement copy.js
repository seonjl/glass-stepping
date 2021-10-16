import { __decorate } from "tslib";
import { html, LitElement, property } from 'lit-element';
import { GlassElement } from './GlassElement';
export class GlassPairElement extends LitElement {
    constructor(type) {
        super();
        const glasss = [new GlassElement('hard'), new GlassElement('normal')];
        const random = Math.random() % 2;
        this.leftGlass = glasss[random];
        this.rightGlass = glasss[(random + 1) % 2];
    }
    __increment() {
    }
    render() {
        return html `
      <glass-element></glass-element>
      <glass-element></glass-element>
    `;
    }
}
__decorate([
    property({ type: String })
], GlassPairElement.prototype, "leftGlass", void 0);
__decorate([
    property({ type: String })
], GlassPairElement.prototype, "rightGlass", void 0);
//# sourceMappingURL=GlassElement%20copy.js.map