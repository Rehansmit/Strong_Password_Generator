
var charactor = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+{}[]?/|\/-";




function generatePassword () {

var password = " ";

for (var i = 0; i < 8; i++)
    {
        var randonIndex =Math.floor (Math.random()*charactor.length);

        password += charactor[randonIndex];
      
        console.log(password )
    }
 
}


document.getElementById ("inputPassword2").innerHTML = `<h3> ${password} </h3>`
 




