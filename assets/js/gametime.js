 window.onload = function () {

     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
     var hint ;
     var lives = 10 ;
     var counter;
     var fact = document.getElementById('fact');
     var population = document.getElementById('Population');
     var img = document.getElementById('countryimage');
     var randomCountry = {};
     var livesleft = document.getElementById('lives');
     

     var countries = [ {Country:'USA', fact: 'fact1', population: '100', image: './assets/images/flag-of-United-States-of-America.png'},
                       {Country:'CANADA', fact: 'fact2', population: '100', image: './assets/images/flag-of-Canada.png'},
                       {Country:'SPAIN', fact: 'fact3', population: '100', image: './assets/images/flag-of-Spain.png'},
                       {Country:'INDIA', fact: 'fact4', population: '100', image: './assets/images/flag-of-India.png'},
                       {Country:'AFGHANISTAN', fact: 'fact5', population: '100', image: './assets/images/flag-of-Afghanistan.png'},
                       {Country:'ALBANIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Albania.png'},
                       {Country:'ALGERIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Algeria.png'},
                       {Country:'ARGENTINA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Argentina'},
                       {Country:'AUSTRALIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Australia.png'},
                       {Country:'AZERBAIJAN', fact: 'fact5', population: '100', image: './assets/images/flag-of-Azerbaijan'},
                       {Country:'BELGIUM', fact: 'fact5', population: '100', image: './assets/images/flag-of-Belgium.png'},
                       {Country:'BOLIVIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Bolivia.png'},
                       {Country:'BRAZIL', fact: 'fact5', population: '100', image: './assets/images/flag-of-Brazil.png'},
                       {Country:'BULGARIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Bulgaria.png'},
                       {Country:'CAMBODIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Cambodia.png'},
                       {Country:'CHAD', fact: 'fact5', population: '100', image: './assets/images/flag-of-Chad.png'},
                       {Country:'DENMARK', fact: 'fact5', population: '100', image: './assets/images/flag-of-Denmark.png'},
                       {Country:'DOMINICA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Dominica.png'},
                       {Country:'ETHOPIA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Ethopia.png'},
                       {Country:'GERMANY', fact: 'fact5', population: '100', image: './assets/images/flag-of-Germany.png'},
                       {Country:'GUYANA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Guyana.png'},
                       {Country:'GHANA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Ghana.png'},
                       {Country:'HONDORUS', fact: 'fact5', population: '100', image: './assets/images/flag-of-Hondorus.png'},
                       {Country:'IRELAND', fact: 'fact5', population: '100', image: './assets/images/flag-of-Ireland.png'},
                       {Country:'KENYA', fact: 'fact5', population: '100', image: './assets/images/flag-of-Kenya.png'},]


     setUpletterPad();
     randomCountry = getRandomCountry();
     setRandomCountry();
     setupLives();

     // loop through alphabet array and place the buttons

     function setUpletterPad () {
     var letterpad = document.getElementById('letterpad');
     for (var i = 0; i < alphabet.length; i++) {

        var button = document.createElement('input');
        button.type = 'button';
        button.value = alphabet[i].toUpperCase();
        button.className = 'letter-styling';
        button.id = alphabet[i].toUpperCase();
        letterpad.appendChild(button);

      }

     }

     function setupLives () {
        livesleft.innerText = lives;
     }

     
     // Loop through the Country letters and placeholders with _ 
    function setRandomCountry () {
     var countryname = document.getElementById('countryinfo');
     var ulElement = document.createElement('ul');
     ulElement.id = 'countryinfoul';
     var uldashElement = document.createElement('ul');
     countryname.appendChild(ulElement);
     countryname.appendChild(uldashElement);

     for (var i = 0; i < randomCountry.Country.length; i++) {
              
        var liElement = document.createElement('li');
        liElement.className = 'li-placeholders bad';
        liElement.appendChild(document.createTextNode(randomCountry.Country[i]));
        ulElement.appendChild(liElement);
        
        var lidashElement = document.createElement('li');
        lidashElement.className = 'li-placeholders dash';
        uldashElement.appendChild(lidashElement);
     }

    fact.innerHTML = randomCountry.fact;
    fact.classList.add('bad');
    population.innerHTML = randomCountry.population;
    population.classList.add('bad');
    countryimage.setAttribute('src', randomCountry.image);
    countryimage.classList.add('bad');

    }  

     // Get Random Country 
     //console.log(getRandomCountry());

     function getRandomCountry () {

      randomCountry =  countries[Math.floor(Math.random()*countries.length)];
      return randomCountry;

     }

     // show the clue
     document.getElementById('hint').addEventListener('click', function() {
         fact.classList.remove('bad');
     });


     document.getElementById('letterpad').addEventListener('click', function(event) {
       //alert(event.target.id);
       var country = randomCountry.Country;
       //console.log(country);
       //console.log(event.target.id);
       //console.log(country.indexOf(event.target.id));
       var ul = document.getElementById('countryinfoul');
       var libadClass = ul.getElementsByClassName('bad');

       if (libadClass.length !== 0) {
           
       // console.log(libadClass.length);
       //Check the counter for lives
       if(lives !== 0)
       {
       if(country.indexOf(event.target.id) === -1) {
           //alert('not a match'); 
           lives --;
           setupLives();
           //lower the counter

       } else {
          //alert('match');
          // display the letters that matched
          var li = ul.getElementsByTagName('li');
          for (var i = 0; i < li.length; i++ ) {      
              if (li[i].innerText == event.target.id) {
                  li[i].classList.remove('bad');
              } else {

              }
           }
          document.getElementById(event.target.id).classList.add('gray');
       }
      } else {
       
         gamestatus.innerText = "Game Over Bro !!";
         document.getElementById('hint').disabled = true;
     }

         }  else {
           gamestatus.innerText = "You Win !!";
           document.getElementById('hint').disabled = true;
           countryimage.classList.remove('bad');
        }
     });

     //function checkforWin (li) {
     //   if()
     //}
    
    }