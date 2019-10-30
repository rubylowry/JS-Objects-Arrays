console.log('Array of objects');

// THE PROPERTIES OF OBJECTS

var dogs = [
{
  name: "Dissel",
  id: "dog1",
  breed: "Golden Retriver",
  color: "Golden",
  height: 70,
  age: 7,
  photo: "img/dog1.jpg",
  photo1: "img/dog1again.jpg",
  photo2: "img/dog1againagain.jpg",
  photo3: "img/dog1againagainagain.jpg"

},
{
  name: "Toby",
  id: "dog2",
  breed: "Whippet",
  color: "Charcoal and white",
  height: 40,
  age: 3,
  photo: "img/dog2.jpg",
  photo1: "img/dog2again.jpg",
  photo2: "img/dog2againagain.jpg"
},
{
  name: "Old Boy",
  id: "dog3",
  breed: "Golden Retriver",
  color: "Golden",
  height: 80,
  age: 13,
  photo: "img/dog3.jpg",
  photo1: "img/dog3again.jpg",
  photo2: "img/dog3againagain.jpg"
},
{
  name: "Squirmy",
  id: "dog4",
  breed: "Greyhound",
  color: "Black and white",
  height: 90,
  age: 4,
  photo: "img/dog4.jpg",
  photo1: "img/dog4again.jpg",
  photo2: "img/dog4againagain.jpg"
},
{
  name: "PomPom",
  id: "dog5", // follows a pattern
  breed: "Poodle",
  color: "Golden",
  height: 40,
  age: 5,
  photo: "img/dog5.jpg",
  photo1: "img/dog5again.jpg",
  photo2: "img/dog5againagain.jpg"
}
];

var id = 1; // variable is used to generate id's for image

// FUNCTION THAT INCLUDES ALL THE DOGS AND THEIR DATA

function allDetails(r) {
  document.getElementById('dog').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[r].name + '</h1>'
  + '<div class="row">'
  + '<div class="col">'
  + '<img id="dog' + id.toString() + '" class="img-thumbnail myDogs" src=" ' + dogs[r].photo1 + '"  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[r].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[r].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[r].height + '</h5>'
  + '</div>'
  + '</div>';
  id++;
}

// ALL DOGS WILL APPEAR

// function allDogs(){
for(var r = 0; r < dogs.length; r++) {
   allDetails(r);
}
// };

// document.getElementById('allDogs').addEventListener('click', function() {
//   console.log(dogs);
//   document.getElementById('dog').innerHTML = " "; // to clear the container
//   for(var r = 0; r < dogs.length; r++) {
//     if (dogs[r].breed === "allDogs") {
         // allDetails(r);
//       }
//     }
// });





// ONLY SHOWING POODLES

document.getElementById('poodle').addEventListener('click', function() {
  console.log(dogs);
    document.getElementById('dog').innerHTML = " "; // to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === "Poodle") {
      allDetails(i);
      }
    }
  });


// ONLY SHOWING WHIPPETS

  document.getElementById('whippet').addEventListener('click', function() {
    console.log(dogs);
    document.getElementById('dog').innerHTML = " "; // to clear the container
    for(var r = 0; r < dogs.length; r++) {
      if (dogs[r].breed === "Whippet") {
          allDetails(r);
        }
      }
});

// ONLY SHOWING GOLDEN RETRIVERS

document.getElementById('goldenRetriver').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dog').innerHTML = " "; //to clear the container
    for(var i = 0; i < dogs.length; i++) {
      if (dogs[i].breed.indexOf("Golden Retriver") > (-1) ) {
     allDetails(i);
  }
}
});

// THIS IS WHERE THE USER CAN CHANGE A DOGS NAME

document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for(var i = 0; i < dogs.length; i++) {
    if (oldName === dogs[i].name){
      dogs[i].name = newName;
    }
  }
  console.log(dogs);
  allDogs();
});

document.getElementById('allDogs').addEventListener('click', function(){
  allDogs();
});


$('.myDogs').on('click', function(){
  console.log('dogs');
  console.log(this.id);

  $('.myModal').show();
  $('#hideContainer').hide();
  for (var i = 0; i < dogs.length ; i++) {
    console.log(typeof(dogs[i].id));
    console.log(dogs[i].id);
    console.log(i);
    console.log(dogs[i].id == this.id);
    //id property of dogs is checked for  equivalence with the image id of the clicked element
    if (this.id.trim() == dogs[i].id.trim()) {
      //remove leading and trailing space in the string while trying to match
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].color);
      console.log(dogs[i].height);
      console.log(dogs[i].age);
      document.getElementById('modalContent').innerHTML
      += '<div class="jumbotrons ml-5 text-info"> ' + dogs[i].name + '</br>'
      + dogs[i].breed + '</br>' + dogs[i].color + '</br>'
      + 'Height : ' + dogs[i].height + '</br>' + 'Age :' + dogs[i].age + '</div>' + '<br>'
      + '<div id="carouselExampleIndicators" class="carousel slide myCarousel" data-ride="carousel">'
      +      '<ol class="carousel-indicators">'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
      +         '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
      +      '</ol> <div class="carousel-inner"><div class="carousel-item active">'
      + '<img class="card-thumbnail  myDogs modalDog width="200" height="120" src="' + dogs[i].photo + '"  alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
      + '</div><div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo2 + '"  alt="Dog"/>'
      + '</div> </div>'
      + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Previous</span> </a>'
      + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Next</span> </a></div>';
      + '</br>'
      }
    }
});

$('.closeBar').on('click', function(){
  console.log('dogs');
  $('.myModal').hide();
  $('#hideContainer').show();
});
