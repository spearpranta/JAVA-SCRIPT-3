function ClickPrm() {
	var PrimeN = document.getElementById("PrM").value;
	var a = 0;
	var i = 2;

	for(i; i<PrimeN; i++){

		if(PrimeN%i == 0){
			a=i;
		}
	}
	if(a==0){
		document.getElementById("PRe").innerHTML="It's a Prime Number";
	} else{
		document.getElementById("PRe").innerHTML="It's not a Prime Number";
	}
}

function ClickFac() {
	var Input = document.getElementById("FaC").value;
	var Result= Input;
	var i = 1;

	for(i; i<Input; i++){
		Result = Result * i;
	}
	
		document.getElementById("PRed").innerHTML=Result;
	
}

function ClickFob(){
	var a = 0;
	var b = 1;
	var c = 1;
	var Range = document.getElementById("Fob").value;

	for(var i=2; i<=Range; i++){
		c=a+b;
		a=b;
		b=c;
	}
	document.getElementById("FRed").innerHTML=c;
}