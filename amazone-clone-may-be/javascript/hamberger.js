// side bar

function sidebar() 
{
    document.getElementById("sidebar").classList.toggle("show");
}

function hide() 
{
    document.getElementById("sidebar").classList.remove("show");
}

function category() 
{
    document.getElementById("category").classList.toggle("showcat");
    document.getElementById("collection").classList.remove("showcol");
}

function collection() 
{
    document.getElementById("collection").classList.toggle("showcol");
    document.getElementById("category").classList.remove("showcat");
}

function listhide() 
{
    document.getElementById("category").classList.remove("showcat");
    document.getElementById("collection").classList.remove("showcol");
}

function sidebarfix() 
{
    document.getElementById("sidebar").classList.remove("fixed");
}