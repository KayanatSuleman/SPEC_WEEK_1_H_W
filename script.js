function calculate() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	if (isNaN(num1) || isNaN(num2)) {
		alert("Please enter valid numeric values.");
		return;
	}

	var sum = parseFloat(num1) + parseFloat(num2);
	document.getElementById("result").innerHTML = "The sum is: " + sum;
}