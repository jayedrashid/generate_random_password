var password = document.querySelector(".password");
    function genPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        document.querySelector(".password").value = password;

    }
    function copyPassword() {
  var copyText = document.querySelector(".password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
  
}

