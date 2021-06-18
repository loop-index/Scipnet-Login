var root = null;
var useHash = true; // Defaults to: false
var hash = "#c"; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

let $app = document.getElementById("app");

window.router
    .on("/login", function () {
        $app.innerHTML = "<login-panel></login-panel>";
    })
    .resolve();

window.router
    .on("/signup", function () {
        $app.innerHTML = "<signup-panel></signup-panel>";
    })
    .resolve();

window.router
    .on("/main", function () {
        console.log('a');
        $app.innerHTML = "<main-panel></main-panel>";
    })
    .resolve();

// xử lý trường hợp người dùng truy cập vào route không tồn tại
window.router.notFound(function () {
    $app.innerHTML = "không tìm thấy trang này";
});