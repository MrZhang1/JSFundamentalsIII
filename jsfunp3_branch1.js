
function ninjaConstructor(name){
	ninja = {};
	ninja.name = name;
	ninja.cohort = 'Seattle';
	ninja.belt = 1;
	ninja.beltname = '';
	ninja.levelup = function(){
		ninja.belt += 1;
		if (ninja.belt in belts){
			ninja.beltname = belts[ninja.belt];
		}
		else{
			ninja.belt -=1;
			ninja.beltname = belts[ninja.belt];
		}
		return ninja.belt;
	};

	belts = {
		1: 'yellow belt',
		2: 'purple belt',
		3: 'red belt',
		4: 'black belt'
	};

	return ninja;
}


player1 = ninjaConstructor('David');
console.log(player1);
player1.ninja.levelup();
console.log(player1);
