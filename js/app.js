$(document).ready(function() {
  

function newSong() {
$('.addTo').keydown(function (enter) {
  if (enter.keyCode == 13) {
      addSong();
    }
  });
}

newSong();
    
function addSong() {
    var txtBox = $('.addTo').val();
    var txtInput = '<li class="songs"><div class="holder"><img class="add" src="Images/confirm.png" ></div><span>' + txtBox + '</span>' +
                    '<img class="remove" src="Images/delete.png" ></li>';
    $('.playlist').prepend(txtInput);
    $('.addTo').val(' '); 
  }
     
});


$(document).on('click','.add',function() {
    $(this).closest('li').toggleClass('highlight');
});


$(document).on('click','.remove',function() {
    $(this).closest('li').remove();
});