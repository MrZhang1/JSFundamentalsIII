
function personConstructor(name){
	var name = name;
	var distance_traveled =  0;
	// var say_name =  console.log(name);
	var say_something = function(param){console.log(name + ' ' + param)};
	// var walk = function(){console.log(name + ' ' + 'is walking'), distance_traveled+=3};
	// var run = function(){console.log(name + ' ' + 'is running'), distance_traveled+=10};
	// var crawl = function(){console.log(name + ' ' + 'is crawling'), distance_traveled+=1};
	function walk(){console.log(name + ' ' + 'is walking'), distance_traveled+=3};
	function run(){console.log(name + ' ' + 'is running'), distance_traveled+=10};
	function crawl(){console.log(name + ' ' + 'is crawling'), distance_traveled+=1};
	return {walk:walk,
			run: run,
			crawl: crawl,
	};
}

console.log(personConstructor('David').walk());
console.log(personConstructor('David').run());
console.log(personConstructor('David').crawl())



//JS version does not like default parameters set in arguments ( )
//function ninjaConstructor(name,cohort,beltlevel=1){}


function ninjaConstructor(name,cohort,beltlevel){
	var name = name;
	var cohort= cohort;
	var beltlevel;
	beltlevel = (typeof(beltlevel) != 'undefined') ? beltlevel : 1;
	var belts = {
		1: 'yellow belt',
		2: 'purple belt',
		3: 'red belt',
		4: 'black belt'
	};
	var level = function(){beltlevel +=1};
	if (beltlevel in belts){
		return belts[beltlevel];
	}
	else{
		return beltlevel;
	}
}


function ninjaConstructor(name){
	ninja = {};
	ninja.name = name;
	ninja.cohort = 'Seattle';
	ninja.beltlevel = 1;

	belts = {
		1: 'yellow belt',
		2: 'purple belt',
		3: 'red belt',
		4: 'black belt'
	};

	if (ninja.beltlevel in belts){
		
	}
	return ninja;
}

levelup = function(){};



// console.log(ninjaConstructor.leve('David', 'Seattle'));

// console.log(ninjaConstructor('David','Seattle').ninjaConstructor());