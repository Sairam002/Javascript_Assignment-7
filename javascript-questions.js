let input = "Apple";
// 1st question
function lengthGreaterThanFour(input){
    let length = input.length;
    let output = "";
    if(length >= 4){
        output = input.slice(0,4);
    }
    else{
        output = input;
    }
    return output;
}

// 2nd question
function removeWhiteSpaces(input){
    let output = "";
    let instance = "";
    instance = input.split(" ");
    for(let i = 0; i < instance.length; i++){
        output = output + instance[i];
    }
    return output;
}

// 3rd question
function swapWords(input){
    let output = "";
    let instance = "";
    instance = input.split(" ");
    output = instance[1] + instance[0];
    return output;
}

// 4th question
function replaceAwithX(input){
    let output = "";
    output = (input.toLowerCase()).replace("a", "x");
    return output;
}

// 5th answer 
"Split method is used to convert string into array";

// 6th answer
"match() method";

// 7th
"Keep \n at the place where we want to break a string";

//8th
function isLowerCase(input){
    if(input[0] === input[0].toLowerCase()){
        return true;
    }else{
        return false;
    }
}

//9th
function nineth(input){
    return input.toLowerCase();
}

//10th
function performTasks(input){

    //a
    let a = input.toUpperCase();
    // console.log(a)

    //b
    let b = (input.slice(0,1)).toUpperCase() + input.slice(1);
    // console.log(b)

    //c
    let c = input.toLowerCase();
    // console.log(c)

    //d
    let d = input.slice((input.length)/2) +" " + input.slice(0, (input.length)/2);
    // console.log(d)

    //e 
    input = input.toLowerCase();
    let obj = {};
    for(let i = 0; i < input.length; i++){
        let l = input.charAt(i);
        if(Object.keys(obj).includes(input.charAt(i)) === true){
            obj[l] = obj[l] + 1;
        }else{
            obj[l] = 1;
        }
    }
    console.log(obj);

    //f
    let f = "";
    for(let i = 0; i < input.length + 1 ; i++){
        if( i === 0){
            i = 1;
        }
        f = f + input[input.length - i];
    }

    // console.log(f);
}

performTasks("Hello hi how are you.");