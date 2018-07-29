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
        input {
        width: 100%;
        outline: none;
        height: 40px;
        border-radius: 2px;
        background: #F0F1F3;
        border: 1px solid #C9CCD0;
        border-radius: 4px;
        text-indent: 15px;
        font-size: 15px;
        margin-bottom:15px;
        margin-top:5px;
      }
      input:focus { 
        background-color: white;
      }
      .button{
        background-image: linear-gradient(-180deg, #FEFFFF 0%, #F3F4F5 100%);
        border: 1px solid #D2D3D5;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 13px;
        color: #585D6B;
        font-weight:600;
      }
      label {
        margin-bottom:10px;
      }
      </style>
      <template is="dom-if" if="{{debug}}">

        <label for="fileToFetch">File to Fetch: </label>
        <input type="text" id="fileToFetch" value="{{fileToFetch::input}}" >

        <label for="endPoints">Public IPFS End Points: </label>
        <input type="text" id="endPoints" value="{{endPoints::input}}" >

        <label for="timeOut">Timeout: </label>
        <input type="text" id="timeOut" value="{{timeOut::input}}" >

        <label for="retryAttempts">Retry Attempts: </label>
        <input type="text" id="retryAttempts" value="{{retryAttempts::input}}" >

        <label for="retryCount">Retry Count: </label>
        <input type="text" id="retryCount" value="{{retryCount::input}}" >

        <label for="delayLower">Delay Lower: </label>
        <input type="text" id="delayLower" value="{{delayLower::input}}" >

        <label for="delayUpper">Delay Upper: </label>
        <input type="text" id="delayUpper" value="{{delayUpper::input}}" >

        <label for="startTime">Start Time: </label>
        <input type="text" id="startTime" value="{{startTime::input}}" >

        <label for="response">Response: </label>
        <input type="text" id="response" value="{{response::input}}" >

        <label for="endTime">End Time: </label>
        <input type="text" id="endTime" value="{{endTime::input}}" >

        <label for="responseTime">Response Time: </label>
        <input type="text" id="responseTime" value="{{responseTime::input}}" >

        <input type="submit" value="Start" class="button" on-click="_launchTimer">
      </template>
      
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
      retryCount: {
        type: Number,
        value: 0
      },
      fileToFetch: {
        type: String,
        value: 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/I/m/Alan_Schaaf.jpg'
      },
      delayLower: {
        type: Number,
        value: 3000
      },
      delayUpper: {
        type: Number,
        value: 4000
      },
      response: {
        type: String,
        value: ''
      },
      debug: {
        type: Boolean,
        value: false
      },
      startTime: {
        type: Number,
      },
      endTime: {
        type: Number,
      },
      responseTime: {
        type: Number,
      },
    };
  }


  _launchTimer(){
    if (!this.startTime) this.startTime = performance.now();
    if(this.response === '' && this.retryCount < this.retryAttempts){
      this._randomDelay()
      .then((random) => {
        setTimeout(() => {
          this.retryCount++
          this._callIpfs()
          this._launchTimer()
        }, random);
      })
    }
  }

  _randomDelay(){
    return new Promise((resolve, reject) => {
      try {
        resolve(Math.floor(Math.random() * this.delayUpper) + this.delayLower );
      }
      catch(error) {
        reject(error);
      }
    })
  }

  _callIpfs(){
    return new Promise((resolve, reject) => {
      console.log('Calling IPFS')
    })
  }

} window.customElements.define('ipfs-response', IpfsResponse);
