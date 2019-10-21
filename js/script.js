console.log('Array of objects');

// THE PROPERTIES OF OBJECTS

var dogs = [
{
  name: "Dissel",
  id: "dog1",
  breed: "Golden Retriver",
  color: "golden",
  height: 70,
  age: 7,
  photo: "img/dog1.jpg"

},
{
  name: "Toby",
  id: "dog2",
  breed: "Whippet",
  color: "charcoal and white",
  height: 40,
  age: 3,
  photo: "img/dog2.jpg"
},
{
  name: "Old Boy",
  id: "dog3",
  breed: "Golden Retriver",
  color: "golden",
  height: 80,
  age: 13,
  photo: "img/dog3.jpg"
},
{
  name: "Squirmy",
  id: "dog4",
  breed: "Greyhound",
  color: "black and white",
  height: 90,
  age: 4,
  photo: "img/dog4.jpg"
},
{
  name: "PomPom",
  id: "dog5",
  breed: "Poodle",
  color: "golden",
  height: 40,
  age: 5,
  photo: "img/dog5.jpg"
}
];

// FUNCTION THAT INCLUDES ALL THE DOGS AND THEIR DATA

function allDetails(r) {
  document.getElementById('dog').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[r].name + '</h1>'
  + '<div class="row">'
  + '<div class="col">'
  + '<img class="img-thumbnail" src="' + dogs[r].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[r].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[r].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[r].height + '</h5>'
  + '</div>'
  + '</div>';
}

// ALL DOGS WILL APPEAR

function allDogs(){
for(var r = 0; r < dogs.length; r++) {
   allDetails(r);
}
}

document.getElementById('allDogs').addEventListener('click', function() {
  console.log(dogs);
  document.getElementById('dog').innerHTML = " "; // to clear the container
  for(var r = 0; r < dogs.length; r++) {
    if (dogs[r].breed === "allDogs") {
        allDetails(r);
      }
    }
});





// ONLY SHOWING POODLES

document.getElementById('poodle').addEventListener('click', function() {
  console.log(dogs);
    document.getElementById('dog').innerHTML = " "; // to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === "Poodle") {
      document.getElementById('dog').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
             + '<div class="row">'
             +'<div class="col">'
             + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>'
             + '</div>'
             + '<div class="col">'
             + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
             + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
             + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
             + '</div>'
             + '</div>';
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
});

document.getElementById('allDogs').addEventListener('click', function(){
  allDogs();
});
