function previousDay(year, month, day) {
    const date = new Date(year, month, day);
    date.setDate(day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
