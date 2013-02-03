$(function () {

  prediction = [];

  function percent(a,b) {
    return(parseInt(a)/parseInt(b)*100)
  }


  function getEagerness(){
    var eagerness = 0;
    eagerness_coefficient = 33;

    table = {
      quiz: 15,
      homework: 5,
      project: 5,
      midterm: 3,
      final: 5 
    }

    if( isNaN(fetchQuiz()) ){
      eagerness_coefficient -= table["quiz"];
    }else{
      eagerness += fetchQuiz() * table["quiz"];
    }

    if( isNaN(fetchHomework()) ){
      eagerness_coefficient -= table["homework"];
    }else{
      eagerness += fetchHomework() * table["homework"];
    }

    if( isNaN(fetchProject()) ){
      eagerness_coefficient -= table["project"];
    }else{
      eagerness += fetchProject() * table["project"];
    }


    if( isNaN(fetchMidterm()) ){
      eagerness_coefficient -= table["midterm"];
    }else{
      eagerness += fetchMidterm() * table["midterm"];
    }


    if( isNaN(fetchFinal()) ){
      eagerness_coefficient -= table["final"];
    }else{
      eagerness += fetchFinal() * table["final"];
    }

    eagerness = eagerness / (eagerness_coefficient * 100) ;

    return eagerness;
  }

  function getConsistency(){
    // coefficient_prime = 28;
    // bs =  fetchQuiz()     * 0.03 ;
    // bs += fetchHomework() * 0.15 ;
    // bs += fetchProject()  * 0.02 ;
    // bs += fetchMidterm()  * 0.05 ;
    // bs += fetchFinal()    * 0.03 ;
    // bs = bs / coefficient_prime;
    // return bs;
    consistency = 0;
    consistency_coefficient = 28;

    table = {
      quiz: 3,
      homework: 15,
      project: 2,
      midterm: 5,
      final: 3 
    }

    if( isNaN(fetchQuiz()) ){
      consistency_coefficient -= table["quiz"];
    }else{
      consistency += fetchQuiz() * table["quiz"];
    }

    if( isNaN(fetchHomework()) ){
      consistency_coefficient -= table["homework"];
    }else{
      consistency += fetchHomework() * table["homework"];
    }

    if( isNaN(fetchProject()) ){
      consistency_coefficient -= table["project"];
    }else{
      consistency += fetchProject() * table["project"];
    }


    if( isNaN(fetchMidterm()) ){
      consistency_coefficient -= table["midterm"];
    }else{
      consistency += fetchMidterm() * table["midterm"];
    }


    if( isNaN(fetchFinal()) ){
      consistency_coefficient -= table["final"];
    }else{
      consistency += fetchFinal() * table["final"];
    }

    consistency = consistency / (consistency_coefficient * 100) ;

    return consistency;
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
    prediction = ['Predictions : '];

    var eagerness = getEagerness();
    var consistency = getConsistency();

    if( !isNaN(eagerness) ){
      console.log("Eagerness : " + eagerness);
      // 1 .. .7
      if( eagerness <= 1 && eagerness > .8 ){
        prediction.push("(Eagerness++) Wow you really want to pass huh?");
      // .7 .. .5
      }else if( eagerness <= .8 && eagerness > .6){
        prediction.push("(Eagerness+) You are on the right track. Keep your spirits up!");
     // .5 .. .3
      }else if( eagerness <= .6 && eagerness > .3 ){
        prediction.push("(Eagerness-) You have to do better than that.")
      }else if( eagerness <= .3 ){
        prediction.push("(Eagerness--) I don't think you want to pass this subject enough.")
      }
    };

    
    if( !isNaN(consistency) ){
      console.log("Consistency : " + consistency);
      // 1 .. .7
      if( consistency <= 1 && consistency > .8 ){
        prediction.push("(Consistency++) Solid performance!");
      // .7 .. .5
      }else if( consistency <= .8 && consistency > .6){
        prediction.push("(Consistency+) Those small victories will eventually add up. good job.");
     // .5 .. .3
      }else if( consistency <= .6 && consistency > .3 ){
        prediction.push("(Consistency-) You are bad. and you should feel bad.")
      }else if( consistency <= .3 ){
        prediction.push("(Consistency--) You are consistently bad.")
      }
    };

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
