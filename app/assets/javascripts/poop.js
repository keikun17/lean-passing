$(function () {
  var prediction = '';
  function makePrediction() {
    if(($('#finals_total').val() !== '')){
      prediction = 'E may score ka na ng Finals e, icompute mo nalang.' 
    }

    $('#prediction').text(prediction);
    $('#predict').hide('fast');
    $('#prediction').show('fast');
  }


  $('#predict').on('click', makePrediction);
})
