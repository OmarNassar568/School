function createCharacter(charName, catName = null, initialSkills=[0,0,0]) {
    let fishingSkill = Number(initialSkills[0])
    let miningSkill = Number(initialSkills[1])
    let farmingSkill = Number(initialSkills[2])
    // Ensure initial skills do not exceed the maximum cap of 10
    if (fishingSkill > 10)
    {
        fishingSkill = 10
    }
    if (miningSkill > 10)
    {
        miningSkill = 10
    }
    if (farmingSkill > 10)
    {
        farmingSkill = 10
    }
    // Increases a specific skill by 1 if it exists and is under the cap
    function levelUp(skill) {
        if (this[skill] !== undefined && this[skill] < 10)
        {
            this[skill] = this[skill] + 1
        }
    }
    // Adds multiple items to the character's inventory array
   function grabItems(...items) {
        for (let i = 0; i < items.length; i++)
        {
            this.inventory.push(items[i])
        }
    }
    // Removes the first occurrence of a specific item from the inventory
   function dropItem(item) {
        let index = this.inventory.indexOf(item)
        if (index !== -1)
        {
            this.inventory.splice(index,1)
        }
    }

    let character = {                 
        characterName: charName,
        fishingSkill: fishingSkill,
        miningSkill: miningSkill,
        farmingSkill: farmingSkill,
        inventory: [],
        levelUp, 
        grabItems,
        dropItem,
    };
// Add catName as a property only if it is provided (not null)
    if (catName !==null)
    {
        character.catName = catName;
    }

    return character;                   
}


function describeCharacter(character) {

    let total = character.fishingSkill + character.miningSkill + character.farmingSkill
    let description = character.characterName;

    if (total < 10) {
        description += " is just starting out";
    } 
    else {
        description += " is a skilled adventurer";
    }
    // Ensure catName exists
    if (character.catName !== undefined)
    {
        description += ` and has a cat ${character.catName}`;
    }
    description += ".";
    console.log(description);
    return description;                 
}

let player = createCharacter("New Player", null)
player.levelUp("farmingSkill")
console.log(player.farmingSkill)
player.grabItems("Apple", "Peach") 
player.dropItem("Peach")
console.log(...player.inventory)
describeCharacter(player)