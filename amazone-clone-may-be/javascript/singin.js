// login 

function signinshow() 
{
    document.getElementById("loginbox").classList.remove("hidelog");
}

function invisible() 
{
    document.getElementById("loginbox").classList.toggle("hidelog");
}

function signup() 
{
    document.getElementById("signupbox").classList.remove("hidelog");
}

function invisiblesignup()
{
    document.getElementById("loginbox").classList.toggle("hidelog");
    document.getElementById("signupbox").classList.toggle("hidelog");
}

function log()
{
    document.getElementById("loginbox").classList.remove("hidelog");
    document.getElementById("signupbox").classList.toggle("hidelog");
}