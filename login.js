function login(page, args, cb) {
  console.log("Logging in with email: " + args[1] + " and password: " + args[2]);
  page.evaluate(function(params) {
    document.getElementById("ap_email").value = params.email;
    document.getElementById("ap_password").value = params.pass;
    document.getElementById("signInSubmit").click();
  }, {email: args[1], pass: args[2]});
}

exports.login = login
