let settings, settingsBtn, imageSection, eventName, eventDay, eventMonth, eventYear, eventImg,
    daysCount, hoursCount, minutesCount, secondsCount, saveBtn, eventSpan

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    settings = document.querySelector('.settings');
    settingsBtn = document.querySelector('.settings-btn');
    imageSection = document.querySelector('.image-section');
    eventName = document.querySelector('#event-name');
    eventDay = document.querySelector('#event-day');
    eventMonth = document.querySelector('#event-month');
    eventYear = document.querySelector('#event-year');
    eventImg = document.querySelector('#event-image');
    daysCount = document.querySelector('.days-count');
    hoursCount = document.querySelector('.hours-count');
    minutesCount = document.querySelector('.minutes-count');
    secondsCount = document.querySelector('.seconds-count');
    saveBtn = document.querySelector('.save');
    eventSpan = document.querySelector('.event');
}

const prepareDOMEvents = () => {
    settingsBtn.addEventListener('click', () => {
        settings.classList.toggle('active');
    })
}

main()


