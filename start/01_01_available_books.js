// Write your code here
class book {
  constructor(
    title,author,ISBN,numCopies
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }; 

  // No need for this getter actually
  // can just return this.numCopies
  get numberOfBooksAvailable () {
    return this.numCopies;
  };

  get avalability() {

    if(this.numberOfBooksAvailable === 0) {
      return 'Out of stock';
    };

    if(this.numberOfBooksAvailable <10) {
      return 'Low stock';
    };

    return 'In stock';
  };

  sell(numberOfBooksSold) {
    numberOfBooksSold > 0 ?
     this.numCopies = this.numberOfBooksAvailable - numberOfBooksSold
     :
     this.numCopies = this.numberOfBooksAvailable - 1;
  };

  restock(numOfCopies) {
    numOfCopies > 0 ? 
    this.numCopies = this.numberOfBooksAvailable + numOfCopies
    : 
    this.numCopies = this.numberOfBooksAvailable + 5;
  };
};

// Testing code: 

const theIlliad = new book('The Illiad', 'Homer', 12345678910, 9);
console.log("checking availability: ", theIlliad.avalability);
console.log("checking num of books: ", theIlliad.numberOfBooksAvailable);
console.log("checking sell: ", theIlliad.sell(5));
console.log("checking availability again: ", theIlliad.avalability);
console.log("checking num of books again: ", theIlliad.numberOfBooksAvailable);
console.log("restock check: ", theIlliad.restock(20));
console.log("checking availability again: ", theIlliad.avalability);
console.log("checking num of books again: ", theIlliad.numberOfBooksAvailable);
console.log("restock check: ", theIlliad.restock());
console.log("checking availability again: ", theIlliad.avalability);
console.log("checking num of books again: ", theIlliad.numberOfBooksAvailable);
console.log("checking sell: ", theIlliad.sell());
console.log("checking availability again: ", theIlliad.avalability);
console.log("checking num of books again: ", theIlliad.numberOfBooksAvailable);


// Comparison with course code: 
//I noticed that in the restock and 

class BookAlternate {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  };

  // Getter
  get availability() {
    return this.getAvailability();
  };

  // Method 
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  };

  // We see if a default param is set ... 
  // Then it will set that as value if no param is provided
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  };
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  };
};

// Note that the original code involved working with prototypes
// Because functions are also objects ... 

// IDE also notes that this cna be converted to a class - highlighting best practice...
function bookPrototype(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
};

// using prototype keywork we cna add functions
bookPrototype.prototype.getAvailability = function() {
  if(this.numCopies === 0) {
    return 'Out of stock';
  };

  if(this.numCopies <10) {
    return 'Low stock';
  };

  return 'In stock';
};

// Testing prototype version:
const thingsFallApart = new bookPrototype('Things fall apart', 'Chinua Achebe', 321654987, 5);
console.log("checking prototype: ", thingsFallApart.getAvailability());
