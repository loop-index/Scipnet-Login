import database from './Database.js'
import Acc from './Acc.js'
import {login} from './firestore.js'

class Login extends HTMLElement {

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
          <h1> Đăng nhập </h1>
          <p> Tài khoản  <input type="text" id="login-name" placeholder="Email..."> </input> </p>
          <p> Mật khẩu <input type="password" id="login-pass" placeholder="Mật khẩu..."> </input> </p> 
          <br>
          <br>
          <button id="submit"> Đăng nhập </button>
          <button id="new-signup"> Đăng kí </button>
          <br>
          <p id="login-alert"></p>
          <br>
        </div>
        `;
    this.shadow.innerHTML = template;

    this.$formLogin = this.shadow.querySelector("#submit");
    this.$formLogin.onclick = async (event) => {
        const user = this.shadow.getElementById("login-name").value;
        const pass = this.shadow.getElementById("login-pass").value;

        if (user == "" || pass == ""){
          this.shadow.getElementById("login-alert").innerText = "Vui lòng nhập hết dữ liệu!";
        }

        else {
          let check = await login(user, pass);
          console.log(check)
          if (check){
            this.shadow.getElementById("login-alert").innerText = "Đăng nhập thành công!";
            router.navigate("/main");
          } else {
            this.shadow.getElementById("login-alert").innerText = "Mật khẩu hoặc tài khoản không chính xác!";
          }
        }
    }

    this.shadow.getElementById("new-signup").addEventListener('click', () => {
        // this.shadow.getElementById("login-alert").innerText = "";
        // this.style.display = "none";
        // document.querySelector("signup-panel").style.display = "block";
        router.navigate("/signup");
    })

  }

}
// export module
window.customElements.define("login-panel", Login);
