const btn1 = document.querySelector('.conv')
const btn2 = document.querySelector('.change')
const btn3 = document.querySelector('.reset')
const span1 = document.querySelector('.one')
const span2 = document.querySelector('.two')
const input = document.querySelector('#converter')
const sourceUnits = new Map([
    ['°C', function (temp) {
        return temp * 9 /5 + 32
    }],
    ['°F', function (temp) {
        return (temp - 32) * 5/9
    }]
])

const modifySpanText = () => {
    if (span1.innerText === '°C') {
        span1.innerText = '°F'
    } else if (span1.innerText === '°F') {
        span1.innerText = '°C'
    }
    if (span2.innerText === '°C') {
        span2.innerText = '°F'
    } else if (span2.innerText === '°F') {
        span2.innerText = '°C'
    }
}

const convertTemperature = () => {
    const spanValue = span1.innerText
    const inputValue = input.value

    try {
        if (inputValue) {
            if (sourceUnits.has(spanValue)) {
                const calculateTemp = sourceUnits.get(spanValue)
                input.value = calculateTemp(parseInt(inputValue))
            }
        }
    } catch(err) {
        console.error(err.message)
    }
}

btn1.addEventListener('click', convertTemperature)
btn2.addEventListener('click', modifySpanText)
btn3.addEventListener('click', () => {
    input.value = null
})
