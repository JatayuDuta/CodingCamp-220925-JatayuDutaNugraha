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

function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telepon = document.getElementById("telepon").value;
  let pesan = document.getElementById("message").value;
  let outputDiv = document.getElementById("hasilValidasi");
  let hasil = "";
  
  if(name === "" || email === "" || telepon === "" || pesan === ""){
    alert('Please fill all the blank form!');
  } else{
    hasil = `Nama: ${name} Email Anda: ${email} No telepon: ${telepon} pesan: ${pesan}`;
    hasil += `\n(Waktu: ${new Date().toLocaleString()})`; // Tambahkan waktu saat ini
    alert('Thanks'+ name + 'for Your Feedback!');
  };
  outputDiv.innerText = hasil;
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

