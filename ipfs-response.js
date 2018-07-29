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
      prop1: {
        type: String,
        value: 'ipfs-response',
      },
    };
  }
} window.customElements.define('ipfs-response', IpfsResponse);
