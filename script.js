let principal = document.getElementById("principal");
let rate = document.getElementById("rate");
let years = document.getElementById("years");
let result = document.getElementById("result");
let rangeValue = document.getElementById("rangeValue");





rate.addEventListener("change", () => {
	rangeValue.innerHTML = rate.value + "%";
})



		
function compute()
{
	if (principal.value <= 0) {
		alert("Enter a positive number");
		principal.focus();
	}
	else {
		let interest  = (principal.value * rate.value * years.value) / 100;
		const year = new Date();
		let actualYear = parseInt(year.getFullYear()) + parseInt(years.value);
		result.innerHTML = `if you deposit <mark>${principal.value}</mark><br>
							at an interest rate of <mark>${rate.value}%</mark><br>
							You will receive an amount of <mark>${interest}</mark><br>
							in the year <mark>${actualYear}</mark>`;	   
	}
}
        