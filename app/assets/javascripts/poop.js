$(function () {

  prediction = [];

  function percent(a,b) {
    return(parseInt(a)/parseInt(b)*100)
  }


  function getEagerness(){
    bs = 0;
    coefficient_prime = 33;

    table = {
      quiz: 15,
      homework: 5,
      project: 5,
      midterm: 3,
      final: 5 
    }

    if( isNaN(fetchQuiz()) ){
      coefficient_prime -= table["quiz"];
    }else{
      bs += fetchQuiz() * table["quiz"];
    }

    if( isNaN(fetchHomework()) ){
      coefficient_prime -= table["homework"];
    }else{
      bs += fetchHomework() * table["homework"];
    }

    if( isNaN(fetchProject()) ){
      coefficient_prime -= table["project"];
    }else{
      bs += fetchProject() * table["project"];
    }


    if( isNaN(fetchMidterm()) ){
      coefficient_prime -= table["midterm"];
    }else{
      bs += fetchMidterm() * table["midterm"];
    }


    if( isNaN(fetchFinal()) ){
      coefficient_prime -= table["final"];
    }else{
      bs += fetchFinal() * table["final"];
    }

    bs = bs / (coefficient_prime * 100) ;

    return bs;
  }

  function getConsistency(){
    coefficient_prime = 28;
    bs =  fetchQuiz()     * 0.03 ;
    bs += fetchHomework() * 0.15 ;
    bs += fetchProject()  * 0.02 ;
    bs += fetchMidterm()  * 0.05 ;
    bs += fetchFinal()    * 0.03 ;
    bs = bs / coefficient_prime;
    return bs;
  }

  function getDiskarte(){
    coefficient_prime = 24;
    bs =  fetchQuiz()     * 0.02 ;
    bs += fetchHomework() * 0.03 ;
    bs += fetchProject()  * 0.15 ;
    bs += fetchMidterm()  * 0.02 ;
    bs += fetchFinal()    * 0.02 ;
    bs = bs / coefficient_prime;
    return bs;
  }

  function getUselessKnowledge(){
    coefficient_prime = 40;
    bs =  fetchQuiz()     * 0.05 ;
    bs += fetchHomework() * 0.02 ;
    bs += fetchProject()  * 0.03 ;
    bs += fetchMidterm()  * 0.15 ;
    bs += fetchFinal()    * 0.15 ;
    bs = bs / coefficient_prime;
    return bs;
  }

  function fetchFinal() {
    ave = percent( $("#finals_score").val(), $('#finals_total').val() );
    // if ( !isNaN(ave) ) { prediction.push(ave) }
    return ave
  }

  function fetchQuiz() {
    ave = percent( $("#quizzes_score").val(), $('#quizzes_total').val() );
    // if ( !isNaN(ave) ) { prediction.push(ave) }
    return ave
  }

  function fetchHomework() {
    ave =  percent ($("#homeworks_score").val() , $("#homeworks_total").val() )
    // if ( !isNaN(ave) ) { prediction.push(ave) }
    return ave
  }

  function fetchMidterm() {
    ave =  percent ($("#midterms_score").val() , $("#midterms_total").val() )
    // if ( !isNaN(ave) ) { prediction.push(ave) }
    return ave
  }

  function fetchProject() {
    ave =  percent ($("#projects_score").val() , $("#projects_total").val() )
    // if ( !isNaN(ave) ) { prediction.push(ave) }
    return ave
  }

  function fetchTerrorLevel() {
    return "Terror level is " + $('#terror_level').val()
  }

  function makePrediction() {
    prediction = [];
    if( !isNaN(getEagerness()) ){
      console.log("Eagerness : " + getEagerness());
      // 1 .. .7
      if( getEagerness() <= 1 && getEagerness() > .8 ){
        prediction.push("(Eagerness++) Wow you really want to pass huh?");
      // .7 .. .5
      }else if( getEagerness() <= .8 && getEagerness() > .6){
        prediction.push("(Eagerness+) You are on the right track. Keep your spirits up!");
     // .5 .. .3
      }else if( getEagerness() <= .6 && getEagerness() > .3 ){
        prediction.push("(Eagerness-) You have to do better than that.")
      }else if( getEagerness() <= .3 ){
        prediction.push("(Eagerness--) I don't think you want to pass this subject enough.")
      }
    };
    getConsistency();
    getDiskarte();
    getUselessKnowledge();
    fetchTerrorLevel();

    if (prediction.length > 0) {
      $('#prediction').html(prediction.join('<br>'));
      // $('#predict').hide('slow');
      $('#prediction').show('fast');
    }
  };


  $('#predict').on('click', makePrediction);

});
