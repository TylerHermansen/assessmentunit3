console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited')
}


let form = document.querySelector('#contact')

form.addEventListener('submit', handleSubmit)

const photo = document.querySelector('#photo')

function cat(){
	alert('grumpy cat approves of this message')
}
photo.addEventListener('mouseover', cat)
