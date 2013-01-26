var prediction = '';
$(function () {

  function makePrediction() {
    if(($('#finals_total').val() !== '')){
      prediction = 'E may score ka na ng Finals e, icompute mo nalang.' 
    }

    if(prediction.length > 0){
      $('#prediction').text(prediction);
      $('#predict').hide('slow');
      $('#prediction').show('fast');
    };
  }

  $('#predict').on('click', makePrediction);
})
