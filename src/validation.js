function Validation() {

}
Validation.prototype.authenticateUser = function(user, password) {
  if (user === 'makers' && password === 'password') {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  authenticateUser: function(user, password) {
    if (user === 'makers' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }

};
