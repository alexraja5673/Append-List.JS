let x=document.getElementById("btn");
 x.addEventListener("click",function create(){
	 div=document.getElementById("head");
	let a=document.createElement("ul");
	div.appendChild(a);
	let li1=document.createElement("li");
	li1.innerHTML="ONE";
	a.appendChild(li1);
	let li2=document.createElement("li");
	li2.innerHTML="TWO";
	a.appendChild(li2);
	let li3=document.createElement("li");
	li3.innerHTML="THREE";
	a.appendChild(li3);
})
