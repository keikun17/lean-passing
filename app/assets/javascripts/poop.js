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
    if (($("#homework_total").val() !== '') && ($("#homework_score").val() !== '')) {
      return "Uy may homework ka na"
    }
  }

  function fetchMidterm() {
    if (($("#homework_total").val() !== '') && ($("#homework_score").val() !== '')) {
      return "Uy may midterms ka na"
    }
  }

  function fetchProject() {
    if (($("#project_total").val() !== '') && ($("#project_score").val() !== '')) {
      return "Uy may midterms ka na"
    }
  }

  function makePrediction() {
    var prediction = [] ;
    prediction.push('Default prediction');
    prediction.push(fetchQuiz());
    prediction.push(fetchHomework());
    prediction.push(fetchProject());
    prediction.push(fetchMidterm());
    prediction.push(fetchFinal());

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

