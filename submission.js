let getDictionary = function (lang)
{
   
    let englishDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    let frenchDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    // Convert input to lowercase for case sensitivity
    let lowerLang = lang;
    if (typeof lang === "string") {
        lowerLang = lang.toLowerCase();
    }

    if (lowerLang === 'e' || lowerLang === 'english') {
        return englishDictionary;
    } else if (lowerLang === 'f' || lowerLang === 'french') {
        return frenchDictionary;
    }
};

let engTest = getDictionary('ENGLISH');
// "one"
console.log(engTest(1));
// "not included in dictionary"
console.log(engTest(4)); 

let frTest = getDictionary('f');
// "deux"
console.log(frTest(2)); 
// "not included in dictionary"
console.log(frTest(5)); 


let even_predicate = function (value)
{
    // null would coerce to 0 with Number(), so catch null and undefined explicitly
    if (value === null || value === undefined) {
        return false;
    }

    let num = Number(value);

    // Return false if NaN or if it's a non-integer (e.g., 1.1)
    if (isNaN(num) || num % 1 !== 0) {
        return false;
    }

    return num % 2 === 0;
};

let odd_predicate = function (value)
{
    if (value === null || value === undefined) {
        return false;
    }

    let num = Number(value);

    if (isNaN(num) || num % 1 !== 0) {
        return false;
    }

    // Checking if the integer is odd
    return num % 2 !== 0;
};

let undefined_predicate = function (value)
{
    // Check and return whether the value is undefined
    return value === undefined;
};

let null_predicate = function (value)
{
    // Check and return whether the value is null
    return value === null;
};

let check = function (predicate, value)
{
    // Apply the predicate function to the value and return the result
    return predicate(value);
};