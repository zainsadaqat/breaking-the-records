function breakingRecords(scores) {
    let highestScore = 0;
    let lowestScore = 0;
    let min = 0;
    let max = 0;
    let count = 0;
    
    scores.forEach((score, index) => {
        if(index === 0) {
            lowestScore = highestScore = score;
        }
        else if(index > 0 ) {
            if(score > highestScore) {
                highestScore = score;
                max += 1;
            }
            if (score < lowestScore) {
                lowestScore = score;
                min += 1;
            }
        }
    })
    return [max, min];
}
