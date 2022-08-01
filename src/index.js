module.exports = function reverse (number) {

    let textNumber = Math.abs(number).toString();
    let numberLength = textNumber.length;
    let reverseNumber = ''; 

    while (numberLength > 0) {
        numberLength--;
        reverseNumber = `${reverseNumber}${textNumber[numberLength]}`;
    }

    return +reverseNumber;
}
