function  timeToWalk(numberOfSteps, strideLength, speedKMPH) {
    const distanceToUni = numberOfSteps * strideLength;
    const numberOfRests = Math.floor(distanceToUni / 500)
    const speedMPS = speedKMPH * 1000 / 60 / 60;
    const secondsToUni = distanceToUni / speedMPS + numberOfRests * 60;

    let hours   = Math.floor(secondsToUni / 3600);
    let minutes = Math.floor((secondsToUni - (hours * 3600)) / 60);
    let seconds = secondsToUni - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    console.log(`${hours}:${minutes}:${seconds}`)
}
 timeToWalk(4000, 0.60, 5)
