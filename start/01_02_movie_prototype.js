// Write your code here
function moviePrototype(
  title, 
  director, 
  genre, 
  releaseYear, 
  rating
  ) {

    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
};

moviePrototype.prototype.getOverview = function() {
  return `
    ${this.title}, a ${this.genre} film directed by 
    ${this.director} was released in ${this.releaseYear}. It
    received a rating of ${this.rating}.
  `;
};

const metropolis = new moviePrototype(
  'metropolis', 'Fritz Lang', 'Sci-Fi', 1927, '10/10'
);

console.log(metropolis.getOverview());

console.log('--------------------------------------');

// And now with class: 

class movieClass {
  constructor(
    title, 
    director, 
    genre, 
    releaseYear, 
    rating
  ) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  };

  getOverview() {
  return `
    ${this.title}, a ${this.genre} film directed by 
    ${this.director} was released in ${this.releaseYear}. It
    received a rating of ${this.rating}.
  `;
  };
};

const theGodfather = new movieClass(
  'The Godfather', 'Francis Ford Coppola', 'epic gangster', 1972, '10/10'
);

console.log(theGodfather.getOverview());
