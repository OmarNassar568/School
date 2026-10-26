// Task 1
let letterCounter = function (letter, ignoreCapitalization) {
    return function (word)
    {
        let count = 0
        let targetLetter = ignoreCapitalization ? letter.toLowerCase() : letter

        for (let i = 0; i < word.length; i++)
        {
            let currentChar = word[i];
            let checkChar = ignoreCapitalization ? currentChar.toLowerCase() : currentChar;
            if (checkChar === targetLetter) {
                count++
            }
        }
        return count
    }
}

function makeCharacter(characterName){
   // Variables in the closure
let farmingSkill = 0
let fishingSkill = 0
let name = characterName

    let levelUp = function (skill){
       if (skill === "farming")
       {
        if(farmingSkill < 10)
        {
            farmingSkill++
        }
       }
       if (skill === "fishing")
       {
        if(fishingSkill < 10)
        {
            fishingSkill++
        }
       }
    }

    /** 
      If the skill is "farming", showSkill should return farmingSkill.

      If the skill is "fishing", showSkill should return fishingSkill.

      Otherwise, do not return anything.
    **/
    let showSkill = function (skill)
    {
        if (skill === "farming")
        {
            return farmingSkill
        }
            else if (skill === "fishing")
            {
                return fishingSkill
            }
    }

    return {
        name,
        levelUp,
        showSkill
    }
}
// Task 2
function summarizeGrades(assignments) {
  let sum = 0;
  const count = assignments.length;
  const LATE_PENALTY_PER_DAY = 20;

  let assignment;
  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
      grade = grade - latePenalty >= 0 ? grade - latePenalty : 0;
    }
    sum += grade;
  }
  
  const lastGraded = assignment;
  return { average: sum / count, lastGraded: lastGraded.id };
}


