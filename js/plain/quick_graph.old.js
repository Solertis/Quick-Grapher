/* OUR ONLY GLOBALS ARE DECLARED
 HERE- array of variable names to legend info, array of variable names to values graphial graph*/
var arrayLegendHash = new Array();
var arrayValueHash = new Array();
var colorArray = [];
var variableFound = 0;

// custom loadsaved functions for neater HTML downstairs
function loadSinWaves() {
    var equation = "?&$sin(5x)%20-%20cos(5y)&#x&:X Times 5&,y&:5 Times Y&,&%x&:1&,y&:3&,&*";
    loadSaved(equation);
}

// custom loadsaved functions for neater HTML downstairs
function loadBillCalculator() {
    var equation = "?&$100*(s%20-%20r%20-%20l%20-%20c%20-%20g-m-i)%20-%20n%20-t%20-p%20-a-e%20+%20100*(b%20+%20k)&#s&:Salary (*100 Monthly)&,r&:Rent (*100 Monthly)&,l&:Student Loan Payments (*100 Monthly)&,c&:Car Payments (*100 Monthly)&,g&:Grocery Bill (*100 Monthly)&,n&:Netflix&,t&:Tivo&,p&:Pet Food&,a&:Gas&,m&:Spending Money&,e&:Electric&,i&:Retirement Savings (*100 Monthly)&,b&:Income From Sub Lease (*100 Monthly)&,k&:Income From Stock Market (*100 Monthly)&,&%s&:33&,r&:17&,l&:2&,c&:3&,g&:5&,m&:3&,i&:6&,n&:14&,t&:12&,p&:47&,a&:66&,e&:78&,b&:6&,k&:1&,&*";
    loadSaved(equation);
}

// custom loadsaved functions for neater HTML downstairs
function loadNestedFunctions() {
    var equation = "?&$min(sum(max(1,x,4),min(3,4,5)),sum(max(1,y,3),min(6,5,3)))&#x&:Maximum Quantifier A&,y&:Maximum Quantifier B&,&%x&:7&,y&:7&,&*";
    loadSaved(equation);
}

// custom loadsaved functions for neater HTML downstairs
function loadSine() {
    var equation = "?&$sin(x)&#x&:Sine&,y&:Maximum Quantifier B&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadASine() {
    var equation = "?&$asin(x)&#x&:ASine&,y&:Maximum Quantifier B&,&%x&:0&,&*";
    loadSaved(equation);
}

/////////// start copy/paste
function loadAddition() {
    var equation = "?&$x%20+%20y&#x&:First Integer&,y&:Second Integer&,&%x&:0&,y&:0&,&*";
    loadSaved(equation);
}

function loadMinus() {
    var equation = "?&$x%20-%20y&#x&:First Integer&,y&:Second Integer&,&%x&:0&,y&:0&,&*";
    loadSaved(equation);
}

function loadPower() {
    var equation = "?&$x^2&#x&:Number to be Squared&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadDivision() {
    var equation = "?&$x/5&#x&:Number to Divide by Five&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadMult() {
    var equation = "?&$x*5&#x&:Number to Multiply by Five&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadPercentage() {
    var equation = "?&$p%&#p&:Percentage of Number&,&%p&:0&,&*";
    loadSaved(equation);
}

function loadCos() {
    var equation = "?&$cos(y)&#y&:Cosine&,&%y&:0&,&*";
    loadSaved(equation);
}

function loadTan() {
    var equation = "?&$tan(y)&#y&:Tangent&,&%y&:0&,&*";
    loadSaved(equation);
}

function loadACos() {
    var equation = "?&$acos(y)&#y&:ACosine&,&%y&:0&,&*";
    loadSaved(equation);
}

function loadATan() {
    var equation = "?&$atan(y)&#y&:ATangent&,&%y&:0&,&*";
    loadSaved(equation);
}

function loadSum() {
    var equation = "?&$sum(x,y,z,a,b,c)&#y&:Summation Index 2&,x&:Summation Index 1&,z&:Summation Index 3&,a&:Summation Index 4&,b&:Summation Index 5&,c&:Summation Index 6&,&%x&:11&,y&:17&,z&:22&,a&:27&,b&:38&,c&:39&,&*";
    loadSaved(equation);
}

function loadMedium() {
    var equation = "?&$medium(x,1,33,55)&#x&:Variable Value&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadMax() {
    var equation =  "?&$max(x,1,33,55)&#x&:Variable Value&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadMin() {
    var equation =  "?&$min(x,1,33,55)&#x&:Variable Value&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadLess() {
    var equation = "?&$less(x,y)%20+%202*%20less(y,x)&#x&:First Variable&,y&:Second Variable&,&%x&:0&,y&:0&,&*";
    loadSaved(equation);
}

function loadGreater() {
    var equation = "?&$greater(x,y)%20+%202*%20greater(y,x)&#x&:First Variable&,y&:Second Variable&,&%x&:15&,y&:16&,&*";
    loadSaved(equation);
}

function loadEuler() {
    var equation = "?&$euler(e)&#e&:Euler Multiple&,&%e&:18&,&*";
    loadSaved(equation);
}

function loadFactorial() {
    var equation = "?&$factorial(4)&#&%&*";
    loadSaved(equation);
}

function loadNatLogTen() {
    var equation = "?&$natlogten(l)&#l&:Value for Log&,&%l&:0&,&*";
    loadSaved(equation);
}

function loadNatLog() {
    var equation = "?&$natlog(l)&#l&:Value for Log&,&%l&:0&,&*";
    loadSaved(equation);
}

function loadPi() {
    var equation = "?&$pi(m)&#m&:Multiples of Pi&,&%m&:0&,&*";
    loadSaved(equation);
}

function loadLogTenE() {
    var equation = "?&$logtene(l)&#l&:Value For Log&,&%l&:0&,&*";
    loadSaved(equation);
}

function loadLogTwoE() {
    var equation = "?&$logtwoe(l)&#l&:Value For Log&,&%l&:0&,&*";
    loadSaved(equation);
}

function loadAbs() {
    var equation = "?&$abs(-x)&#x&:Negative Values 1 through 100&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadCeil() {
    var equation = "?&$ceil(x%20+%20.5)&#x&:Ceiling of Half Integers&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadExp() {
    var equation = "?&$exp(8)&#&%&*";
    loadSaved(equation);
}

function loadFloor() {
    var equation = "?&$floor(y%20+%20.5)&#y&:Half Integers 1 to 100&,&%y&:0&,&*";
    loadSaved(equation);
}

function loadLog() {
    var equation = "?&$log(x)&#x&:Logarithmic Number&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadRandom() {
    var equation = "?&$random(x%20-%20x%20+%201)&#x&:Subtracted Away Value&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadRound() {
    var equation = "?&$round(x%20+%20.6)%20-%20round(y%20+%20.3)&#x&:Higher Rounding Value&,y&:Lower Rounding Value&,&%x&:0&,y&:0&,&*";
    loadSaved(equation);
}

function loadSqrt() {
    var equation = "?&$sqrt(x)&#x&:Values 1 to 100&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadFibonacci() {
    var equation = "?&$fibonacci(min(x,15))&#x&:Values 1 to 100&,&%x&:0&,&*";
    loadSaved(equation);
}

function loadNextPrime() {
    var equation = "?&$nextprime(p)&#p&:Numbers less than a Prime&,&%p&:0&,&*";
    loadSaved(equation);
}

/* loadSaved uses the passed variables from the address bar to set equations and
 hashes */
function loadSaved() {
    var args = arguments;
    var loadString = "";
    if (args.length > 0) {
        loadString = args[0];
    } else {
        loadString= String(document.getElementById("savebar").value);
    }

    if(loadString.length < 3) {
        alert("Could Not Load Saved Function from Hash");
    } else {

        /* Clear the
         Screen */
        clearScreen();
        /* Set our Equation */
        var equationStart = loadString.indexOf("?&$")+3;
        if(loadString.indexOf("?&$") > -1) {
            var equationEnd = loadString.indexOf("&#");
            var equation = loadString.substring(equationStart,equationEnd);
            equation=equation.replace(/%20/g," ");
            equation=equation.replace(/%25/g,"%");
            equation=equation.replace(/%28/g,"(");
            equation=equation.replace(/%29/g,")");
            document.getElementById('mainEquation').value = equation;
        }
    }

    /* Set our Titles */
    var titleHashStart = loadString.indexOf("&#")+2;
    var titleHashEnd = loadString.indexOf("&%");
    if(loadString.indexOf("&#") > 0) {
        var TitleHash = loadString.substring(titleHashStart,titleHashEnd);
        TitleHash=TitleHash.replace(/%20/g," ");
        addTitlesToHash(TitleHash);
    }

    /* Set our Values */
    var valueHashStart = loadString.indexOf("&%")+2;
    var valueHashEnd = loadString.indexOf("&*");
    if(loadString.indexOf("&%") > 0) {
        var ValueHash = loadString.substring(valueHashStart,valueHashEnd);
        ValueHash=ValueHash.replace(/%20/g," ");
        addValuesToHash(ValueHash);
    }

    // do an initial parse
    parseEquation();
    // update all graphs
    updateAllGraphs();
}

// adds array legend titles to global hash
function addTitlesToHash(titles) {
    var nextDelimiter = 0;
    var stillParsing = 1;
    var parseBlock = titles;

    /* Loop through all
     values in title bar and add them to hash table reference for names */
    while(stillParsing == 1) {
        nextDelimiter = parseBlock.indexOf("&:");
        if(nextDelimiter > -1) {
            stopDelimiter = parseBlock.indexOf("&,");
            var myVar = parseBlock.substring(0,nextDelimiter);
            var myLabel = parseBlock.substring(nextDelimiter+2,stopDelimiter);
            parseBlock = parseBlock.substring(stopDelimiter+2,parseBlock.length);
            arrayLegendHash[myVar] = myLabel;

        } else {
            stillParsing = 0;
        }
    }
    // x&:testme&;&,K&:hello&;&,y&:whats up&;&%
}

// adds array variable values to global hash
function addValuesToHash(titles) {
    var nextDelimiter = 0;
    var stillParsing = 1;
    var parseBlock = titles;

    /* Loop through all
     values in title bar and add them to hash table reference for names */
    while(stillParsing == 1) {
        nextDelimiter = parseBlock.indexOf("&:");
        if(nextDelimiter > -1) {
            stopDelimiter = parseBlock.indexOf("&,");
            var myVar = parseBlock.substring(0,nextDelimiter);
            var myLabel = parseBlock.substring(nextDelimiter+2,stopDelimiter);
            parseBlock = parseBlock.substring(stopDelimiter+2,parseBlock.length);
            arrayValueHash[myVar] = myLabel;

        } else {
            stillParsing = 0;
        }
    }
    // x&:testme&;&,K&:hello&;&,y&:whats up&;&%
}

/* showValue changes the sibling span text of a slider to be its value and recalculates the equation*/
/* The overall formula based on the
 change in this variable */
function showValue(sliderValue, sliderId) {

    var sliderSubLabel = document.getElementById("sub" + sliderId);
    sliderSubLabel.innerHTML=sliderValue;

    /* Here we set the value hash with the value */
    arrayValueHash[sliderId[sliderId.length-1]] = sliderValue;

    solveEquation(document.getElementById('mainEquation').value);

    /* Also update the graph */
    if(document.checkboxform.updategraphcheckbox.checked==false) {
        return;
    } else {
        updateAllGraphs();
    }

    //document.getElementById(sliderId).nextSibling.innerHTML=sliderValue;
}

function renameSlider(sliderName) {
    var sliderNewName = prompt("Enter a new variable name","nonameslider");
    var sliderSubLabel = document.getElementById("slider" + sliderName);
    delete arrayLegendHash[sliderName];

    /* Set our hash key value for this variable, or add a new one if not exist */
    var sliderVar = sliderName[sliderName.length-1];
    arrayLegendHash[sliderVar] = sliderNewName;

    var newLabel = "(" + sliderName[sliderName.length-1] + ") " + sliderNewName;

    sliderSubLabel.innerHTML=newLabel;

    solveEquation(document.getElementById('mainEquation').value);

    /* Also update the graph */
    if(document.checkboxform.updategraphcheckbox.checked==false) {
        updateGraph(sliderName);
    } else {
        updateAllGraphs();
    }

}

/* stringify hash turns the main arrayLegendHash into a string and returns it */
/* the returned string is exactly what
 hash.concat({key: 'value', key2: 'value'}) is looking for */
function stringifyHash() {
    var returnString = "";
    var keys = arrayValueHash;
    for(var i in keys) {
        returnString += i + "&:" +  arrayLegendHash[i];
        returnString += "&,"
    }
    returnString += "";
    return returnString;
}

/* stringify values hash turns the main arrayValueHash into a string and returns it */
/* the returned string is exactly what
 hash.concat({key: 'value', key2: 'value'}) is looking for */
function stringifyValueHash() {
    var returnString = "";
    var keys = arrayValueHash;
    for(var i in keys) {
        returnString += i + "&:" +  arrayValueHash[i];
        returnString += "&,"
    }
    returnString += "";
    return returnString;
}

/* StringifyPage stringifies the hash as well as the
 equation */
function stringifyPage() {
    var stringifiedHash = stringifyHash();
    var stringifiedValuesHash = stringifyValueHash();
    var stringifiedEquation = document.getElementById('mainEquation').value;
    stringifiedEquation=stringifiedEquation.replace(/\s/g,"%20");
    var returnString = "?&$" + stringifiedEquation + "&#" + stringifiedHash + "&%" + stringifiedValuesHash + "&*";
    document.getElementById("savebar").value = returnString;
}

/* moreSliders copies the invisible div slider element "slidertemplate" into a sibling div named sliderOutputX where
 X=numSliders */
function moreSliders(varName, varTitle) {

    /* Here we set the value hash with the value */
    if(!arrayValueHash[varName]) {
        arrayValueHash[varName] = 0;
    }

    /* clone the slider template but not its style*/
    var newSliders = document.getElementById('slidertemplate').cloneNode(true);
    newSliders.id = '';
    newSliders.style.display = 'block';

    /* loop over all child nodes of slider and name them uniquely sliderID(alpha) */
    var sliderSubLabel = null;
    var newSlider = newSliders.childNodes;
    for (var i=0;i<newSlider.length;i++) {
        var sliderOutputName = newSlider[i].id;
        /* if the slider id is a range type, name the container div as the same */
        if (sliderOutputName) {
            if(newSlider[i].type == "range") {
                newSliders.id = "sliderID" + varName;
                newSlider[i].name = "clonedSlider";
                newSlider[i].value = arrayValueHash[varName];
                sliderSubLabelName = "sub" + sliderOutputName + varName;
            }
            newSlider[i].id = sliderOutputName + varName;
        }
    }

    /* find the slider template and insert the correct slider behind it  */
    var insertHere = document.getElementById('slidertemplate');
    insertHere.parentNode.insertBefore(newSliders,insertHere);

    /* Also adds a nice label to the text field */
    var sliderTitle = document.getElementById("sliderTitle" + varName)
    /* If we've got a hashed title for this value, display it */
    var hashLabelValue = arrayLegendHash[varName];
    if(hashLabelValue) {
        sliderTitle.innerHTML= "(" + varName + ") " + hashLabelValue;
    } else {
        sliderTitle.innerHTML= "(" + varName + ") " + varTitle;
    }

    // and also set our slider innerHTML value
    sliderSubLabel = document.getElementById(sliderSubLabelName);
    sliderSubLabel.innerHTML=arrayValueHash[varName];

}

/* clearScreen clears out all named elements */
function clearScreen() {

    // as we're looping over values, don't clear the legend (annoying!)
    //arrayLegendHash = null;
    //arrayLegendHash = [];
    arrayValueHash = null;
    colorArray = null;
    arrayValueHash = [];
    colorArray = [];

    /* loop over the collection of cloned sliders and
     delete their parents */
    var cloneSpanCollection = document.getElementsByName("clonedSlider");
    var cloneSpanCollectionLength = cloneSpanCollection.length;
    for (var i=0;i<cloneSpanCollectionLength;i++) {
        cloneSpanCollection[0].parentNode.parentNode.removeChild(cloneSpanCollection[0].parentNode);
    }
}

/* alphaNumericType returns the alphaNumericType of the single char passed */
/* alphaNumericType:
 6=open parantheses
 5=closed paranthesis 4=operator,  2 =numeric, 1=alpha, 0=unsupported
 operator*/
function alphaNumericType(singlet) {
    var returnVal;

    /* The most inclusive test must be done first, to subsecede subsequent tests */
    if (/[^a-zA-Z0-9. _]/.test(singlet)) {
        returnVal = 0;
    }
    if (/[\[\(\{]/.test(singlet)) {
        returnVal = 6;
    }
    if (/[\]\)\}]/.test(singlet)) {
        returnVal = 5;
    }
    if (/[\é\ê\ò\ñ\ð\ï\î\í\ì\ë\÷\ö\õ\ô\ó\û\ÿ\ù\ø\ü\ú\þ\ÿ\,\&\@\#\~\_\:\;\+\-\/\*\^\%\\\!]/.test(singlet)) {
        returnVal = 4;
    }
    if (/[0-9.]/.test(singlet)) {
        returnVal = 2;
    }
    if (/[a-zA-Z]/.test(singlet)) {
        returnVal = 1;
    }
    return returnVal;
}

// sin = ú
// cos = ù
// tan = _
// asin = Ǵ
// acos = ǵ
// atan = #
// sum = :
// medium = ;
// min = ÿ
// max = þ
// less = ý
// greater = ü
// euler = û
// factorial = ø
// natlogten = ÷
// natlog = ö
// pi = õ
// logtene = ô
// logtwoe = ó
// abs = ò
// ceil = ñë
// exp = ð
// floor = ï
// log = î
// random = í
// round = ì
// sqrt = ë
// fibonacci = ê
// nextprime = é
// replace all known functions with pipeesque characters
// store these pipe characters incrementally in the functions array
function storeAndReplaceFunctions(equation) {
    var sanitizedEquation = equation;

    sanitizedEquation = sanitizedEquation.replace( new RegExp( "nextprime", "gi" ), "é" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "fibonacci", "gi" ), "ê" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "pi", "gi" ), "õ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "logtene", "gi" ), "ô" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "logtwoe", "gi" ), "ó" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "natlogten", "gi" ), "÷" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "natlog", "gi" ), "ö" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "asin", "gi" ), "Ǵ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "acos", "gi" ), "ǵ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "atan", "gi" ), "#" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "sin", "gi" ), "ú" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "cos", "gi" ), "ù" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "tan", "gi" ), "_" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "sum", "gi" ), ":" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "medium", "gi" ), ";" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "min", "gi" ), "ÿ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "max", "gi" ), "þ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "less", "gi" ), "ý" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "greater", "gi" ), "ü" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "euler", "gi" ), "û" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "factorial", "gi" ), "ø" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "abs", "gi" ), "ò" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "ceil", "gi" ), "ñ" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "exp", "gi" ), "ð" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "floor", "gi" ), "ï" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "log", "gi" ), "î" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "random", "gi" ), "í" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "round", "gi" ), "ì" );
    sanitizedEquation = sanitizedEquation.replace( new RegExp( "sqrt", "gi" ), "ë" );

    return sanitizedEquation;
}

// replace all known pipette characters with function names
function replaceStoredFunctions(sanitizedEquation) {

    var restoredEquation = sanitizedEquation;

    restoredEquation = restoredEquation.replace( new RegExp( "é", "g" ), "nextprime" );
    restoredEquation = restoredEquation.replace( new RegExp( "ê", "g" ), "fibonacci" );
    restoredEquation = restoredEquation.replace( new RegExp( "ò", "g" ), "abs" );
    restoredEquation = restoredEquation.replace( new RegExp( "ñ", "g" ), "ceil" );
    restoredEquation = restoredEquation.replace( new RegExp( "ð", "g" ), "exp" );
    restoredEquation = restoredEquation.replace( new RegExp( "ï", "g" ), "floor" );
    restoredEquation = restoredEquation.replace( new RegExp( "î", "g" ), "log" );
    restoredEquation = restoredEquation.replace( new RegExp( "í", "g" ), "random" );
    restoredEquation = restoredEquation.replace( new RegExp( "ì", "g" ), "round" );
    restoredEquation = restoredEquation.replace( new RegExp( "ë", "g" ), "sqrt" );
    restoredEquation = restoredEquation.replace( new RegExp( "õ", "g" ), "pi" );
    restoredEquation = restoredEquation.replace( new RegExp( "ô", "g" ), "logtene" );
    restoredEquation = restoredEquation.replace( new RegExp( "ó", "g" ), "logtwoe" );
    restoredEquation = restoredEquation.replace( new RegExp( "÷", "g" ), "natlogten" );
    restoredEquation = restoredEquation.replace( new RegExp( "ö", "g" ), "natlog" );
    restoredEquation = restoredEquation.replace( new RegExp( "ø", "g" ), "factorial" );
    restoredEquation = restoredEquation.replace( new RegExp( "û", "g" ), "euler" );
    restoredEquation = restoredEquation.replace( new RegExp( "ü", "g" ), "greater" );
    restoredEquation = restoredEquation.replace( new RegExp( "ý", "g" ), "less" );
    restoredEquation = restoredEquation.replace( new RegExp( "þ", "g" ), "max" );
    restoredEquation = restoredEquation.replace( new RegExp( "ÿ", "g" ), "min" );
    restoredEquation = restoredEquation.replace( new RegExp( "ú", "g" ), "sin" );
    restoredEquation = restoredEquation.replace( new RegExp( "ù", "g" ), "cos" );
    restoredEquation = restoredEquation.replace( new RegExp( "_", "g" ), "tan" );
    restoredEquation = restoredEquation.replace( new RegExp( "Ǵ", "g" ), "asin" );
    restoredEquation = restoredEquation.replace( new RegExp( "ǵ", "g" ), "acos" );
    restoredEquation = restoredEquation.replace( new RegExp( "#", "g" ), "atan" );
    restoredEquation = restoredEquation.replace( new RegExp( ":", "g" ), "sum" );
    restoredEquation = restoredEquation.replace( new RegExp( ";", "g" ), "medium" );
    return restoredEquation
}

/* clear the screen and parse the
 equation */
function clearAndParseEquation() {
    /* clear the
     screen */
    clearScreen();
    /* parse the
     equation */
    parseEquation();
    // update all graphs
    updateAllGraphs()
}

/* parseEquation is an
 algorithm in 3 steps */
/* Step
 1 - fill an array with each variable from equation */
/* Step
 2 - call moreSliders to create a dynamic slider with each variable from equation */
/* Step
 3 - moreSliders also creates a named textual field for the dynamic
 slider */
function parseEquation() {
    /* Create a variable and relevant info with the equation from mainEquation field */
    var rawEquation = storeAndReplaceFunctions(document.getElementById('mainEquation').value);

    /* loop through each element of the rawEquation and add each alphanumeric to an unique preserving array */
    /* Also, sanity check that open paranthesis match closed parenthesis */
    /* while we are looping, also throw the sliders up for each alpha type */
    /* This is currently a heinous
     n^2 algorithm because of programmer laziness and input size */
    var variableChars=new Array();
    variableFound = 0;
    var paranthesisCheck = 0;
    for(var i=0;i<rawEquation.length;i++) {
        var innerType = alphaNumericType(rawEquation[i])
        if(innerType == 1) {
            var foundMatch = 0;
            for (var j=0; j<variableChars.length; j++) {
                if( rawEquation[i] == variableChars[j]) {
                    foundMatch = 1;
                }
            }
            if (foundMatch == 0) {
                variableFound++;
                variableChars[variableChars.length] = rawEquation[i];
                moreSliders(rawEquation[i],"");
            }
        } else if(innerType == 6) {
          // end alphamatch test 
            paranthesisCheck = paranthesisCheck + 1;
        } else if(innerType == 5) {
            paranthesisCheck = paranthesisCheck - 1;
        }
    }

    if(paranthesisCheck != 0) {
        alert("parenthesis are not fully closed");
        return;
    }

    /* solve the first pass at the equation with zero
     values */
    solveEquation(rawEquation);

    if(rawEquation.length > 0) {
        if(variableFound > 0) {
            if(document.checkboxform.updategraphcheckbox.checked==false) {
                return;
            }
            updateAllGraphs();
        }
    }
}

/* solveEquation solves the equation presented */
function solveEquation(rawEquation) {
    // always trim whitespace
    var trimmedEquation = rawEquation.replace(/^\s*/, "").replace(/\s*$/, "");
    //alert(trimmedEquation);

    // in direct instances this is called twice, which is heinous but not noticible to user
    var origEquation = storeAndReplaceFunctions(trimmedEquation);
    var lenForUs = origEquation.length;

    /* This point is our Recursion, we solve for a smaller paranthesis and recurse */
    var openParenIndex = 0;
    var closedParenIndex = 0;
    var firstOpen = -1;
    var lastClosed = -1;
    var continueLoop = 1;

    // loop over the equation finding parenthesis in the FORWARD direction
    for(var i=0;i<lenForUs;i++) {
        if(continueLoop == 1) {
            // 6 = open, 5 = closed
            if(alphaNumericType(origEquation[i]) == 6) {
                openParenIndex++;
                if(firstOpen == -1) {
                    firstOpen = i;
                }
            } else if(alphaNumericType(origEquation[i]) == 5) {
                closedParenIndex++;
                lastClosed = i;
            }

            // if we've completed a paranthesie pair
            // 1. parse the parenthesie
            // 2. put return value into string instead of parenthesie pair
            // 3. return SolveEquation(newEquationMinusParanthesiePair)

            // make sure we have the first parenthesie pair (or outermost)
            if(((openParenIndex + closedParenIndex) > 1) && (openParenIndex == closedParenIndex) ) {
                // get the insides of this parenthesie
                var insideParenthesies = origEquation.substring(firstOpen+1,lastClosed);
                // if this parenthesie is the entire shebang, return the insides and ignore
                if((firstOpen == 0) && (lastClosed == lenForUs)) {
                    return solveEquation(insideParenthesies);
                }

                // if openParenIndex > 1, we can recurse further...
                if(openParenIndex > 1) {
                    // at this point, we may be inside a functional argument
                    // test for first level commas
                    var splitPoint = -1;
                    var lastSplitPoint = 0;
                    var recursiveDepth = 0;
                    var splitUp = 0;
                    var equationStringAfterSplitParse = origEquation.substring(0,firstOpen+1);
                    for(var k=0;k<insideParenthesies.length;k++) {
                        if(insideParenthesies[k] == ',') {
                            if(recursiveDepth == 0) {
                                // if we find a split, recurse for this item in the function arguments
                                splitPoint = k;
                                splitUp = 1;
                                var ourSplitFirstPart = insideParenthesies.substr(lastSplitPoint,splitPoint);
                                var ourSplitFirstPartSolution = solveEquation(ourSplitFirstPart);
                                equationStringAfterSplitParse += ourSplitFirstPartSolution;
                                equationStringAfterSplitParse += ",";

                                lastSplitPoint = splitPoint;
                            }
                        }
                        if((k == insideParenthesies.length-1) && splitUp == 1) {
                            var alertString = "got to end of arguments" + "::";
                            //document.getElementById("debugbar").value += alertString;
                            // if we previously found a split and are at the end, grab the last bit
                            splitPoint = k;
                            var ourSplitFirstPart = insideParenthesies.substr(lastSplitPoint+1,splitPoint);
                            var ourSplitFirstPartSolution = solveEquation(ourSplitFirstPart);
                            equationStringAfterSplitParse += ourSplitFirstPartSolution;
                            lastSplitPoint = splitPoint;
                        }

                        // if we see an open bracket, ++
                        // if we see a closed bracket, --
                        // 6 = open, 5 = closed
                        var alphaType = alphaNumericType(insideParenthesies[k]);
                        if(alphaType == 6) {
                            recursiveDepth++;
                        } else if(alphaType == 5) {
                            recursiveDepth--;
                        }

                    }
                    if(splitUp == 1) {
                        equationStringAfterSplitParse += origEquation.substring(lastClosed,lenForUs);
                        return solveEquation(equationStringAfterSplitParse);
                    }
                    // else if we have no first level commas,
                    // solve for the inside of Parenthesies
                    var parenthesieSolution = solveEquation(insideParenthesies);
                    var newEquation = origEquation.substring(0,firstOpen+1) + parenthesieSolution;
                    newEquation = newEquation + origEquation.substring(lastClosed,lenForUs);
                    return solveEquation(newEquation);
                } else {
                    continueLoop = 0;
                }
            }
        }
    }

    // reset shared loop variables
    openParenIndex = 0;
    closedParenIndex = 0;
    var lastOpen = -1;
    var firstClosed = -1;
    continueLoop = 1;

    // now loop over the input in the REVERSE direction
    for(var i=lenForUs;i>0;i--) {
        if(continueLoop == 1) {
            // 6 = open, 5 = closed
            if(alphaNumericType(origEquation[i]) == 5) {
                closedParenIndex++;
                if(firstClosed == -1) {
                    firstClosed = i;
                }
            } else if(alphaNumericType(origEquation[i]) == 6) {
                openParenIndex++;
                lastOpen = i;
            }

            // if we've completed a paranthesie pair
            // 1. parse the parenthesie
            // 2. put return value into string instead of parenthesie pair
            // 3. return SolveEquation(newEquationMinusParanthesiePair)

            // make sure we have the first parenthesie pair (or outermost)
            if(((openParenIndex + closedParenIndex) > 1) && (openParenIndex == closedParenIndex) ) {
                // get the insides of this parenthesie
                var insideParenthesies = origEquation.substring(lastOpen+1,firstClosed);

                // if this parenthesie is the entire shebang, return the insides and ignore
                if((lastOpen == 0) && (firstClosed == lenForUs)) {
                    return solveEquation(insideParenthesies);
                }

                // if openParenIndex > 1, we can recurse further...
                if(openParenIndex > 1) {
                    // at this point, we may be inside a functional argument
                    // test for first level commas
                    var splitPoint = -1;
                    var lastSplitPoint = insideParenthesies.length;
                    var recursiveDepth = 0;
                    var splitUp = 0;
                    var equationStringAfterSplitParse = origEquation.substring(firstClosed,lenForUs);
                    for(var k=insideParenthesies.length;k>0;k--) {
                        if(insideParenthesies[k] == ',') {
                            if(recursiveDepth == 0) {
                                // if we find a split, recurse for this item in the function arguments
                                splitPoint = k;
                                splitUp = 1;
                                var ourSplitFirstPart = insideParenthesies.substr(splitPoint,lastSplitPoint);
                                var ourSplitFirstPartSolution = solveEquation(ourSplitFirstPart);
                                equationStringAfterSplitParse = ourSplitFirstPartSolution + equationStringAfterSplitParse;

                                lastSplitPoint = splitPoint;
                            }
                        }
                        if(k == insideParenthesies.length && splitUp == 1) {
                            // if we previously found a split and are at the end, grab the last bit
                            splitPoint = k;
                            var ourSplitFirstPart = insideParenthesies.substr(splitPoint,lastSplitPoint);
                            var ourSplitFirstPartSolution = solveEquation(ourSplitFirstPart);
                            equationStringAfterSplitParse = ourSplitFirstPartSolution + equationStringAfterSplitParse;
                            lastSplitPoint = splitPoint;
                        }

                        // if we see an open bracket, ++
                        // if we see a closed bracket, --
                        // 6 = open, 5 = closed
                        var alphaType = alphaNumericType(insideParenthesies[k]);
                        if(alphaType == 6) {
                            recursiveDepth++;
                        } else if(alphaType == 5) {
                            recursiveDepth--;
                        }

                    }
                    if(splitUp == 1) {
                        equationStringAfterSplitParse = origEquation.substring(0,lastSplitPoint) + equationStringAfterSplitParse;
                        return solveEquation(equationStringAfterSplitParse);
                    }
                    // else if we have no first level commas,
                    // solve for the inside of Parenthesies
                    var parenthesieSolution = solveEquation(insideParenthesies);
                    var newEquation = origEquation.substring(0,lastOpen+1) + parenthesieSolution;
                    newEquation = newEquation + origEquation.substring(firstClosed,lenForUs);
                    return solveEquation(newEquation);
                } else {
                    continueLoop = 0;
                }
            }
        }
    }

    // at this point, we can
    /* Create an array with one element per item */
    var eachIndividual=new Array();
    var eachIndividualSize = 0;
    var numericalDigits = 0;

    for(var i=0;i<lenForUs;i++) {
        // we want consecutive numerical items to be added as a group
        if(alphaNumericType(origEquation[i]) == 2) {
            if(i == lenForUs-1) {
                if(numericalDigits > 0) {
                    numericalDigits++;
                    eachIndividual[eachIndividualSize] = origEquation.substring(i-numericalDigits,i+1);
                    eachIndividualSize = eachIndividualSize + 1;
                    numericalDigits = 0;
                } else {
                    eachIndividual[eachIndividualSize] = origEquation[i];
                    eachIndividualSize = eachIndividualSize + 1;
                }
            } else {
                numericalDigits = numericalDigits + 1;
            }
        } else {
            if(numericalDigits > 0) {
                eachIndividual[eachIndividualSize] = origEquation.substring(i-numericalDigits,i);
                eachIndividualSize = eachIndividualSize + 1;
                numericalDigits = 0;
            }
            // add the non-numeric item at this location
            eachIndividual[eachIndividualSize] = origEquation[i];
            eachIndividualSize = eachIndividualSize + 1;
        }

    }
    /* start looping over the equation, cleaning up variables */
    /* alphaNumericType:
     6=open parantheses
     5=closed paranthesis 4=operator,  2 =numeric, 1=alpha, 0=unsupported operator*/
    /* loop over the individual element collection and reorganize into a string */
    var newEquationString = '';
    var skipReplace = 0;
    var lastAlphaType = -1;
    var alphaType = -1;
    for(var i=0;i<eachIndividual.length;i++) {

        alphaType = alphaNumericType(eachIndividual[i]);
        if(i>0) {
            if(alphaType == 6 && lastAlphaType == 2) {
                newEquationString += '*';
            }
            if(alphaType == 6 && lastAlphaType == 1) {
                newEquationString += '*';
            }
            if(alphaType == 1 && lastAlphaType == 2) {
                newEquationString += '*' + arrayValueHash[eachIndividual[i]];
                skipReplace = 1;
            }
            if(alphaType == 1 && lastAlphaType == 1) {
                newEquationString += '*' + arrayValueHash[eachIndividual[i]];
                skipReplace = 1;
            }
            if(alphaType == 2 && lastAlphaType == 5) {
                newEquationString += '*';
            }
            if(alphaType == 2 && lastAlphaType == 2) {
                newEquationString += '*';
            }
        }
        /* replace % signs with actual numerical value (.01) */
        if(eachIndividual[i] == '\%') {
            newEquationString += "*(.01)";
        } else {
            if(skipReplace == 0) {
                if(alphaType == 1) {
                    newEquationString += arrayValueHash[eachIndividual[i]];
                } else {
                    newEquationString += eachIndividual[i];
                }
            } else {
                skipReplace = 0;
            }
        }
        if(alphaType > 0) {
            lastAlphaType = alphaType;
        }
    } // end of loop over element collection for loop

    /* loop over the reconstituted collection and add
     implicit * between brackets */
    /* also, remove white spaces! */
    var implicitEquationString = '';
    for(var i=0;i<newEquationString.length;i++) {
        newStringAlphaType = alphaNumericType(newEquationString[i]);
        if(i > 0) {
            if(newStringAlphaType == 3 && alphaNumericType(newEquationString[i-1]) == 3) {
                implicitEquationString += '*';
            }
        }
        if(newEquationString[i] != ' ') {
            implicitEquationString += newEquationString[i];
        }
    }

    /*  document.getElementById("mainResult").innerHTML=implicitEquationString; */
    //alert(implicitEquationString);

    // this is the old method
    //parsedEquationResult = "Could Not Parse";
    //implicitEquationString = "return " + implicitEquationString;
    //ourEquationFunction = new Function(implicitEquationString);
    //alert(ourEquationFunction);
    //parsedEquationResult=ourEquationFunction();
    //document.getElementById("mainResult").innerHTML= parsedEquationResult;

    if(implicitEquationString != "") {
        // restore known function names into the equation
        implicitEquationStringWithFunctions = replaceStoredFunctions(implicitEquationString);
        //alert(implicitEquationString);
        //alert("turns into");
        //alert(implicitEquationStringWithFunctions);
        //<input type="text" id="debugbar" value="" />
        //document.getElementById("debugbar").value += implicitEquationStringWithFunctions;
        //document.getElementById("debugbar").value += "::";

        var parsedValue;
        // this is the new math parse method
        var p = new MathProcessor()
        try {
            parsedValue = p.parse(implicitEquationStringWithFunctions);
        } catch(e) {
            //var alertString = "Could Not Parse The Following:" + implicitEquationStringWithFunctions + "::";
            //document.getElementById("debugbar").value += alertString;

            //alert(alertString);
            parsedValue = 0;
        }

        document.getElementById("mainResult").innerHTML= parsedValue;
        /* Also allow user to edit this in the future */
        stringifyPage();
        return parsedValue;
    }

    /* Also allow user to edit this in the future */
    stringifyPage();
}

// updates graphs for all variables
function updateAllGraphs() {
    // can't graph zero variables....
    if(variableFound == 0) {
        return;
    }
    
    document.getElementById("formula").innerHTML = document.getElementById("mainEquation").value;

    /* loop over each variable in the value hash */
    /* keys[i] is the variable name like x or y*/
    /* the hash of keys[i] is the value for said variable*/
    var iterator = 0;
    var graphName = "";
    var arrayValuekeys = arrayValueHash;
    for(var varName in arrayValuekeys) {
        graphName = "Title" + varName;
        updateGraph(graphName);
    }
}

// updates a single graph
function updateGraph(graphName) {

    // can't graph zero variables....
    if(variableFound == 0) {
        return;
    }

    var graphVariable = graphName[graphName.length-1];;
    var subGraphChartName = "subgraphChart" + graphVariable;
    var graphChartName = "graphChart" + graphVariable;
    var subGraphLegendName = "subgraphLegend" + graphVariable;

    // delete any old graph of this variable
    var subGraphElement = document.getElementById(subGraphChartName);
    if(subGraphElement != null) {
        document.getElementById(graphChartName).removeChild(subGraphElement);
    }

    // variables for rgraph instance
    var myGraphElement = document.createElement("div");
    myGraphElement.id = subGraphChartName;
    myGraphElement.innerHTML = "";
    document.getElementById(graphChartName).appendChild(myGraphElement);

    // our x and y variables for our canvas
    var xsize = 300;
    var ysize = 150;
    var xpos = 20;
    var ypos = 20;

    // our rgraph instance canvas
    var rGraph = Raphael(subGraphChartName,xpos,ypos,xsize,ysize);

    /* set txt type */
    rGraph.g.txtattr.font = "12px 'Fontin Sans', Fontin-Sans, sans-serif";

    /* storage for singledimensional arrays of X and Y plot values and legend*/
    var YValueOneDimension = new Array;
    var XValueOneDimension = new Array;
    var legendTxt = "<ul>";

    /* for now X value range is not dynamic, upgrade this later */
    for(i=0;i<100;i++) {
        XValueOneDimension[i] = i;
    }

    /* set the color array */
    var testColor = colorArray[graphVariable];
    if(testColor == null) {
        colorArray[graphVariable] = Raphael.getColor();
    }

    var testLabel = arrayLegendHash[graphVariable];

    if(testLabel == null) {
        testLabel = "Unlabeled";
    }
    legendTxt += "<li><FONT COLOR=\"" + colorArray[graphVariable] + "\">" + graphVariable + "(" + testLabel + ")" + ": " +  colorArray[graphVariable] + "</FONT></li>";

    /* for each variable, loop 100 times and find the equation solution for each loop iteration with that J var set as the value */
    var originalVarValue = arrayValueHash[graphVariable];
    YValueOneDimension[0] = 0;
    var ourVal = 0;
    for(var j=1;j<100;j++) {
        arrayValueHash[graphVariable] = j;
        ourVal = solveEquation(document.getElementById('mainEquation').value);
        if(document.getElementById("mainResult").innerHTML == "NaN") {
            alert("Cannot Graph Value Which Equates To NaN (Such as asin(4) or 4/0 for example)");
            return;
        }
        YValueOneDimension[j] = ourVal;

    }

    /* reset the key back to original state */
    arrayValueHash[graphVariable] = originalVarValue;

    /* reset the equation back to original state */
    solveEquation(document.getElementById('mainEquation').value);
    if(document.getElementById("mainResult").innerHTML == "NaN") {
        alert("Cannot Graph Value Which Equates To NaN (Such as asin(4) or 4/0 for example)");
        return;
    }

    /* append the legend */
    legendTxt += "</ul>"
    var myLegendElement = document.createElement("div");
    myLegendElement.id = subGraphLegendName;
    myLegendElement.innerHTML = legendTxt;

    document.getElementById(subGraphChartName).appendChild(myLegendElement);
    var tempColorArray = [];
    tempColorArray[0] = colorArray[graphVariable];
    /* create the graph */
    /* graph requires 2 singleimensional arrays of numbers */
    /* the first set of arrays is the X axis values of this variable*/
    /* the second set of arrays is the Y axis values of this variable*/
    var lines = rGraph.g.linechart(xpos, ypos, xsize, ysize, XValueOneDimension, YValueOneDimension,
    {nostroke: false, axis: "0 0 1 1", symbol: "o", smooth: true, colors: tempColorArray});
    lines.symbols.attr({r: 3});
    // lines.lines[0].animate({"stroke-width": 6}, 1000);
    // lines.symbols[0].attr({stroke: "#fff"});
    // lines.symbols[0][1].animate({fill: "#f00"}, 1000);
}