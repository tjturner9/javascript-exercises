const leapYears = function(year) {
    const isYearDivByFour = year % 4 === 0;
    const isYearCent = year % 100 === 0;
    const isYearFourHund = year % 400 === 0;

    if (isYearDivByFour && 
        (!isYearCent || isYearFourHund)
    ) {
        return true
    } else {
        return false
    }
}


// Do not edit below this line
module.exports = leapYears;
