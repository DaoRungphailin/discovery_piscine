setInterval(function () {
    alert('Please, use me...');},30000);

function calculator(params) {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var operator = document.getElementById("operator").value;
    var result = 0
    if(num1 >= 0 && num2 >= 0)
    {
        if (operator == '+'){
            result = num1 + num2;
        }
        else if(operator == '-'){
            result = num1 - num2;
        }
        else if(operator == '*'){
            result = num1 * num2;
        }
        else if(operator == '/'){
            if(num2 == 0){
                console.log("It’s over 9000!");
                alert("It’s over 9000!");
                return 0;
            }
            result = num1 / num2;

        }
        else if(operator == '%'){
            if(num2 == 0){
                console.log("It’s over 9000!");
                alert("It’s over 9000!");
                return 0;     
            }
            result = num1 % num2;
        }
        alert("Result is " + result)
        console.log(result)
    }
    else{
        console.log("Error :(");
        alert('Error :(')
    }
    
}