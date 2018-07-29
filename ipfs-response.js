import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `ipfs-response`
 * A web component that records the response time from multiple IPFS endpoints
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IpfsResponse extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      endPoints: {
        type: Array,
        value: ['https://ipfs.io/ipfs/', 'https://ipfs.infura.io'],
      },
      timeOut: {
        type: Number,
        value: 3000
      },
      retryAttempts: {
        type: Number,
        value: 10
      },
      fileHash: {
        type: String,
        value: 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/I/m/Alan_Schaaf.jpg'
      },
      delayLower: {
        type: Number,
        value: 10
      },
      delayUpper: {
        type: Number,
        value: 1000
      },
    };
  }

} window.customElements.define('ipfs-response', IpfsResponse);
