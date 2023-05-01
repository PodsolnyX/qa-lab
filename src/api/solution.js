const findLongestCommonSubsequence = (text1, text2) => {

    const tabu = initTabu(text1, text2);
    search(text1, text2, tabu);
    return tabu[0][0];
}

const initTabu = (text1, text2) =>
    new Array((text1.length + 1)).fill()
        .map(() => new Array((text2.length + 1)).fill(0));

const search = (text1, text2, tabu) => {
    const [ n, m ] = [ text1.length, text2.length ];

    for (let x = (n - 1); (0 <= x); x--) {
        for (let y = (m - 1); (0 <= y); y--) {
            tabu[x][y] = (text1[x] === text2[y])
                ? (tabu[x + 1][y + 1] + 1)
                : Math.max(tabu[x + 1][y], tabu[x][y + 1]);
        }
    }
}

module.exports = findLongestCommonSubsequence;