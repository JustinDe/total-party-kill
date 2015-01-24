var attack_ready = false;
var attack_to_use = 0;
var block_next_move = false;
console.log(linkingHero[currentHeros[0]].Attack1)
//attack_comes_from;

function call_attack(attack_key){
    //attack_comes_from = attack_source;//
    attack_ready = true;
    attack_to_use = attack_key;
    console.log()
    console.log("butt");
    if(attack_to_use == "Save Yourself"){
        //This character exits the battle
        console.log("Save Yourseeeeeeeeeelf");
    }
    else if(attack_to_use[0] == "Cleave"){
            //Do 1 damage to all enemies
            if(linkingEnemy[currentEnemies[0]] != 0){
                linkingEnemy[currentEnemies[0]].HP != 1
            }
            if(linkingEnemy[currentEnemies[1]] != 0){
                linkingEnemy[currentEnemies[1]].HP != 1
            }
            if(linkingEnemy[currentEnemies[2]] != 0){
                linkingEnemy[currentEnemies[2]].HP != 1
            }
            console.log("Cleave");
    }
}

function attack_monster(){//monster_to_attack){
    if(attack_ready){
        attack_to_use[1] = false;
        if(attack_to_use[0] == "Strike" 
        || attack_to_use[0] == "Jab" 
        || attack_to_use[0] == "Magic Arrow"){
            //Do 1 damage to an enemy
            //monster_to_attack.HP -= 1;
            console.log("Physical Attack");
        }
        
        else if(attack_to_use[0] == "Shield Bash"){
            //Do 1 damage to an enemy and block next attack
            //monster_to_attack.HP -= 1;
            block_next_move = true;
            console.log("Shield Bash MOFUKA!");
        }
        else if(attack_to_use[0] == "Smoke"){
            //Battle is over if you're a bitch
            console.log("SMOKE BITCH");
        }
        else if(attack_to_use[0] == "Poison"){
            //Do 2 damage to whoever
            //monster_to_attack.HP -= 2;
            console.log("POIIIISSSOONNNN");
        }
        else if(attack_to_use[0] == "Fireball"){
            //0 damage to fire enemy, 2 damage to ice enemy
            //if(monster_to_attack.Element == "Ice"){
            //    monster_to_attack.HP -=2;
            //}
            //else if(monster_to_attack.Element == "None"){
            //   monster_to_attack.HP -=1;
            //}
            console.log("Fire Stuff");
        }
        else if(attack_to_use[0] == "Blizzard"){
            //2 damage to fire enemy, 0 damage to ice enemy
            //if(monster_to_attack.Element == "Fire"){
            //    monster_to_attack.HP -=2;
            //}
            //else if(monster_to_attack.Element == "None"){
            //    monster_to_attack.HP -=1;
            //}
            console.log("Ice Stuff")
        }
        attack_ready = false;
    }
}

function monster_attacks_you(){

}

call_attack(linkingHero[currentHeros[0]].Attack3);

attack_monster();
//console.log(linkingHero[currentHeros[0]].Attack1[1]);