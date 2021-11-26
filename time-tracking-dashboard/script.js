const daily = document.querySelector('#dailyTrack');
const weekly = document.querySelector('#weeklyTrack');
const monthly = document.querySelector('#monthlyTrack');

const workCurrent = document.querySelector('.workCurrent');
const workPrevious = document.querySelector('.workPrevious');
const playCurrent = document.querySelector('.playCurrent');
const playPrevious = document.querySelector('.playPrevious');
const studyCurrent = document.querySelector('.studyCurrent');
const studyPrevious = document.querySelector('.studyPrevious');
const exerciseCurrent = document.querySelector('.exerciseCurrent');
const exercisePrevious = document.querySelector('.exercisePrevious');
const socialCurrent = document.querySelector('.socialCurrent');
const socialPrevious = document.querySelector('.socialPrevious');
const selfcareCurrent = document.querySelector('.selfcareCurrent');
const selfcarePrevious = document.querySelector('.selfcarePrevious');

daily.addEventListener('click', dailyHabits);

function dailyHabits() {
    daily.style.color = 'white';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    weekly.style.color = 'hsl(235, 45%, 61%)';

    workCurrent.textContent = '5hrs';
    workPrevious.textContent = 'Last week - 7hrs';

    playCurrent.textContent = '1hr';
    playPrevious.textContent = 'Last Week - 2hrs';

    studyCurrent.textContent = '0hrs';
    studyPrevious.textContent = 'Last Week - 1hr';

    exerciseCurrent.textContent = '1hr';
    exercisePrevious.textContent = 'Last Week - 1hr';

    socialCurrent.textContent = '1hr';
    socialPrevious.textContent = 'Last Week - 3hrs';

    selfcareCurrent.textContent = '0hrs';
    selfcarePrevious.textContent = 'Last Week - 1hr'
}

weekly.addEventListener('click', weeklyHabits);

function weeklyHabits() {
    weekly.style.color = 'white';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    daily.style.color = 'hsl(235, 45%, 61%)';

    workCurrent.textContent = '32hrs';
    workPrevious.textContent = 'Last week - 36hrs';

    playCurrent.textContent = '10hrs';
    playPrevious.textContent = 'Last Week - 8hrs';

    studyCurrent.textContent = '4hrs';
    studyPrevious.textContent = 'Last Week - 7hrs';

    exerciseCurrent.textContent = '4hrs';
    exercisePrevious.textContent = 'Last Week - 5hrs';

    socialCurrent.textContent = '5hrs';
    socialPrevious.textContent = 'Last Week - 10hrs';

    selfcareCurrent.textContent = '2hrs';
    selfcarePrevious.textContent = 'Last Week - 2hrs'
}

monthly.addEventListener('click', monthlyHabits);

function monthlyHabits() {
    monthly.style.color = 'white';
    weekly.style.color = 'hsl(235, 45%, 61%)';
    daily.style.color = 'hsl(235, 45%, 61%)';

    workCurrent.textContent = '103hrs';
    workPrevious.textContent = 'Last week - 128hrs';

    playCurrent.textContent = '23hrs';
    playPrevious.textContent = 'Last Week - 29hrs';

    studyCurrent.textContent = '13hrs';
    studyPrevious.textContent = 'Last Week - 19hrs';

    exerciseCurrent.textContent = '11hrs';
    exercisePrevious.textContent = 'Last Week - 18hrs';

    socialCurrent.textContent = '21hrs';
    socialPrevious.textContent = 'Last Week - 23hrs';

    selfcareCurrent.textContent = '7hrs';
    selfcarePrevious.textContent = 'Last Week - 11hrs'
}