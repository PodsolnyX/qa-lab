const requestFindLongestComSub = require("./requestFindComSub");
const each = require("jest-each").default;

describe("longestSub_StatusCodeAPIRequest", () => {
    describe("WithCorrectData_Return200", () => {
        each([
            ["abcegew", "gegeheje"],
            ["egwwnntn", "keineinffffemcune"],
            ["ecwneuicne", "vnneceeff"],
            ["znhcbubeuce", "wiwncbybe"],
        ]).it('Test:%#_StatusCodeAPIRequestWithCorrectData', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.statusCode).toEqual(200)
        });
    })

    describe("WithIncorrectData_Return400", () => {
        each([
            ["abce111gew", "gegeheje"],
            ["egwwnntn", "keinei555nffffemcune"],
            ["ecwne444uicne", "vnnec333eeff"],
            ["znhcbubeuFFFce", "wiDDD#wncbybe"],
            ["znhcbubeuFFFce", ""],
            ["", ""],
        ]).it('Test:%#_StatusCodeAPIRequestWithIncorrectData', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.statusCode).toEqual(400)
        });
    })

    describe("WithCorrectMethod_Return200", () => {
        each([
            ["abcegew", "gegeheje"],
            ["egwwnntn", "keineinffffemcune"],
            ["ecwneuicne", "vnneceeff"],
            ["znhcbubeuce", "wiwncbybe"],
        ]).it('Test:%#_"StatusCodeAPIRequestWithCorrectMethod', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2, "GET");
            expect(res.statusCode).toEqual(200);
        });
    })

    describe("WithIncorrectMethod_Return404", () => {
        each([
            ["abcegew", "gegeheje"],
            ["egwwnntn", "keineinffffemcune"],
            ["ecwneuicne", "vnneceeff"],
            ["znhcbubeuce", "wiwncbybe"],
        ]).it('Test:%#_StatusCodeAPIRequestWithIncorrectMethod', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2, "POST");
            expect(res.statusCode).toEqual(404);
        });
    })
})

describe("longestSub_BodyAPIRequest", () => {
    describe("WithCorrectData_ReturnResult", () => {
        each([
            ["abcegew", "gegeheje"],
            ["egwwnntn", "keineinffffemcune"],
            ["ecwneuicne", "vnneceeff"],
            ["znhcbubeuce", "wiwncbybe"],
        ]).it('Test:%#_BodyAPIRequestWithCorrectData', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(!!res.body.result).toEqual(true)
        });
    })

    describe("WithIncorrectData_ReturnResult", () => {
        each([
            ["abce44gew", "gegeheje"],
            ["egwwnntn", "keine444inffffemcune"],
            ["ecwnFFFeuicne", "vnneceeff"],
            ["znhcbu555beuce", "wiwn$$$cbybe"],
        ]).it('Test:%#_BodyAPIRequestWithIncorrectData', async (string1, string2) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(!!res.body.result).toEqual(false)
        });
    })
})

describe("longestSub_ResultAPIRequest", () => {
    describe("WhenIdenticalStrings_ReturnStringsLen", () => {
        each([
            ["abc", "abc", 3],
            ["asdfg", "asdfg", 5],
        ]).it('Test:%#_ResultAPIRequestWhenIdenticalStrings', async (string1, string2, expected) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.body.result).toEqual(expected)
        });
    })

    describe("WhenNoSuchSubsequence_ReturnZero", () => {
        each([
            ["abc", "def", 0],
            ["qryuitie", "zccnnf", 0],
        ]).it('Test:%#_ResultAPIRequestWhenNoSuchSubsequence', async (string1, string2, expected) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.body.result).toEqual(expected)
        });
    })

    describe("WhenLongStrings_ReturnLongestComSubsequenceLen", () => {
        each([
            ["aneyvbceuybecenuyejbcuckjenncebcheciwcnwicwncjencnjewckjweucencwjkneckwncewncwjcekebcyubjecbeyc", "mcuyebcyucetyncuewbcvcubemicwbcuwecinwcnncbwecyuwbcnwcevevbcnwnubcwucebbcuwbce", 46],
            ["ncybehcjeecuygeuwnjmicnweubcqbxeiocmbyueioicemverruieovmneiocmwicwecnwemcowcewmnewncwnce", "wockiwemcmybetvwiwjbewieocmrbeoeepvvneburbcevetcecywbcwecnwcekocmewiunyubgucwebcwc", 42],
            ["wcneyuctywevcbniucwnunceuwbnewuicjehuevbbneurenveiowcmmerjomcngqqqhcbeucwicmncwe", "aaanvcjhegcunceyweuicmwcneuwucbwncwnecnwecnnmciwhvwyecwwicnuyvcetcwehcjwecihewc", 34],
            ["knvhbvuhreincncbhnvfhvruncnneucewcnwncewncwycwecnwkdjndjbvhuencnwuegynnvwnriubvyubnvbwucbwcew", "poppoporjvrbvbrcwcwenynecuwbucuwencncbvhbvbeicnbhvknxuceygwoutytytybgwvcywwervrtbrtwcwcerrevecefe", 39]
        ]).it('Test:%#_ResultAPIRequestWhenLongStrings', async (string1, string2, expected) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.body.result).toEqual(expected)
        });
    })
})



