$(function () {

  function fetchFinal() {
    if (($('#finals_total').val() !== '')) {
      return 'E may score ka na ng Finals e, icompute mo nalang.'
    }
  }


  function fetchQuiz() {
    if (($("#quizzes_total").val() !== '') && ($("#quizzes_score").val() !== '')) {
      return "Uy may quiz ka na"
    }
  }

  function fetchHomework() {
    if (($("#homeworks_total").val() !== '') && ($("#homeworks_score").val() !== '')) {
      return "Uy may homework ka na"
    }
  }

  function fetchMidterm() {
    if (($("#midterms_total").val() !== '') && ($("#midterms_total").val() !== '')) {
      return "Uy may midterm ka na"
    }
  }

  function fetchProject() {
    if (($("#projects_total").val() !== '') && ($("#projects_score").val() !== '')) {
      return "Uy may project ka na"
    }
  }

  function fetchTerrorLevel() {
    return "Terror level is " + $('#terror_level').val()
  }

  function makePrediction() {
    var prediction = [] ;
    prediction.push('Default prediction');
    prediction.push(fetchQuiz());
    prediction.push(fetchHomework());
    prediction.push(fetchProject());
    prediction.push(fetchMidterm());
    prediction.push(fetchFinal());
    prediction.push(fetchTerrorLevel());

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

