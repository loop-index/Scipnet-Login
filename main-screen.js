import database from './Database.js'
import Acc from './Acc.js'
import {login} from './firestore.js'

class MainPanel extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
  }
  static get observedAttributes() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  connectedCallback() {
    const template = `
        <link rel="stylesheet" href="style.css">
        <div class="screen">
          <h1> Đăng nhập thành công! </h1>
          <button id="return"> Quay lại đăng nhập </button>
        </div>
        `;
    this.shadow.innerHTML = template;

    this.shadow.getElementById("return").addEventListener('click', () => {
        // this.shadow.getElementById("login-alert").innerText = "";
        // this.style.display = "none";
        // document.querySelector("signup-panel").style.display = "block";
        router.navigate("/login");
    })

  }

}
// export module
window.customElements.define("main-panel", MainPanel);
