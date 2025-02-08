class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// used extend keyword to inherit
class TechnicalBookClass extends Book {
  // inherits from previous class
  constructor(title, author, ISBN, numCopies, edition ) {
    super(title, author, ISBN, numCopies);
    // new property added here
    this.edition = edition;
  };

  // Getter
  get getEdition() {
    return `The curent verison of this book is ${this.edition}`;
  }
};

const newBook = new TechnicalBookClass("new title", "new author", "newISBN", 1991, "NewEdition");
console.log("checking", newBook.title);
console.log("Checking edition func: ", newBook.getEdition);
