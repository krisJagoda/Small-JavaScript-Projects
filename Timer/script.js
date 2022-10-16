let settings, settingsBtn, imageSection, eventName, eventDay, eventMonth, eventYear, eventImg,
    daysCount, hoursCount, minutesCount, secondsCount, saveBtn, eventSpan, userTime

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
    saveBtn.addEventListener('click', update);
}

const setTime = () => {
    const currentTime = new Date().getTime()
    const time = userTime - currentTime
    const days = Math.floor(time / 1000 / 60 / 60 / 24);
    const hours = Math.floor(time / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const seconds = Math.floor(time / 1000) % 60;

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

const update = () => {
    eventSpan.textContent = eventName.value;
    userTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
    imageSection.style.backgroundImage = `url('${eventImg.value}')`;
    setInterval(setTime, 1000);
}

main()


