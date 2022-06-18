const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const validatePassword = (password) => {

    if (password.length >= minValue) {
        if (letters.test(password) && numbers.test(password)) {
            if (special.test(password)){
                return 'Very good password!'
            }
            return 'Good password!'
        } else {
            return 'Password needs to contain both letters and numbers'
        }

    } else {
        return 'Password is too short'
    }
}