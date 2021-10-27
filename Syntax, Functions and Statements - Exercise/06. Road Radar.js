// •	On the motorway the limit is 130 km/h
// •	On the interstate the limit is 90 km/h
// •	In the city the limit is 50 km/h
// •	Within a residential area the limit is 20 km/h

function speedRadar(speed, area) {
    let speedLimit = 0
    let warning = ""


    if (area === "motorway") {speedLimit  = 130;}
    if (area === "interstate") {speedLimit   = 90;}
    if (area === "city") {speedLimit   = 50;}
    if (area === "residential") {speedLimit   = 20;}
    let overTheSpeedLimit = parseInt(speed) - speedLimit


    //     For speeding up to 20 km/h over the limit, the status should be speeding.
    //     For speeding up to 40 km/h over the limit, the status should be excessive speeding.
    //     For anything else, status should be reckless driving.


    if (overTheSpeedLimit <= 0) {warning += `Driving ${speed} km/h in a ${speedLimit} zone`}
    else if (overTheSpeedLimit <= 20 && overTheSpeedLimit > 0) {warning += `The speed is ${overTheSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`}
    else if (overTheSpeedLimit <= 40 && overTheSpeedLimit > 20) {warning += `The speed is ${overTheSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`}
    else if (overTheSpeedLimit > 40) {warning += `The speed is ${overTheSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`}



    console.log(warning)
}

speedRadar(40, "city")
speedRadar("40", 'city')
speedRadar("21", 'residential')