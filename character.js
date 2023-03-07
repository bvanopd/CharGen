import Background from "./background.js";

export default class Character{
  class;
  background;
  attributes;
  skills;
  bonuses;
  hitPoints;
  abilities;

  constructor(){

    this.attributes = this.rollStats();
    this.background = this.rollBackground();
    this.skills = this.rollSkills();
    this.bonuses = this.rollBonuses();
    this.class = this.rollClass();
    this.hitPoints = this.rollHp();
    this.abilities = this.setAbilities();
  }


  rollHp(){
    let charClass = this.class;
    let roll1 = Math.floor(Math.random()*6)+1;
    let roll2 = Math.floor(Math.random()*6)+1;
    let hp = Math.max(roll1,roll2);

    switch (charClass){
      case "Martial" :
        hp+=2;
        break;
      case "Arcane" :
        hp-=1;
        break;
    }
    if (hp<1){
      hp=1;
    }
    return hp;
  }
  rollStats(){
    //let attributeArray = ["str", "dex", "con", "int", "wis", "cha"];
    let attributeArray = [];
    for (let i=0; i<6; i++){
      //document.getElementById((attributeArray[i]) + "Box").value = rollStat();
      let stat= this.rollStat();
      attributeArray.push(stat);
    }
    return attributeArray;
  }

  rollStat(){
    let totalRoll=0;
    for (let i=0; i<3;i++){
      let diceRoll = Math.floor(Math.random()*6)+1;
      totalRoll +=diceRoll;
    }
    return totalRoll;
  }

  addStat(){
  }

  rollBackground(){
    let roll = Math.floor(Math.random()*19);
    console.log(roll);
    //let roll=0;
    let background = Background.backgrounds[roll];
    console.log(background);
    return background;
    // let roll1= Math.floor(Math.random()*6)+1;
    // let roll2= Math.floor(Math.random()*6)+1;
    // let roll3= Math.floor(Math.random()*8)+1;
    // let roll4= Math.floor(Math.random()*8)+1;

    // console.log("Growth roll: " + background.growthTable[roll1]);
    // console.log("Growth roll: " + background.growthTable[roll2]);
    // console.log("Skill roll: " + background.growthTable[roll3]);
    // console.log("Skill roll: " + background.growthTable[roll4]);

    //document.getElementById("backgroundBox").value = background.name;
  }

  rollSkills(){
    console.log(this.background.freeSkill);
    let skills = [this.background.freeSkill];
    let skill1 = this.background.learningTable[Math.floor(Math.random()*7)]
    let skill2 = this.background.learningTable[Math.floor(Math.random()*7)]
    skills.push(skill1);
    skills.push(skill2);
    return skills;
  }

  rollBonuses(){
    let bonuses = [];
    let bonus1 = this.background.growthTable[Math.floor(Math.random()*5)]
    let bonus2 = this.background.growthTable[Math.floor(Math.random()*5)]
    bonuses.push(bonus1);
    bonuses.push(bonus2);
    return bonuses;
  }

  rollClass(){
    let roll = Math.floor(Math.random()*4)+1;
    let val;
    if (roll== 1){
      val="Deft"
      }
    if (roll== 2){
      val="Martial"
      }
    if (roll== 3){
        val="Devout"
      }
      if (roll== 4){
          val="Arcane"
      }
      return val;
  }

  setAbilities(){
    let abilityList = [];
    if (this.class=='Deft'){
      abilityList.push('Fast Learner','Expertise');
    }
    if (this.class=='Martial'){
      abilityList.push('Battlemaster','Killing Blow');
    }
    return abilityList;
  }

}