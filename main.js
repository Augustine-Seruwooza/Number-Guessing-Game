var i = Math.floor(Math.random()*100)+1;
var j =i%2;
if(j==0)
	alert("The number is an Even number");
else
	alert("The number is an odd number");
for(var count =1; count<=10;count++){
	let num = prompt ("Player please choose your number");
	if(num==i){
		alert("You guessed it right!!CONGRATS");
		break;
	}
	if (num<i){
		alert("The number you have chosen is lower, Choose a higher one!!");
	}
	if(num>i){
		alert("The number you have chosen is higher, Choose a lower one!!");
	}
	if(count==10){
		alert("You have used up your chances!!!Its official you have Lost")
	}
}
