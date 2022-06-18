const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const validatePassword = (password) => {
    if (password) {
        if (password.length >= minValue) {
            if (letters.test(password) && numbers.test(password)) {
                if (special.test(password)) {
                    return 'Excellent password!'
                }
                return 'Good password!'
            } else {
                return 'Password needs to contain both letters and numbers'
            }

        } else {
            return 'Password is too short'
        }
    } else {
        return 'Password cannot be empty'
    }
}


pass.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        p.textContent = validatePassword(pass.value)
    }
})