//................................................................................
//1.Class Movie
/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("Thunivu","Zee studios", "PG-14");
console.log(movieDetails);

//output
/*
rating: "PG-14" 
studio: "Zee studios"
title: "Thunivu"
*/
//------------------------------------------------------------------------------------------------


//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Thunivu","Zee studios");
console.log(movie1);

//output
/*
rating: "PG" 
studio: "Zee studios"
title: "Thunivu"
*/

const movie2 = new movies("Thunivu","Zee studios","PG-14");
console.log(movie2);

//output
/*
rating: "PG-16" 
studio: "Zee studios"
title: "Thunivu"
*/

//----------------------------------------------------------------------------------------------------


/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 

// Output: 
/*
[ Moviee { title: 'Thunivu', studio: 'Zee studios', rating: 'PG' },
  Moviee { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' },
  Moviee { title: 'veeram', studio: 'Vijaya production', rating: 'PG' } ]
  */

//--------------------------------------------------------------------------------------------------



/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

    /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/
//................................................................................
//2.circle
class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
      
      //circle 1
      /*
      Circle [radius = 2 , color = green]
      Area: 12.566370614359172
      Circumference: 12.566370614359172
      */
      
      //circle 1
      /*
      Circle [radius = 5 , color = Yellow]
      Area: 78.53981633974483
      Circumference: 31.41592653589793
      */
//.................................................................................................
//  No.3 write a "Person" class to hold all the details

class Person{
    constructor(name,place,education,job,position,salery){
        this.name = name;
        this.place = place;
        this.education = education;
        this.job = job;
        this.position = position;
        this.salery = salery;
        this.skills = []
    }
    get getPosition(){
        return this.position
    }
    get getSalery(){
        return this.salery
    }
    set setSkills(skills){
        this.skills.push(skills)
    }
    come(){
        console.log(this.name,"Is present........")
    }
    toString(){
        return `I am ${this.name},from ${this.place}`
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }

}

// getting person 1 details and defining the class 
const person1 = new Person("Guru","Vellore","IT","Software Engineer","Developer",35000)
console.log(person1)
person1.come();


//getting person 2 details
const person2= new Person("Prasath","Vellore","IT","Software Engineer","Intern",15000)
console.log(person2)
person2.come();
let arr = [];
for(let i = 0; i<100 ;i++){
    arr.push(new Person("person"+(i+1),"place"+(i+1),"IT"));
}
console.log(arr);

// set the skills to the person and push on the console 
person1.setSkills = 1
person1.setSkills = "Full stack Development - Mern"
person1.setSkills = "Business Analysis"

person2.setSkills = 1
person2.setSkills = "Back end developer"
person2.setSkills = "Networking"

console.log(person1.skills);
console.log(person2.skills);

console.log(person1.toString());

console.log(Person.showDateTime())

//.............................................................................................
// 4.write a class to calculate the uber price

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());

  // output 150

