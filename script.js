function updateTime() {
    const utcTimeElement = document.querySelector('.utc__time');
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}
window.onload = updateTime();
