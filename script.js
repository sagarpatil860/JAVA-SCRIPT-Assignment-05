let i=0;
document.getElementById("add").addEventListener("click", funadd);
document.getElementById("decrease").addEventListener("click", fundecrease);
function funadd()
{
    i++;
    console.log(i);
    document.getElementById("mainvalue").innerHTML=i;
}

function fundecrease()
{
    i--;
    console.log(i);
    document.getElementById("mainvalue").innerHTML=i;
}