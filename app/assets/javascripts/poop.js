$(function () {



  function fetchFinals(prediction) {
    if (($('#finals_total').val() !== '')) {
      return 'E may score ka na ng Finals e, icompute mo nalang.';
    }
  }

  function makePrediction() {
    var prediction = [] ;
    prediction.push('Default prediction');
    prediction.push(fetchFinals(prediction));

    if (prediction !== undefined){
      if (prediction.length > 0) {
        $('#prediction').html(prediction.join('<br>'));
        $('#predict').hide('slow');
        $('#prediction').show('fast');
      }
    }
  }
    

  $('#predict').on('click', makePrediction);
});

