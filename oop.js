class Movie {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    describe() {

       
    console.log(`${this.title} plays ${this.description}`);
    return `${this.title} plays ${this.description}`;
        }
        
}

class Genre {
    constructor(name) {
        this.name = name;
        this.movies = [];
    
        
    }

    addMovie(movie) {
        if( movie instanceof Movie) {
            this.movies.push(movie);
        }else{
            throw new Error(`You can only add an instance of Movie. 
            argument is not a movie: ${movie}`);
        
        }

    }
    describe() {
        return `${this.name} has ${this.movies.length} movies.`;
    }

}

// what drives the application and our choices

class Menu { 
constructor() {
    this.genres = [];
    this.selectedGenre = null;
}

// entry point to application

start() { 
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createGenre();
    break;
    case '2' :
    this.viewGenre();
    break;
    case '3' :
    this.deleteGenre();
    break;
    case '4' :
    this.displayGenre();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new genre
        2) view a genre
        3) delete a genre
        4) display all genre
        `);
        }

        showGenreMenuOptions(movieInfo) {
            return prompt(`
            0) back
            1) add a new movie
            2) delete a movie
            -----------------
            ${movieInfo}
            `);
            }

            displayGenre() {
             
                    let genreString = '';
                    for (let i = 0; i < this.genres.length; i++) {
                        genreString += i + ') ' + this.genres[i].name + '\n';
                    }
                    alert(genreString);
                }
                

    
                    createGenre() {
                        let name = prompt('Enter name for new genre: ');
                        this.genres.push(new Genre(name));
                    }
                    

                    viewGenre() {
                       
                            let index = prompt("Enter the index of the genre that you want to view:");
                            if (index > -1 && index < this.genres.length) {
                            this.selectedGenre = this.genres[index];
                            let description = 'Genre Name: ' + this.selectedGenre.name + '\n';
                            description += ' ' + this.selectedGenre.describe() + '\n ';
                            for (let i = 0; i < this.selectedGenre.movies.length; i++) {
                            
                            description += i + ') ' + this.selectedGenre.movies[i].describe() + '\n';
                            }


                            let selection1 = this.showGenreMenuOptions(description);
                              switch (selection1) {
                                case '1' :
                                    this.createMovie();
                                    break;
                                    case '2' :
                                    this.deleteMovie();
                                    }
                                    } // validate user input
                                    }
                                    
                                    deleteGenre() {
                                    let index = prompt('Enter the index of the genre that you wish to delete: ');
                                    if (index > -1 && index < this.genres.length) {
                                    this.genres.splice(index,1);
                                    }
                                    }
                                
                                    createMovie() {
                                       
                                     let title = prompt('Enter name for new movie: ');
                                     let description = prompt('Enter description for new movie: ');
                                     this.selectedGenre.addMovie(new Movie(title, description));
                                        }
                                        
                                        
                                        deleteMovie() {
                                        let index = prompt('Enter the index of the movie that you wish to delete: ');
                                        if (index > -1 && index < this.selectedGenre.movies.length) { this.selectedGenre.movies.splice(index,1);
                                        }
                                        }
                                        }
                                        let menu = new Menu();
                                        menu.start();
                                    

    
                                    
                                                        
                                    
                                    

        
                


                    
            

