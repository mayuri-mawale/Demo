
var d= new Date("Mar 2015 12");
function fun1()
{
document.getElementById("d1").innerHTML="GMT :"+d;
document.getElementById("d2").innerHTML="YEAR :"+d.getFullYear();
document.getElementById("d3").innerHTML="MONTH :"+(1+(d.getMonth()));
document.getElementById("d4").innerHTML="DAY :"+d.getDay();
document.getElementById("d5").innerHTML="TIME :"+d.getTime();
}


function fun2()
{
    var arr=[13,4,2,66,45,1];
document.getElementById("d8").innerHTML="Original Array"+arr;
arr.sort();
document.getElementById("d6").innerHTML="Sorted Array"+arr;
}
function fun3()
{
    var arr=[13,4,2,66,45,1];
  document.getElementById("d12").innerHTML="Original Array"+arr;
arr.sort(function(a,b){ return a-b });
document.getElementById("d7").innerHTML="Sorted Array"+arr;
}

var arr1=["Mayuri","Deepali","Vaishnavi","Komal"];
function fun4()
{
document.getElementById("d9").innerHTML="Original Array"+arr1;
arr1.sort();
document.getElementById("d10").innerHTML="Sorted Array"+arr1;
}
function fun5()
{
    var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a,b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  document.getElementById("d11").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
    
}
