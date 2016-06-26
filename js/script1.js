//ASSIGNMENT 3, PART 1

// STEP 1
/*
var movies = ['This is Spinal Tap', 'Big Hero 6', 'The Incredibles', 'Finding Dory', 'Harry Potter and the Prisoner of Azkaban'];
console.log(movies[1]);
*/

//STEP 2
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
console.log(movies[0]);
*/


// STEP 3
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies.push('Toy Story');
console.log(movies.length)
*/

// STEP 4
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
delete movies[0];
console.log(movies);
*/

// STEP 5
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

for (i=0; i<movies.length; i++){
	console.log(movies[i]);
}
*/

// STEP 6
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

for (var m in movies) {
	console.log(movies[m]);
}
*/

// STEP 7
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

for (var m in movies) {
	console.log(movies.sort()[m]);
}
*/

// STEP 8
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

var leastFavMovies = [];
leastFavMovies[0] = 'Wild, Wild West';
leastFavMovies[1] = 'The Ridiculous 6';
leastFavMovies[2] = 'Mall Cop 2';

console.log('Movies I like \n \n');
for (var m in movies) {
	console.log(movies[m]);
}
console.log('\n \nMovies I regret watching \n \n');
for (var r in leastFavMovies) {
	console.log(leastFavMovies[r]);
}
*/

// STEP 9
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

var leastFavMovies = [];
leastFavMovies[0] = 'Wild, Wild West';
leastFavMovies[1] = 'The Ridiculous 6';
leastFavMovies[2] = 'Mall Cop 2';
var allMovies = movies.concat(leastFavMovies);
(allMovies.sort());
console.log(allMovies.reverse());
*/

// STEP 10 	
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

var leastFavMovies = [];
leastFavMovies[0] = 'Wild, Wild West';
leastFavMovies[1] = 'The Ridiculous 6';
leastFavMovies[2] = 'Mall Cop 2';

var allMovies = movies.concat(leastFavMovies);
console.log(allMovies.pop());
*/

// STEP 11	
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

var leastFavMovies = [];
leastFavMovies[0] = 'Wild, Wild West';
leastFavMovies[1] = 'The Ridiculous 6';
leastFavMovies[2] = 'Mall Cop 2'

var allMovies = movies.concat(leastFavMovies);
console.log(allMovies.shift());
*/

// STEP 12  
/*
var movies = [];
movies[0] = 'This is Spinal Tap';
movies[1] = 'Big Hero 6';
movies[2] = 'The Incredibles';
movies[3] = 'Finding Dory';
movies[4] = 'Harry Potter and the Prisoner of Azkaban';
movies[5] = 'Toy Story';
movies[6] = 'Spirited Away';

var leastFavMovies = [];
leastFavMovies[0] = 'Wild, Wild West';
leastFavMovies[1] = 'The Ridiculous 6';
leastFavMovies[2] = 'Mall Cop 2';

var allMovies = movies.concat(leastFavMovies);
console.log(allMovies.indexOf('Wild, Wild West'));
console.log(allMovies.indexOf('The Ridiculous 6'));
console.log(allMovies.indexOf('Mall Cop 2'));
allMovies.splice(7, 8,'Elf', 'Galaxy Quest', 'The Lego Movie');

console.log(allMovies);
*/

// STEP 13	
/*
var employee1 = [];
employee1['employeeid'] = '001';
employee1['name'] = 'Joe Dirt';
employee1['title'] = 'Lead Digger';
employee1['department'] = 'Construction';
employee1['current'] = true;
var employee2 = [];
employee2['employeeid'] = '002';
employee2['name'] = 'Eddie Money';
employee2['title'] = 'Accountant';
employee2['department'] = 'Finance';
employee2['current'] = true;
var employees = [employee1,employee2];
console.log(employees[1]['name']);
*/

// STEP 14	
/*
var employee1 = [];
employee1['employeeid'] = '001';
employee1['name'] = 'Joe Dirt';
employee1['title'] = 'Lead Digger';
employee1['department'] = 'Construction';
employee1['current'] = true;
var employee2 = [];
employee2['employeeid'] = '002';
employee2['name'] = 'Eddie Money';
employee2['title'] = 'Accountant';
employee2['department'] = 'Finance';
employee2['current'] = true;
var employees = [employee1,employee2];
for (var i=0; i < employees.length; i++) {
		console.log(employees[i]['name']);
	}
*/

// STEP 15	
/*
var employee1 = [];
employee1['employeeid'] = '001';
employee1['name'] = 'Joe Dirt';
employee1['title'] = 'Lead Digger';
employee1['department'] = 'Construction';
employee1['current'] = true;

var employee2 = [];
employee2['employeeid'] = '002';
employee2['name'] = 'Eddie Money';
employee2['title'] = 'Accountant';
employee2['department'] = 'Finance';
employee2['current'] = true;

var employee3 = [];
employee3['employeeid'] = '003';
employee3['name'] = 'Unemployed McLoser';
employee3['title'] = 'Deadbeat';
employee3['department'] = 'Management';
employee3['current'] = false;
var employees = [employee1,employee2,employee3];


for (var i=0; i < employees.length; i++) {
		if(employees[i]['current']===true)
        	console.log(employees[i]['name']);
        }
*/


// STEP 16  
/*
var movies = ['Big Hero 6',1,'The Lego Movie',2,'This is Spinal Tap',3,'Galaxy Quest',4,'Elf',5];

var title = movies.filter(function(item) { 
	return typeof item === 'string';
});

console.log(title);
*/

// PRACTICE WITH FUNCTIONS

// STEP 1
/*
var displayMessage = function(x) {
	console.log(x);
}

displayMessage('an anonymous function does not have a name, that is why it is anonymous')
*/

// STEP 2
/*
function modMaker(x, y) {
	var result = x % y;
	console.log(result);
}

modMaker(6,4);
*/

// STEP 3
/*
var employees = ['Zak','Jessica','Mark','Fred','Sally'];
var showEmployee = function(x) {
	for (var e in employees) {
	console.log(employees[e]);
	}
}
console.log('Employees: \n \n');
showEmployee(employees);
*/