let countHome=0
let countGuest=0
el1 = document.getElementById("div1");
el2 =document.getElementById("div2")
function inc(num,s)
{
    num=Number(num)
    if (s==="div1")
    {
        countHome+=num;
        el1.textContent=countHome;
    }
    else{
        countGuest+=num;
        el2.textContent = countGuest;
    }
}