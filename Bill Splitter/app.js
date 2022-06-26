const amount = document.querySelector('#price')
const numOfPeople = document.querySelector('#people')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost-info')
const btn = document.querySelector('.count')

const showTheBill = val => {
    const span = cost.querySelector('span')
    cost.style.display = 'block'
    span.innerText = val
}

const splitTheBill = (amount, numOfPeople, tip) => {
    const tipVal = parseFloat(tip)

    error.textContent = null
    tipVal !== 0 ? showTheBill(amount / numOfPeople + (amount * tipVal) / numOfPeople) : showTheBill(amount / numOfPeople)
}

const checkIfAllFieldsFilled = () => {
    const amountVal = amount.value
    const numOfPeopleValue = numOfPeople.value
    const tipOptions = document.querySelectorAll('option')
    const tip = document.querySelector('#tip').value

    if (!amountVal || !numOfPeopleValue || tipOptions[ 0 ].selected) {
        error.textContent = 'Fill all fields, please!'
        return
    }
    if (amountVal < 0) {
        error.textContent = 'The amount cannot be less than 0.'
        cost.style.display = 'none'
        return
    }
    if (parseInt(numOfPeopleValue) === 0) {
        error.textContent = 'The number of people cannot be 0.'
        cost.style.display = 'none'
        return
    }

    error.textContent = null
    splitTheBill(amountVal, numOfPeopleValue, tip)
}

btn.addEventListener('click', checkIfAllFieldsFilled)