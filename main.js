document.querySelector('form').addEventListener('submit', calculateAge);

function calculateAge(event) {
event.preventDefault(); 


    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const birthDay = parseInt(dayInput.value);
    const birthMonth = parseInt(monthInput.value);
    const birthYear = parseInt(yearInput.value);

    if (!birthDay || birthDay > 31) {
    alert('حط التاريخ صح يا عم انت');
    return;
}
    if (!birthMonth || birthMonth > 12) {
    alert('حط الشهر صح يا عم انت');
    return;
}
    if (!birthYear) {
    alert('حط السنه صح يا عم انت');
    return;
}


    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();


    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;



    document.getElementById('YY').textContent = years;
    document.getElementById('MM').textContent = months;
    document.getElementById('DD').textContent = days;
}