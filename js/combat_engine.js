var attack_ready = false;
var attack_to_use = 0;
var block_next_move = false;

//attack_comes_from;

function call_attack(attack_key){
    //attack_comes_from = attack_source;//
    attack_ready = true;
    attack_to_use = attack_key;
    if(attack_to_use == "Save Yourself"){
        //This character exits the battle
        console.log("Save Yourseeeeeeeeeelf");
    }
    else if(attack_to_use[0] == "Cleave"){
            //Do 1 damage to all enemies
            console.log(linkingMonster[currentMonsters[0]])
            console.log(linkingMonster[currentMonsters[1]])
            console.log(linkingMonster[currentMonsters[2]])
            if(linkingMonster[currentMonsters[0]] != undefined){
                linkingMonster[currentMonsters[0]].HP -= 1
            }
            if(linkingMonster[currentMonsters[1]] != undefined){
                linkingMonster[currentMonsters[1]].HP -= 1
            }
            if(linkingMonster[currentMonsters[2]] != undefined){
                linkingMonster[currentMonsters[2]].HP -= 1
            }
            //console.log("Cleave");
    }
}

function attack_monster(monster_to_attack){
    if(attack_ready){
        attack_to_use[1] = false;
        if(attack_to_use[0] == "Strike" 
        || attack_to_use[0] == "Jab" 
        || attack_to_use[0] == "Magic Arrow"){
            //Do 1 damage to an enemy
            monster_to_attack.HP -= 1;
            console.log("Physical Attack");
        }
        
        else if(attack_to_use[0] == "Shield Bash"){
            //Do 1 damage to an enemy and block next attack
            monster_to_attack.HP -= 1;
            block_next_move = true;
        }
        else if(attack_to_use[0] == "Smoke"){
            //Battle is over if you're a bitch
        }
        else if(attack_to_use[0] == "Poison"){
            //Do 2 damage to whoever
            monster_to_attack.HP -= 2;
        }
        else if(attack_to_use[0] == "Fireball"){
            //0 damage to fire enemy, 2 damage to ice enemy
            if(monster_to_attack.Element == "Ice"){
                monster_to_attack.HP -=2;
            }
            else if(monster_to_attack.Element == "None"){
               monster_to_attack.HP -=1;
            }
        }
        else if(attack_to_use[0] == "Blizzard"){
            //2 damage to fire enemy, 0 damage to ice enemy
            if(monster_to_attack.Element == "Fire"){
                monster_to_attack.HP -=2;
            }
            else if(monster_to_attack.Element == "None"){
                monster_to_attack.HP -=1;
            }
        }
        attack_ready = false;
    }
}

/*function monster_attacks_you(){
    if(block_next_move){
        block_next_move = false;
    }
    else{
        var randHero = Math.floor(Math.random() * 5  ) + 1;
        var randAttack = Math.floor(Math.random() * 5  ) + 1;
        switch(randAttack){
            case 1:
                if(linkingHero[currentHeros[randHero]].Attack1[1] != false)

        }
        
    }
}*/

function count_heros(){
    var counter=0;
    for(i = 0; i < 5; i++){
        if(linkingHero[currentHeros[i]] != 0){
            counter += 1;
        }
    }
    return counter;
}

console.log(linkingMonster[currentMonsters[0]].HP);
call_attack(linkingHero[currentHeros[0]].Special2);
console.log(attack_to_use[0])
attack_monster(linkingMonster[currentMonsters[0]]);

console.log(linkingMonster[currentMonsters[0]].Element);

console.log(linkingMonster[currentMonsters[0]].HP);
//monster_attacks_you();
//console.log(linkingHero[currentHeros[0]].Attack1[1]);