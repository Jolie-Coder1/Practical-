const book = {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genres: ["Historical Fiction", "Tragedy"],

    
    summary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};


book.rating = 4.5;


book.year = 1959;


console.log("Book Summary:", book.summary());


console.log("Book Details:");

for (const [key, value] of Object.entries(book)) {
    console.log(`${key}:`, value);
}
