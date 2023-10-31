import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      link: { type: String },
      type: { type: String, reflect: true },
      active: { type: Boolean, reflect: true },
      outlined: { type: Boolean,},
      filled: { type: Boolean,},
    }
  }

  static styles = css`

    :host {
      display: block;
      margin: 12px;
      --polaris-chip-psu-white: #ffffff;
      --polaris-chip-psu-gray:#E4E5E7;
      --polaris-chip-psu-darkgray: #4f627C;
      --polaris-chip-psu-blue: #1E407C;
      --polaris-chip-psu-darkblue: #001E44;
      --polaris-chip-psu-lightblue:#96BEE6;
      --polaris-chip-psu-black: #000000;
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-style: italic;
      font-weight: 700;
      letter-spacing: .025rem;
      margin-left: 32px;
      border-radius: 4px;
      display: inline-flex;
    }

    :host([active][type="primary"][outlined]) a {
      border: 2px solid var(--polaris-chip-psu-blue);
      background-color: var(--polaris-chip-psu-white);
      color: var(--polaris-chip-psu-blue);
      padding: 12px 32px;
      transition: 0.1s;
    }

    :host([active][type="primary"][outlined]) a:focus,
    :host([active][type="primary"][outlined]) a:hover {
      border: 2px solid var(--polaris-chip-psu-blue);
      background-color: var(--polaris-chip-psu-blue);
      color: var(--polaris-chip-psu-white);
      padding: 12px 32px;
    }

    :host([active][type="primary"][filled]) a {
      border: 2px solid var(--polaris-chip-psu-blue);
      background-color: var(--polaris-chip-psu-blue);
      color: var(--polaris-chip-psu-white);
      padding: 12px 32px;
      transition: 0.1s;
    }

    :host([active][type="primary"][filled]) a:focus,
    :host([active][type="primary"][filled]) a:hover {
      border: 2px solid var(--polaris-chip-psu-blue);
      background-color: var(--polaris-chip-psu-white);
      color: var(--polaris-chip-psu-blue);
      padding: 12px 32px;
    }

    :host([active][type="tinted"]) a {
      border: 2px solid var(--polaris-chip-psu-white);
      background-color: var(--polaris-chip-psu-darkgray);
      color: var(--polaris-chip-psu-lightblue);
      padding: 12px 32px;
    }

    :host([active][type="tinted"]) a:focus,
    :host([active][type="tinted"]) a:hover {
      border: 2px solid var(--polaris-chip-psu-white);
      background-color: var(--polaris-chip-psu-lightblue);
      color: var(--polaris-chip-psu-darkgray);
      padding: 12px 32px;
    }
   
    :host([active][type="light"][outlined]) a {
      border: 2px solid var(--polaris-chip-psu-white);
      background-color: var(--polaris-chip-psu-darkblue);
      color: var(--polaris-chip-psu-lightblue);
      padding: 12px 32px;
    }

    :host([active][type="light"][outlined]) a:focus,
    :host([active][type="light"][outlined]) a:hover {
      border: 2px solid var(--polaris-chip-psu-lightblue);
      background-color: var(--polaris-chip-psu-lightblue);
      color: var(--polaris-chip-psu-darkblue);
      padding: 12px 32px;
    }

    :host([active][type="light"][filled]) a {
      border: 2px solid var(--polaris-chip-psu-lightblue);
      background-color: var(--polaris-chip-psu-lightblue);
      color: var(--polaris-chip-psu-darkblue);
      padding: 12px 32px;
    }

    :host([active][type="light"][filled]) a:focus,
    :host([active][type="light"][filled]) a:hover {
      border: 2px solid var(--polaris-chip-psu-white);
      background-color: var(--polaris-chip-psu-darkblue);
      color: var(--polaris-chip-psu-lightblue);
      padding: 12px 32px;
    }
  `;

  constructor() {
    super();
    this.text = 'Subscribe';
    this.link = 'https://psu.edu';
    this.active = 'tinted';
  }

  render() {
    return html`
      <a href="${this.link}"><slot>${this.text}</slot></a>
    `;
  }
}
  
 
