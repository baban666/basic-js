
// transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
//
// transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.


module.exports = function transform(arr) {
    let result = [];
    let deleteNextFlag = false;
    let addNextFlag = false;

    if(arr.length === 0 ){
        return result = [];
    }

    if(Array.isArray(arr) === false){
       throw new Error();
    }

    const discardNext = () => {
        (!deleteNextFlag) ? deleteNextFlag = true : deleteNextFlag
    };

    const discardPrev = () => {
        result.pop()
    };

    const doubleNext = () => {
        (!addNextFlag) ? addNextFlag = true : addNextFlag
    };

    const doublePrev = (item, i, array) => {

        if(array[i-1] !== undefined){
            result.push(array[i-1]);
        }else {
            return;
        }

    };

    const defaultAction = (item) => {
        if (deleteNextFlag){
            deleteNextFlag = false;
            return;
        }

        if (addNextFlag){
            addNextFlag = false;
            result.push(item);
        }
            result.push(item);
    };


    arr.forEach((item, i, array) => {
        switch(item) {
            case '--discard-next':
                discardNext();
                break;
            case '--discard-prev':
                discardPrev();
                break;
            case '--double-next':
                doubleNext();
                break;
            case '--double-prev':
                doublePrev(item, i, array);
                break;
            default:
                defaultAction(item)
        }
    });
    return result;
};
