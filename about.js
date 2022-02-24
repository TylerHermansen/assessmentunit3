console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

// function mOver(obj) {
// 	obj.innerHTML = "Grumpy cat says you are doing good"

// }

// var x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);


// function mOut(obj) {
// 	obj.getElementById("photo").addEventListener("mOut(this)", mOut, true);
// }
	

