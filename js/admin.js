var UserName=document.getElementById('UserName');
var Password=document.getElementById('Password');
localStorage.setItem('UserName', 'admin');
localStorage.setItem('Password', 'admin');
var user =localStorage.getItem('UserName');
var pass=localStorage.getItem('Password');

function save()
{
    if(UserName.value === user && Password.value === pass)
    {
location='../AdminOpt/adminOpt.html'
    }
    else
    {
        alert("User name or Password is Incorrect...!");
    }
}