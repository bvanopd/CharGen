export default class Background {

  //define the list of static background objects to select from

  static backgrounds = [
    {
      name: "Artisan",
      freeSkill: "Craft",
      growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
      learningTable: ['Connect', 'Convince', 'Craft', 'Craft', 'Exert', 'Know', 'Notice', 'Trade']
    },

    { name: 'Barbarian',
     freeSkill: 'Survive',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Lead', 'Notice', 'Unarmed', 'Sneak', 'Survive'] 
    },

    { name: 'Carter',
     freeSkill: 'Ride',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Craft', 'Notice', 'Ride', 'Trade', 'Survive'] 
    },
    
    { name: 'Courtesan',
     freeSkill: 'Perform',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Convince', 'Notice', 'Perform', 'Trade', 'Survive'] 
    },
    
    { name: 'Criminal',
     freeSkill: 'Sneak',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Convince', 'Notice', 'Sneak', 'Trade', 'Administer'] 
    },
    
    { name: 'Hunter',
     freeSkill: 'Ranged',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Exert', 'Heal', 'Notice', 'Ride', 'Sneak', 'Ranged', 'Survive'] 
    },
    
    { name: 'Laborer',
     freeSkill: 'Work',
     growthTable: ['1All', '2Phys', '2Phys', '1All', 'Exert', 'AnySkill'],
     learningTable: ['Administer', 'Connect', 'Exert', 'Convince', 'Craft', 'Ride', 'AnySkill', 'AnySkill'] 
    },
    
    { name: 'Merchant',
     freeSkill: 'Trade',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Administer', 'Convince', 'Craft', 'Know', 'Notice', 'Trade'] 
    },
    
    { name: 'Noble',
     freeSkill: 'Lead',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Administer', 'Combat', 'Connect', 'Convince', 'Know', 'Lead', 'Notice', 'Ride'] 
    },
    
    { name: 'Nomad',
     freeSkill: 'Ride',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Lead', 'Notice', 'Ride', 'Survive', 'Trade'] 
    },
    
    { name: 'Peasant',
     freeSkill: 'Exert',
     growthTable: ['1All', '2Phys', '2Phys', '2Phys', 'Exert', 'AnySkill'],
     learningTable: ['Connect', 'Exert', 'Craft', 'Notice', 'Sneak', 'Survive', 'Trade', 'Work'] 
    },
    
    { name: 'Performer',
     freeSkill: 'Perform',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Exert', 'Notice', 'Perform', 'Perform', 'Sneak', 'Convince'] 
    },
    
    { name: 'Physician',
     freeSkill: 'Heal',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Administer', 'Connect', 'Craft', 'Heal', 'Know', 'Notice', 'Convince', 'Trade'] 
    },
    
    { name: 'Priest',
     freeSkill: 'Pray',
     growthTable: ['1All', '2Phys', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Administer', 'Connect', 'Know', 'Lead', 'Heal', 'Convince', 'Pray', 'Pray'] 
    },
    
    { name: 'Sailor',
     freeSkill: 'Sail',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Craft', 'Exert', 'Heal', 'Notice', 'Perform', 'Sail'] 
    },
    
    { name: 'Scholar',
     freeSkill: 'Know',
     growthTable: ['1All', '2Ment', '2Ment', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Administer', 'Heal', 'Craft', 'Know', 'Notice', 'Perform', 'Pray', 'Convince'] 
    },
    
    { name: 'Slave',
     freeSkill: 'Sneak',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Administer', 'Combat', 'AnySkill', 'Convince', 'Exert', 'Sneak', 'Survive', 'Work'] 
    },
    
    { name: 'Soldier',
     freeSkill: 'Combat',
     growthTable: ['1All', '2Phys', '2Phys', '2Phys', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Combat', 'Exert', 'Lead', 'Notice', 'Ride', 'Sneak', 'Survive'] 
    },
    
    { name: 'Thug',
     freeSkill: 'Combat',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Connect', 'AnySkill'],
     learningTable: ['Combat', 'Combat', 'Connect', 'Convince', 'Exert', 'Notice', 'Sneak', 'Survive'] 
    },
    
    { name: 'Wanderer',
     freeSkill: 'Survive',
     growthTable: ['1All', '2Phys', '2Phys', '2Ment', 'Exert', 'AnySkill'],
     learningTable: ['Combat', 'Connect', 'Notice', 'Perform', 'Ride', 'Sneak', 'Survive', 'Work'] 
    },

  ];


}