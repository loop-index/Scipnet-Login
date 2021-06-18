import database from './Database.js'
import Acc from './Acc.js'
import {addUser, validateEmail} from './firestore.js'

class Signup extends HTMLElement {
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
          <h1> Đăng kí </h1>
          <p> Địa chỉ email <input type="text" id="signup-email" placeholder="Email..."> </input> </p>
          <p> Tài khoản  <input type="text" id="signup-name" placeholder="Tên người dùng..."> </input> </p>
          <p> Mật khẩu <input type="password" id="signup-pass" placeholder="Mật khẩu..."> </input> </p> 
          <br>
          <button id="signup-submit"> Đăng kí </button>
          <button id="back-login"> Đăng nhập </button>
          <br>
          <p id="signup-alert"></p>
          <br>
        </div>
        `;
    this.shadow.innerHTML = template;
    // this.style.display = "none";
    this.shadow.getElementById("back-login").addEventListener('click', () => {
        // this.shadow.getElementById("signup-alert").innerText = "";
        // this.style.display = "none";
        // document.querySelector("login-panel").style.display = "block";
        router.navigate("/login");
    })


    this.shadow.getElementById("signup-submit").addEventListener('click', () => {
        const email = this.shadow.getElementById("signup-email").value;
        const user = this.shadow.getElementById("signup-name").value;
        const pass = this.shadow.getElementById("signup-pass").value;

        if (email == "" || user == "" || pass == ""){
          this.shadow.getElementById("signup-alert").innerText = "Vui lòng nhập hết dữ liệu!";
        }

        else {
          if (validateEmail(email)){
            // database.push(new Acc(email, user, pass));
            addUser(new Acc(email, user, pass));
            this.shadow.getElementById("signup-alert").innerText = "Đăng kí thành công!";
          } else {
            this.shadow.getElementById("signup-alert").innerText = "Email không hợp lệ!";
          }


          // const checkMail = database.find(i => i.email == email);
          // const checkName = database.find(i => i.name == user);

          // if (checkMail) {
          //   this.shadow.getElementById("signup-alert").innerText = "Email đã được sử dụng!";
          // } else if (checkName) {
          //   this.shadow.getElementById("signup-alert").innerText = "Tên đăng nhập đã tồn tại!";
          // } else {
          // database.push(new Acc(email, user, pass));
          //   addUser(new Acc(email, user, pass));
          //   this.shadow.getElementById("signup-alert").innerText = "Đăng kí thành công!";
          // }
        }
    })

  }

}
// export module
window.customElements.define("signup-panel", Signup);
