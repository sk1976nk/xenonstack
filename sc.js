function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can add your own validation logic here
    if (username === 'example' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
