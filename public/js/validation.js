var phone = document.querySelector('#grid-phone').value;
var password = document.querySelector('#grid-password').value;
var confirmPassword = document.querySelector('#grid-cPassword').value; 

var name  = document.querySelector('#name').value;
var email = document.querySelector('#email').value;
var msg = document.querySelector('#message').value;



function regisTration(){
    if(phone.length>=10 && phone.length <= 12){
       var div = document.createElement('div');
       div.className = 'temp';
        div.innerHTML = `phone error`;
        document.querySelector('.message').appendChild(div);
        return false;
    }
    if(password !=  confirmPassword){
        var div = document.createElement('div');
       div.className = 'temp';
        div.innerHTML = `not matching password`;
        document.querySelector('.message').appendChild(div);
        return false;
    }

}