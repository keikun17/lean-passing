$(function () {

  function percent(a,b) {
    return(parseInt(a)/parseInt(b)*100)
  }

  function fetchFinal() {
    ave = percent( $("#finals_score").val(), $('#finals_total').val() );
    if ( !isNaN(ave) ) { return(ave) }
  }

  function fetchQuiz() {
    ave = percent( $("#quizzes_score").val(), $('#quizzes_total').val() );
    if ( !isNaN(ave) ) { return(ave) }
  }

  function fetchHomework() {
    ave =  percent ($("#homeworks_score").val() , $("#homeworks_total").val() )
    if ( !isNaN(ave) ) { return(ave) }
  }

  function fetchMidterm() {
    ave =  percent ($("#midterms_score").val() , $("#midterms_total").val() )
    if ( !isNaN(ave) ) { return(ave) }
  }

  function fetchProject() {
    ave =  percent ($("#projects_score").val() , $("#projects_total").val() )
    if ( !isNaN(ave) ) { return(ave) }
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

