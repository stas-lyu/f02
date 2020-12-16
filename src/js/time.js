function getTime() {
    const date = new Date();
    return format(date.getHours()) + ':' + format(date.getMinutes()) + ':' + format(date.getSeconds());
}

function format(time) {
    return +time < 10 ? '0' + time : time
}

function showTime() {
    document.querySelector('#time').innerHTML = getTime();
    setTimeout(() => {
        showTime();
    }, 1000);
}

showTime();