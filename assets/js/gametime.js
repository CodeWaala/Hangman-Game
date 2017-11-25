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
     

     var countries = [ {Country:'USA', fact: 'Slightly more than 69 percent of firefighters in this country are volunteers.', population: '325,365,189', image: './assets/images/flag-of-United-States-of-America.png'},
                       {Country:'CANADA', fact: 'Over half its residents have college degrees.', population: '32,623,490', image: './assets/images/flag-of-Canada.png'},
                       {Country:'SPAIN', fact: 'has the ninth-largest crude oil imports.', population: '46,064,604', image: './assets/images/flag-of-Spain.png'},
                       {Country:'INDIA', fact: 'Police officers in one state in this country are given a slight pay upgrade for having a moustache.', population: '1,281,935,911', image: './assets/images/flag-of-India.png'},
                       {Country:'AFGHANISTAN', fact: 'National game is "goat-grabbing"', population: '35,854,259', image: './assets/images/flag-of-Afghanistan.png'},
                       {Country:'ALBANIA', fact: 'Capital: Tirana', population: '2,934,363', image: './assets/images/flag-of-Albania.png'},
                       {Country:'ALGERIA', fact: 'Famous for its dry Sahara desert, which takes up most of the country.', population: '41,584,336', image: './assets/images/flag-of-Algeria.png'},
                       {Country:'ARGENTINA', fact: 'The country is famous for tango dance and music.', population: '44,688,864', image: './assets/images/flag-of-Argentina.png'},
                       {Country:'AUSTRALIA', fact: 'Driest of any continent on earth other than Antarctica.', population: '24,573,145', image: './assets/images/flag-of-Australia.png'},
                       {Country:'AZERBAIJAN', fact: 'Former Soviet republic.', population: '9,864,881', image: './assets/images/flag-of-Azerbaijan'},
                       {Country:'BELGIUM', fact: 'Country in Western Europe, is known for its medieval old towns, Flemish Renaissance architecture and international headquarters of the European Union and NATO.', population: '11,250,000', image: './assets/images/flag-of-Belgium.png'},
                       {Country:'BOLIVIA', fact: 'More than 60% of the citizens are indigenous, predominantly Quechua and Aymara.', population: '11,114,071', image: './assets/images/flag-of-Bolivia.png'},
                       {Country:'BRAZIL', fact: 'Largest country in South America', population: '209,900,535', image: './assets/images/flag-of-Brazil.png'},
                       {Country:'BULGARIA', fact: 'The oldest gold treasure in the world was found here', population: '7,144,653', image: './assets/images/flag-of-Bulgaria.png'},
                       {Country:'CAMBODIA', fact: 'There are 4 million land mines in this country', population: '16,096,881', image: './assets/images/flag-of-Cambodia.png'},
                       {Country:'CHAD', fact: 'A landlocked country', population: '15,353,184', image: './assets/images/flag-of-Chad.png'},
                       {Country:'DENMARK', fact: 'The UN World Happiness Report has rated people of this country as the happiest people on earth two years in a row', population: '5,754,356', image: './assets/images/flag-of-Denmark.png'},
                       {Country:'DOMINICA', fact: 'Tiny mountainous island nation in the Caribbean Sea.', population: '74,072', image: './assets/images/flag-of-Dominica.png'},
                       {Country:'ETHIOPIA', fact: 'Over 80 languages are spoken in this country.', population: '105,948,088 ', image: './assets/images/flag-of-Ethopia.png'},
                       {Country:'GERMANY', fact: 'largest population in European Union.', population: '82,182,896', image: './assets/images/flag-of-Germany.png'},
                       {Country:'GUYANA', fact: 'Only English-speaking country in South America.', population: '782,225', image: './assets/images/flag-of-Guyana.png'},
                       {Country:'GHANA', fact: 'It was once known as the gold coast, as the country is the second largest producer of gold in Africa.', population: '29,072,683', image: './assets/images/flag-of-Ghana.png'},
                       {Country:'HONDORUS', fact: 'Christopher Columbus discovered it.', population: '9,417,167', image: './assets/images/flag-of-Hondorus.png'},
                       {Country:'IRELAND', fact: 'Capital is home to over one quarter of the total population.', population: '4,777,960', image: './assets/images/flag-of-Ireland.png'},
                       {Country:'KENYA', fact: 'It is located in East Africa, on the equator.', population: '50,950,879', image: './assets/images/flag-of-Kenya.png'},]


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
          // display the letters that matched
          var li = ul.getElementsByTagName('li');
          for (var i = 0; i < li.length; i++ ) {      
              if (li[i].innerText == event.target.id) {
                  li[i].classList.remove('bad');
                  var libadClasscheck = ul.getElementsByClassName('bad');
                  if(libadClasscheck.length === 0) {
                      gamestatus.innerText = "You Win !!";
                      document.getElementById('hint').disabled = true;
                       countryimage.classList.remove('bad');
                      population.classList.remove('bad');
                  }
              } else {

              }
           }
          document.getElementById(event.target.id).classList.add('gray');
          document.getElementById(event.target.id).disabled = true
       }
      } else {
       
         gamestatus.innerText = "Game Over Bro !!";
         document.getElementById('hint').disabled = true;
     }

         }  else {
           gamestatus.innerText = "You Win !!";
           document.getElementById('hint').disabled = true;
           countryimage.classList.remove('bad');
           population.classList.remove('bad');
        }
     });


     // play again
     document.getElementById('playagain').addEventListener('click', function() {
            window.location.reload();
     });
    
    }