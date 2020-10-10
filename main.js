
/*var icon= document.getElementById("icono");
function myFunction() {
    var x = document.getElementById("misLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if (x.style.width >= "600px"){
        x.style.display = "inline-block";
        icon.style.display= "none";
    } else{
      x.style.display = "inline-block";
    }
  }


*/
$("#icono").click(function(){
  $("#misLinks").toggle();
});


