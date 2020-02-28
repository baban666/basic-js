module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let result = {
        turns: '',
        seconds: ''
    };
    let turnsSpeedInHour = turnsSpeed / 3600;

    const getDating = (disksNumber) => {
        return (turnsSpeedInHour) => {
            return result = {
                turns: Math.pow(2, disksNumber),
                seconds: (Math.pow(2, disksNumber)) / turnsSpeedInHour
            }
        }
    };

   return  getDating(disksNumber)(turnsSpeedInHour)
};
