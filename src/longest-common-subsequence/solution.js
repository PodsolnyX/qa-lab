const findLongestCommonSubsequence = (text1, text2) => {

    if (text1.length === 0 || text2.length === 0)
        throw new Error("Strings length have to be more than 0");
    if (text1.length > 1000 || text2.length > 1000)
        throw new Error("Strings length have to be less than 1001");

    if (!(/^[a-z]+$/.test(text1) && /^[a-z]+$/.test(text2))) {
        throw new Error("Invalid character");
    }

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