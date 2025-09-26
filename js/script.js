// welcome user
welcomeMessage();

function welcomeMessage(){
  let username = prompt("Enter your name:");
  if (username){
    document.getElementById("username").innerHTML=username;
  } else{
    alert('Welcome to my portofolio');
  }
};

// animasi smooth scroll
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },1000);
   
    e.preventDefault();
   });


// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

// filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});