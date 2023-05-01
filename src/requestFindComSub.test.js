const requestFindLongestComSub = require("./requestFindComSub");
const each = require("jest-each").default;

//Тесты статус кода запроса
describe("longestSub_StatusCodeAPIRequest", () => {
    //При корректных данных возвращается статус-код 200
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
    //При некорректных данных возвращается статус-код 400
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
    //При корректном методе возвращается статус-код 200
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
    //При некорректном методе возвращается статус-код 404
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

//Тесты тела запроса
describe("longestSub_BodyAPIRequest", () => {
    //При корректных данных в теле запроса есть результат
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
    //При некорректных данных в теле запроса нет результата
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

//Тесты результата в теле запроса
describe("longestSub_ResultAPIRequest", () => {
    //При запросе с одинаковыми строками в результате тела запроса возвращается их длина
    describe("WhenIdenticalStrings_ReturnStringsLen", () => {
        each([
            ["abc", "abc", 3],
            ["asdfg", "asdfg", 5],
        ]).it('Test:%#_ResultAPIRequestWhenIdenticalStrings', async (string1, string2, expected) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.body.result).toEqual(expected)
        });
    })
    //При запросе с строками без общей подпоследовательности в результате тела запроса возвращается ноль
    describe("WhenNoSuchSubsequence_ReturnZero", () => {
        each([
            ["abc", "def", 0],
            ["qryuitie", "zccnnf", 0],
        ]).it('Test:%#_ResultAPIRequestWhenNoSuchSubsequence', async (string1, string2, expected) => {
            const res = await requestFindLongestComSub(string1, string2);
            expect(res.body.result).toEqual(expected)
        });
    })
    //При запросе с длинными строками в результате тела запроса возвращается корректная длина общей подпоследовательности
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



