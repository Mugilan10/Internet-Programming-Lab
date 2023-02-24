function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    if (username == "") {
      alert("Please enter your username.");
      return false;
    }
  
    if (password == "") {
      alert("Please enter your password.");
      return false;
    }

    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
    if (fav_language == "") {
      alert("Please select your favorite programming language.");
      return false;
    }
  
    // Check if at least one vehicle is selected
    if (!vehicle1 && !vehicle2 && !vehicle3) {
      alert("Please select at least one vehicle.");
      return false;
    }
  
    // Check if date inputs are valid
    var maxDate = new Date("1979-12-31");
    var minDate = new Date("2000-01-02");
    var inputMaxDate = new Date(datemax);
    var inputMinDate = new Date(datemin);
    if (inputMaxDate > maxDate) {
      alert("Please enter a date before 1980-01-01.");
      return false;
    }
    if (inputMinDate < minDate) {
      alert("Please enter a date after 2000-01-01.");
      return false;
    }
  
    // Check if birthday input is valid
    var inputBirthday = new Date(birthdaytime);
    if (isNaN(inputBirthday)) {
      alert("Please enter a valid birthday.");
      return false;
    }
  
    return true;
  }
