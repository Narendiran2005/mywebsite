const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () =>{
	navDiv.classList.toggle('showNav')
});


function myFunction(){

    var user = document.forms["contact-form"]["name"].value;
    var pass = document.forms["contact-form"]["subject"].value;

    if (user=="naren" && pass==2005) {
     document.getElementById("diary").style.display = "block";
    }
    else{
       
    }

}


