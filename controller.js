function calculate(){
  //alert("asd");
  var nombre = $('#first-name').val();
  var apellido = $('#last-name').val();
  var largo = $('#length').val();
  var circunferencia = $('#girth').val();
  /*
  alert(nombre);
  alert(apellido);
  alert(largo);
  alert(circunferencia);
  */
  var rtado = Math.round((largo*circunferencia)/8);
  $('#resultado').html(rtado);
  $('#form-card').hide('slow');
  $('#result-card').show('slow');


}

function back(){
  $('#first-name').val("");
  $('#last-name').val("");
  $('#length').val("");
  $('#girth').val("");

  $('#result-card').hide('slow');
  $('#form-card').show('slow');


}
