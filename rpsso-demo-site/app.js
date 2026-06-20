(function () {
  const form = document.querySelector("#demo-form");
  const toast = document.querySelector("#toast");
  const refresh = document.querySelector(".refresh");
  const captchaCode = document.querySelector("#captcha-code");
  const demoLinks = document.querySelectorAll("[data-demo-link]");
  let toastTimer = 0;

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  function makeCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  refresh.addEventListener("click", () => {
    captchaCode.value = makeCode();
    captchaCode.textContent = captchaCode.value;
    showToast("已更新示範驗證碼。");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showToast("本頁為非官方訓練示範，不會送出或保存任何登入資料。");
  });

  demoLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("此連結僅供版面展示，未連接任何外部服務。");
    });
  });
})();
