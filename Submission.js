// Task 1
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

// Task 2
let letterCounter = function (letter, ignoreCapitalization) {
    return function (word) {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            if (ignoreCapitalization) {
                if (word[i].toLowerCase() === letter.toLowerCase()) {
                    count++;
                }
            } else {
                if (word[i] === letter) {
                    count++;
                }
            }
        }

        return count;
    };
};

function makeCharacter(characterName) {
    let farmingSkill = 0;
    let fishingSkill = 0;

    const name = characterName;

    let levelUp = function (skill) {
        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < 10) {
            fishingSkill++;
        }
    };

    let showSkill = function (skill) {
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