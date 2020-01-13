

import { LitElement, html, customElement, property } from 'lit-element';
import axios, { AxiosResponse } from 'axios';


@customElement('main-element')
class MainElement extends LitElement {
  @property({ type: Object}) response: AxiosResponse;

  render() {
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }

  firstUpdated() {
    let base = 'https://dog.ceo/api/breeds/list/all'
    axios.get(base)
      .then(res => {
        this.response = res;
        console.log("res")
        console.log(res)
      })
  }
}