setInterval( () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const hourRotate = hours*30 + minutes/2;
    const minutesRotate = minutes*6;
    const secondsRotate = seconds*6;
    const h = document.querySelector('.hours');
    const m = document.querySelector('.minutes');
    const s = document.querySelector('.seconds');

    h.style.transform = `rotate(${hourRotate}deg)`
    m.style.transform = `rotate(${minutesRotate}deg)`
    s.style.transform = `rotate(${secondsRotate}deg)`

}, 1000)
