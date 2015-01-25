var attack_ready = false;
var attack_to_use = 0;
var block_next_move = false;
var hidden = [];
var living_heros = 5;
frame_counter = 0;
var char_index;
var mon_index;

//attack_comes_from;

function call_attack(attack_key, index){
    //attack_comes_from = attack_source;//
    char_index = index;
    console.log(currentMonsters);
    console.log("linkingMonster[currentMonsters]: " + linkingMonster[currentMonsters[0]])
    console.log("linkingMonster[currentMonsters]: " + linkingMonster[currentMonsters[1]])
    console.log("linkingMonster[currentMonsters]: " + linkingMonster[currentMonsters[2]])
    console.log(attack_key);
    attack_ready = true;
    attack_to_use = attack_key;
    if(attack_key[1] == false){
        //already_used();
        //alert("This move has been used. Pick a different one");
        $(attack_key[1]).addClass('Used');
        attack_ready = false;
        check_if_dead()
    }
    else if(attack_to_use[0] == "Save Yourself"){
        //This character exits the battle
        console.log("Save Yourseeeeeeeeeelf");
        bark(char_index, linkingHero[currentHeros[index]].RunAwayBark);
        hidden.push(index);
        console.log(hidden);
        attack_to_use[1] = false;
        check_if_dead();
        monster_attacks_you();
        if(living_heros == hidden.length){
                continueCombat();
            }
        updateUI();
        attack_ready = false;
        
    }
    else if(attack_to_use[0] == "Smoke"){
            //Battle is over if you're a bitch
            bark(char_index, linkingHero[currentHeros[index]].Special1Bark, 5);
            console.log("Smoke");
            attack_to_use[1] = false;
            updateUI();
            attack_ready = false;   
            check_if_dead();
            continueCombat();
            frame_counter++;
            console.log(frame_counter);
            
        }
    else if(attack_to_use[0] == "Cleave"){
            //Do 1 damage to all enemies
            bark(char_index, linkingHero[currentHeros[index]].Special1Bark, 4);
            console.log(linkingMonster[currentMonsters[0]]);
            console.log(linkingMonster[currentMonsters[1]]);
            console.log(linkingMonster[currentMonsters[2]]);
            if(linkingMonster[currentMonsters[0]] != undefined){
                linkingMonster[currentMonsters[0]].HP -= 1;
            }
            if(linkingMonster[currentMonsters[1]] != undefined){
                linkingMonster[currentMonsters[1]].HP -= 1;
            }
            if(linkingMonster[currentMonsters[2]] != undefined){
                linkingMonster[currentMonsters[2]].HP -= 1;
            }
            attack_to_use[1] = false;
            updateUI();
            attack_ready = false
            check_enemy_death()
            
            //console.log("Cleave");
    }
}

function attack_monster(monster_to_attack, index){
    //console.log("Monster just clicked " + monster_to_attack);
    mon_index = index;
    if(attack_ready && monster_to_attack != ""){
        attack_to_use[1] = false;
        if(attack_to_use[0] == "Strike" 
        || attack_to_use[0] == "Jab" 
        || attack_to_use[0] == "Magic Arrow"){
            //Do 1 damage to an enemy
            monster_to_attack.HP -= 1;
            console.log("Physical Attack");
            bark(char_index, linkingHero[currentHeros[index]].Attack1Bark, mon_index);
            console.log("Remaining HP: " + monster_to_attack.HP)
        }
        
        else if(attack_to_use[0] == "Shield Bash"){
            //Do 1 damage to an enemy and block next attack
            monster_to_attack.HP -= 1;
            block_next_move = true;
            console.log("Shield Bash");
            bark(char_index, linkingHero[currentHeros[index]].Special2Bark, mon_index);
            console.log("Remaining HP: " + monster_to_attack.HP)   
        }
        else if(attack_to_use[0] == "Poison"){
            //Do 2 damage to whoever
            monster_to_attack.HP -= 2;
            console.log("Poison");
            bark(char_index, linkingHero[currentHeros[index]].Special2Bark, mon_index);
            console.log("Remaining HP: " + monster_to_attack.HP)
        }
        else if(attack_to_use[0] == "Fireball"){
            //0 damage to fire enemy, 2 damage to ice enemy
            bark(char_index, linkingHero[currentHeros[index]].Special1Bark, mon_index);
            if(monster_to_attack.Element == "Ice"){
                monster_to_attack.HP -=2;
                console.log("Fireball on ice enemy");
                console.log("Remaining HP: " + monster_to_attack.HP)
            }
            else if(monster_to_attack.Element == "None"){
               monster_to_attack.HP -=1;
               console.log("Fireball on normal enemy");
               console.log("Remaining HP: " + monster_to_attack.HP)
            }
            else{
                console.log("Fireball on fire enemy");
                console.log("Remaining HP: " + monster_to_attack.HP)
            }
        }
        else if(attack_to_use[0] == "Blizzard"){
            //2 damage to fire enemy, 0 damage to ice enemy
            bark(char_index, linkingHero[currentHeros[index]].Special2Bark, mon_index);
            if(monster_to_attack.Element == "Fire"){
                monster_to_attack.HP -=2;
                console.log("Remaining HP: " + monster_to_attack.HP)
                console.log("Blizzard on fire enemy");
            }
            else if(monster_to_attack.Element == "None"){
                monster_to_attack.HP -=1;
                console.log("Remaining HP: " + monster_to_attack.HP)
                console.log("Blizzard on normal enemy");
            }
            else{
                console.log("Remaining HP: " + monster_to_attack.HP)
                console.log("Blizzard on ice enemy");
            }
        }
        check_if_dead()
        updateUI();
        check_enemy_death();
        //monster_attacks_you();
        attack_ready = false;
        
            //console.log(monster_to_attack);
            //console.log(currentMonsters);
            //console.log("Monster should be dead");
            //console.log(linkingMonster[currentMonsters]);
        
    }
}

function bark(index, attack_key, enemy_index){
    //console.log("Bark Index: " + index);
    //console.log("Bark Key: " + attack_key);
    loadBark(attack_key, enemy_index)
}

function check_enemy_death(){
    if(linkingMonster[currentMonsters[0]] != undefined){
        if(linkingMonster[currentMonsters[0]].HP <= 0){
            currentMonsters[0] = "";
            linkingMonster[currentMonsters[0]] = "";
            console.log("Hit the first dude")
        }
    }
    if(linkingMonster[currentMonsters[1]] != undefined){
        if(linkingMonster[currentMonsters[1]].HP <= 0){
            currentMonsters[1] = "";
            linkingMonster[currentMonsters[1]] = "";
            console.log("Hit the second dude")
        }
    }
    if(linkingMonster[currentMonsters[2]] != undefined){
        if(linkingMonster[currentMonsters[2]].HP <= 0){
            currentMonsters[2] = "";
            linkingMonster[currentMonsters[2]] = "";
            console.log("Hit the third dude")
        }
    }
    if(linkingMonster[currentMonsters[0]] == ""
                    && linkingMonster[currentMonsters[1]] == "" 
                    && linkingMonster[currentMonsters[2]] == ""){
        console.log("ALL DEAD");
        frame_counter++;
        console.log(frame_counter)
        continueCombat();

    }
    else{
        monster_attacks_you();
    }
}

function monster_attacks_you(){
    var leave_loop = false;
    if(block_next_move){
        block_next_move = false;
    }
    else{
        var randHero = Math.floor(Math.random() * 5  ); 
        while(currentHeros[randHero] == 0 || hidden.indexOf(randHero) != -1){
            randHero = Math.floor(Math.random() * 5  ) + 1;
        }
        //console.log("Hero hit:" + randHero);
        while(leave_loop == false){
            var randAttack = Math.floor(Math.random() * 5  ) + 1;
            switch(randAttack){
                case 1:
                    if(linkingHero[currentHeros[randHero]].Attack1[1] != false){
                        linkingHero[currentHeros[randHero]].Attack1[1] = false;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 2:
                    if(linkingHero[currentHeros[randHero]].Attack2[1] != false){
                        linkingHero[currentHeros[randHero]].Attack2[1] = false;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 3:
                    if(linkingHero[currentHeros[randHero]].Special1[1] != false){
                        linkingHero[currentHeros[randHero]].Special1[1] = false;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 4:
                    if(linkingHero[currentHeros[randHero]].Special2[1] != false){
                        linkingHero[currentHeros[randHero]].Special2[1] = false;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 5:
                    if(linkingHero[currentHeros[randHero]].RunAway[1] != false){
                        linkingHero[currentHeros[randHero]].RunAway[1] = false
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                }
        }
        //console.log("now hero " + randHero + " can't use attack " + randAttack)
        updateUI();
        check_if_dead();
    }
}

function monster_unattacks_you(){
    var leave_loop = false;
        while(leave_loop == false){
            var randHero = Math.floor(Math.random() * 5  ); 
            while(currentHeros[randHero] == 0 || hidden.indexOf(randHero) != -1){
                randHero = Math.floor(Math.random() * 5  ) + 1;
            }
            //console.log("Hero hit:" + randHero);
            var randAttack = Math.floor(Math.random() * 5  ) + 1;
            switch(randAttack){
                case 1:
                    if(linkingHero[currentHeros[randHero]].Attack1[1] != true){
                        linkingHero[currentHeros[randHero]].Attack1[1] = true;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 2:
                    if(linkingHero[currentHeros[randHero]].Attack2[1] != true){
                        linkingHero[currentHeros[randHero]].Attack2[1] = true;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 3:
                    if(linkingHero[currentHeros[randHero]].Special1[1] != true){
                        linkingHero[currentHeros[randHero]].Special1[1] = true;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 4:
                    if(linkingHero[currentHeros[randHero]].Special2[1] != true){
                        linkingHero[currentHeros[randHero]].Special2[1] = true;
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                case 5:
                    if(linkingHero[currentHeros[randHero]].RunAway[1] != true){
                        linkingHero[currentHeros[randHero]].RunAway[1] = true
                        leave_loop = true;
                        break;
                    }
                    else{
                        break;
                    }
                }
        }
        //console.log("now hero " + randHero + " can't use attack " + randAttack)
        updateUI();
}

function check_if_dead(){
    for(i = 0; i < 5; i++){
        if(currentHeros[i]== 0){
        }
        else if(linkingHero[currentHeros[i]].Attack1[1] == false &&
        linkingHero[currentHeros[i]].Attack2[1] == false &&
        linkingHero[currentHeros[i]].Special1[1] == false &&
        linkingHero[currentHeros[i]].Special2[1] == false &&
        linkingHero[currentHeros[i]].RunAway[1] == false){
            currentHeros[i] = 0;
            living_heros -= 1;
            console.log("The person at " + i + " died!");
            console.log(currentHeros);
            console.log("Hidden dudes: " + hidden.length);
            if(living_heros <= hidden.length){
                continueCombat();
            }
            updateUI();
        }

    }
}

/*console.log(linkingMonster[currentMonsters[0]].HP);
call_attack(linkingHero[currentHeros[0]].Special1);
console.log(attack_to_use[0]);
attack_monster(linkingMonster[currentMonsters[0]]);

console.log(linkingMonster[currentMonsters[0]].Element);

console.log(linkingMonster[currentMonsters[0]].HP);
//monster_attacks_you();
//console.log(linkingHero[currentHeros[0]].Attack1[1]);*/