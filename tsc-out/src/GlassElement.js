import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
export class GlassElement extends LitElement {
    constructor(type) {
        super();
        this.status = 'unknown';
        this.isPlayerOn = false;
        this.type = type;
    }
    static get styles() {
        return css `
      #box {
        width: 64px;
        height: 64px;
        padding: 25px;
        position: relative;
      }
      .broken {
        background-color: red;
      }
      .unknown {
        background-color: blue;
      }
      #player {

        position: absolute;
        width: 16px;
        height: 16px;
        background-color: black;
        border:3px solid white;
      }
  `;
    }
    takeStep() {
        this.isPlayerOn = true;
        if (this.type !== 'hard') {
            this.status = 'broken';
            this.isPlayerOn = false;
        }
    }
    playerOn() {
        this.isPlayerOn = true;
    }
    playerOff() {
        this.isPlayerOn = false;
    }
    isHard() {
        return this.type === 'hard';
    }
    render() {
        return html `
    <div>
      ${this.isPlayerOn
            ? html `
          ${this.status === 'broken'
                ? html `
            <div id="box" class="broken">${this.status}
              <div id=player>PLX</div>
            </div>`
                : html `
            <div id="box" class=unknown>${this.status}
              <div id=player>PLX</div>
            </div>`}`
            : html `
          ${this.status === 'broken'
                ? html `<div id="box" class="broken">${this.status}</div>`
                : html `<div id="box" class=unknown>${this.status}</div>`}`}
    </div>
    `;
    }
}
__decorate([
    property({ type: String })
], GlassElement.prototype, "status", void 0);
__decorate([
    property({ type: String })
], GlassElement.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], GlassElement.prototype, "isPlayerOn", void 0);
//# sourceMappingURL=GlassElement.js.map