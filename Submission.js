// Task 1
function summarizeGrades(assignments) {
  let sum = 0;
  const count = assignments.length;
  const LATE_PENALTY_PER_DAY = 20;

  // Declared outside the loop so lastGraded can access it after the loop ends
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

const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments));

// Task 2
let letterCounter = function (letter, ignoreCapitalization) {
    return function (word) {
        let count = 0;
        
        let targetLetter;
        if (ignoreCapitalization) {
            targetLetter = letter.toLowerCase();
        } else {
            targetLetter = letter;
        }

        for (let i = 0; i < word.length; i++) {
            let currentChar = word[i];
            
            let checkChar;
            if (ignoreCapitalization) {
                checkChar = currentChar.toLowerCase();
            } else {
                checkChar = currentChar;
            }

            if (checkChar === targetLetter) {
                count++;
            }
        }
        return count;
    };
};

function makeCharacter(characterName){
    let farmingSkill = 0;
    let fishingSkill = 0;
    let name = characterName;

    let levelUp = function (skill){
        if (skill === "farming") {
            if (farmingSkill < 10) {
                farmingSkill++;
            }
        } else if (skill === "fishing") {
            if (fishingSkill < 10) {
                fishingSkill++;
            }
        }
    };

    let showSkill = function (skill){
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }
    };

    return {
        name,
        levelUp,
        showSkill
    };
}