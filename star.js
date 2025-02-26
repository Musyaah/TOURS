function generateStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '* ';
        }
        console.log(stars.trim());
    }
}

// Number of rows for the pattern
const numberOfRows = 6;

// Generate and print the star pattern
generateStarPattern(numberOfRows);