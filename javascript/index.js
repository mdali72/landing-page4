


	
function start()
{
	 document.getElementById('form').style.display = "block";
}

function btn1()
{
	window.location = "loginForm.html"
}
function btn2()
{
	window.location = "signUpForm.html"
}

var modal = document.getElementById('btn_sec');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
ScrollReveal({ 
    reset: true,
    distance :"60px",
    duration :2500,
    delay :400 
 });
    ScrollReveal().reveal('.banner h1,#service h1 ', { delay: 200 , origin:'top'});

    ScrollReveal().reveal('.service,.service3 ,.service5,.about', { opacity:0, scale:0.8 ,interval: 600   });
   ScrollReveal().reveal('.service1,.service4,.service6,.about1', { opacity:0, scale:0.8 ,interval: 600    });


 