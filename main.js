// https://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date
var end = new Date('02/03/2018 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Vertrokken';

            return;
        }
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = hours + 'h ';
        document.getElementById('countdown').innerHTML += minutes + 'm ';
        document.getElementById('countdown').innerHTML += seconds + 's';
    }

    timer = setInterval(showRemaining, 1000);


    var button = document.getElementsByClassName("remove");
    var lijst = document.getElementById("lijst");
    var download = document.getElementsByClassName("download");

         for (var i = 0; i < button.length; i++) {
             button[i].addEventListener('click', verwijderverhaal, false);
         }
         function verwijderverhaal() {

         var remove = this.parentElement;
         remove.parentNode.removeChild(remove);


        }
        //Met het stukje code hierboven verwijdren we verhalen als je op de remove knop drukt

     for (var i = 0; i < button.length; i++) {
         download[i].addEventListener('click', downloadverhaal, false);
     }
     function downloadverhaal() {
     this.innerHTML = "&#xe61E;";
     this.classList.add('downloaded');

     }

    var i = 0;

    function myLoop () {
       setTimeout(function () {
           var totalButtons = document.getElementsByClassName("verhaallijst").length;
           if (totalButtons == 0){
               lijst.innerHTML = "<p>Je hebt nog geen verhalen toegevoegd!</p>";
             i++;
           }
          if (i < 1) {
             myLoop();
          }
      }, 250);
    }
    myLoop();
    //Met de code hierboven kijken we elke 250ms of je nog verhalen hebt toegevoegd en anders wordt er een melding getoont

    var remove,
    popup,
        add,
        filters = document.getElementById("filters");
    document.addEventListener('click', function(e){ //wanneer er ergens op geklikt wordt wordt deze functie uitgevoerd
      if(e.target.classList.contains('hartje')){ //Als Waar op geklikt is de clas hartje bevat dan wordt deze functie uitgevoerd
          event.preventDefault(); //hiermee zorgen we dat de link waar op gelikt wordt niet meer doorlinkt
          var _this = e.target; //het opslaan van het element waar op geklikt wordt
          if(e.target.classList.contains('active')){//Als Waar op geklikt is de clas active bevat dan wordt deze functie uitgevoerd
              _this.src="Assets/Styles/Images/Hartjereverse.gif"; //hier wordt de src aangepast
              _this.classList.remove("active"); //class wordt verwijderd
              clearTimeout(add); //timeout verwijderd
              clearTimeout(remove);
              remove = setTimeout(function(){ _this.src="Assets/Styles/Images/Hartje.svg"; }, 1500); //het aanmaken van een functie met een timeout
              popup = _this.parentElement.querySelector('.popup');
              popup.classList.remove("active");
          }
          else{
            _this.src="Assets/Styles/Images/Hartje_2.gif";
            _this.classList.add("active");
            clearTimeout(add);
            clearTimeout(remove);
             add = setTimeout(function(){ _this.src="Assets/Styles/Images/Hartje_full.svg"; }, 1500);
             popup = _this.parentElement.querySelector('.popup');
             popup.classList.add("active");
             setTimeout(function(){ popup.classList.remove("active"); }, 6000);
          }

      }
      if(e.target.classList.contains('filter')){
                filters.classList.toggle("active");
      }
      if(e.target.classList.contains('searchbutton')){
         e.target.querySelector('.search').classList.add("active");
         e.target.querySelector('.search').focus(); //focus leggen op het search element
         e.target.querySelector('.search').select(); //selecteren van het search element
      }
  });
