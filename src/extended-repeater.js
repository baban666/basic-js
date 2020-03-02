// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
// =>'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'


module.exports = function repeater(str, options) {
    let result = '';
    let {
        repeatTimes,
        separator = '+',
        addition,
        additionRepeatTimes,
        additionSeparator = '|' } = options;


    if(repeatTimes === undefined && additionRepeatTimes === undefined){

        return result = `${str}${addition}`;
    }

    const getAdditionalString = (addition, additionRepeatTimes, additionSeparator) => {

        let AdditionalString = '';
        while (additionRepeatTimes--){
            AdditionalString += `${addition}${(additionRepeatTimes == 0) ? '' : additionSeparator}`;
        }
        return AdditionalString;
    };

    const getString = (str, separator, repeatTimes) => {
        let finalString = '';
        while (repeatTimes--){
            finalString += `${str}${getAdditionalString(addition, additionRepeatTimes, additionSeparator)}${(repeatTimes == 0) ? '' : separator}`;
        }
        return finalString;
    };

    return getString(str, separator, repeatTimes);
};

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')