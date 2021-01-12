let change = document.querySelector('button');
let body = document.body;
let name = document.getElementById('demo');
let arr=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
change.addEventListener('click',color);
function color(){
	var hash='#';
	for(let x=0; x<6; x++){
		hash+=arr[Math.floor(Math.random()*arr.length)];
	}
	name.textContent="Color Hexa: " + hash;
	body.style.backgroundColor=hash;
	console.log(hash);
}
