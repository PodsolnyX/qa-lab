const findLongestCommonSubsequence = require("./solution");
const each = require("jest-each").default;

//-------------------------------------------ПограничныеТесты---------------------------------------------------------//
describe("longestSub_BorderlineTests", () => {
//Пустые строки выдают ошибку
    describe("StringLenEqual0ExceedsLeftLimit_ReturnException", () => {
        each([
            ["", "aaa"],
            ["aaa", ""],
            ["", ""],
        ]).it('Test:%#_StringLenEqual0ExceedsLeftLimit', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Strings length have to be more than 0");
        });
    })
//Строки длиной более 1000 выдают ошибку
    describe("StringLenEqual1001ExceedsRightLimit_ReturnException", () => {
        each([
            ["a".repeat(1001), "aaa"],
            ["aaa", "a".repeat(1001)],
            ["v".repeat(1001), "a".repeat(1001)],
            ["c".repeat(1001), "aaa"],
        ]).it('Test:%#_StringLenEqual1001ExceedsRightLimit', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Strings length have to be less than 1001");
        });
    })
//Строки длиной 1 НЕ выдают ошибку
    describe("StringLenEqual1NotExceedsLeftLimit_NotReturnException", () => {
        each([
            ["d", "deffefeegeg", 1],
            ["dedgeegge", "d", 1]
        ]).it('Test:%#_StringLenEqual1NotExceedsLeftLimit', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//Строки длиной 999 НЕ выдают ошибку
    describe("StringLenEqual999NotExceedsRightLimit_NotReturnException", () => {
        each([
            ["a".repeat(999), "defa", 1],
            ["a".repeat(999), "a".repeat(999), 999],
            ["dad", "a".repeat(999), 1]
        ]).it('Test:%#_StringLenEqual999NotExceedsRightLimit', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//Строки длиной 1000 НЕ выдают ошибку
    describe("StringLenEqual1000NotExceedsRightLimit_NotReturnException", () => {
        each([
            ["a".repeat(1000), "aaa", 3],
            ["aba", "b".repeat(1000), 1],
            ["vb".repeat(500), "b".repeat(1000), 500],
            ["ca".repeat(500), "aaa", 3],
        ]).it('Test:%#_StringLenEqual1000ExceedsRightLimit', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
})

//-----------------------------------------ТестыНаВходящиеСимволы-----------------------------------------------------//
describe("longestSub_InputCharactersTests", () => {
//Строки, включающие числа, выдают ошибку
    describe("StringIncludesNumbers_ReturnException", () => {
        each([
            ["11156ggr46646", "aaa"],
            ["aaa", "1f144441"],
            ["a437737aa", "1f1444344441"],
            ["a437737aa", "1"],
        ]).it('Test:%#_StringIncludesNumbers', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Invalid character");
        });
    })
//Строки, включающие кириллицу, выдают ошибку
    describe("StringIncludesCyrillic_ReturnException", () => {
        each([
            ["жжкпкvvvж", "vvv"],
            ["vvv", "жжddddж"],
            ["vдвоьаугашугvv", "жжddddж"],
        ]).it('Test:%#_StringIncludesCyrillic', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Invalid character");
        });
    })
//Строки, включающие спец символы, выдают ошибку
    describe("StringIncludesSpecialCharacters_ReturnException", () => {
        each([
            ["#fefeg##", "vvv"],
            ["vvv", "$eeff$$"],
            ["vv####v", "$eeff$$"],
        ]).it('Test:%#_StringIncludesSpecialCharacters', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Invalid character");
        });
    })
//Строки, включающие пробелы, выдают ошибку
    describe("StringIncludesSpacesCharacters_ReturnException", () => {
        each([
            ["njfenjf nef", "vvv"],
            ["vvv", "efewnifuhwyfwbfwef wbfyewfuwhfuwenfuw"],
            ["fuefhunfbeu enhebrubgeg", "jehfbher ebfyeufehfue"],
        ]).it('Test:%#_StringIncludesSpacesCharacters', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Invalid character");
        });
    })
//Строки, включающие латиницу в верхнем регистре, выдают ошибку
    describe("StringIncludesUppercaseEnglishCharacters_ReturnException", () => {
        each([
            ["AAfffA", "aaa"],
            ["vvv", "LOaaL"],
            ["VVV", "LOaaL"],
        ]).it('Test:%#_StringIncludesUppercaseEnglishCharacters', (string1, string2) => {
            expect(() => {
                findLongestCommonSubsequence(string1, string2)
            }).toThrow("Invalid character");
        });
    })
//Строки, включающие латиницу в нижнем регистре, НЕ выдают ошибку
    describe("StringIncludesLowercaseEnglishCharacters_NotReturnException", () => {
        each([
            ["aaa", "aaefefea", 3],
            ["vththtthvv", "vvv", 3],
        ]).it('Test:%#_StringIncludesLowercaseEnglishCharacters', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
})
//------------------------------------ТестыКорректностиОтветаВСпецСлучаях---------------------------------------------//
describe("longestSub_SpecialCasesTests", () => {
//Строка, являющиеся максимальной общей подпоследовательностью, возвращает длину этой строки
    describe("StringEqualCommonSub_ReturnStringLen", () => {
        each([
            ["ace", "abcde", 3],
            ["abcde", "ace", 3],
        ]).it('Test:%#_StringEqualCommonSub', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//Строка, являющиеся максимальной общей подпоследовательностью, длиной один возвращает один
    describe("StringIsSingleCharacterAndEqualCommonSub_ReturnOne", () => {
        each([
            ["a", "aaaa", 1],
            ["aaaa", "a", 1],
            ["aaaaavvvdvdss", "v", 1],
        ]).it('Test:%#_StringIsSingleCharacterAndEqualCommonSub', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//Одинаковые строки возвращают длину этих строк
    describe("IdenticalStrings_ReturnStringsLen", () => {
        each([
            ["abc", "abc", 3],
            ["asdfg", "asdfg", 5],
        ]).it('Test:%#_IdenticalStrings', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//При отсутствии общей подпоследовательностью возвращается ноль
    describe("NoSuchSubsequence_ReturnZero", () => {
        each([
            ["abc", "def", 0],
            ["qryuitie", "zccnnf", 0],
        ]).it('Test:%#_NoSuchSubsequence', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
})
//---------------------------------ТестыКорректностиОтветаВОбычныхСлучаях---------------------------------------------//
describe("longestSub_NormalCasesTests", () => {
//При коротких строках возвращается корректный ответ
    describe("WithShortStrings_ReturnLongestComSubsequenceLen", () => {
        each([
            ["abcegew", "gegeheje", 3],
            ["egwwnntn", "keineinffffemcune", 4],
            ["ecwneuicne", "vnneceeff", 4],
            ["znhcbubeuce", "wiwncbybe", 5],
        ]).it('Test:%#_NormalTestWithShortStrings', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//При длинных строках возвращается корректный ответ
    describe("WithLongStrings_ReturnLongestComSubsequenceLen", () => {
        each([
            ["aneyvbceuybecenuyejbcuckjenncebcheciwcnwicwncjencnjewckjweucencwjkneckwncewncwjcekebcyubjecbeyc", "mcuyebcyucetyncuewbcvcubemicwbcuwecinwcnncbwecyuwbcnwcevevbcnwnubcwucebbcuwbce", 46],
            ["ncybehcjeecuygeuwnjmicnweubcqbxeiocmbyueioicemverruieovmneiocmwicwecnwemcowcewmnewncwnce", "wockiwemcmybetvwiwjbewieocmrbeoeepvvneburbcevetcecywbcwecnwcekocmewiunyubgucwebcwc", 42],
            ["wcneyuctywevcbniucwnunceuwbnewuicjehuevbbneurenveiowcmmerjomcngqqqhcbeucwicmncwe", "aaanvcjhegcunceyweuicmwcneuwucbwncwnecnwecnnmciwhvwyecwwicnuyvcetcwehcjwecihewc", 34],
            ["knvhbvuhreincncbhnvfhvruncnneucewcnwncewncwycwecnwkdjndjbvhuencnwuegynnvwnriubvyubnvbwucbwcew", "poppoporjvrbvbrcwcwenynecuwbucuwencncbvhbvbeicnbhvknxuceygwoutytytybgwvcywwervrtbrtwcwcerrevecefe", 39],
        ]).it('Test:%#_NormalTestWithLongStrings', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
//При длинных и коротких строках возвращается корректный ответ
    describe("WithLongAndShortStrings_ReturnLongestComSubsequenceLen", () => {
        each([
            ["abcveveevwvwevewevvwevwncejhbcuwbndbfvhnkowucnmwvnyrcmwnvryveivjimeveuirnvunryehnjvmeinvueruvbvbeebebbeeqcbt", "deffff", 2],
            ["abcec", "dejnjencebvvriuvnrnvcnvcmnvjjffievnnvcmcnvirenivmcnvjrieuvccmnjcebycebeyvcebcef", 4],
            ["abmnrhincverwormmvmvrevirenvjchvgcbvcbcbcbbcbcbbjhgcvevbehbrhvvjehjbvhebchbvjvjecnwncebyuebhrnubnreccecubyguebc", "mbjvnbugrbv", 9],
            ["btyeer", "einvybnvuygrbcegwcuwebcxnvncmriuiyrbvnevncvfhvfvnncncbvbjfnfvjkdnkfjvnknjdkfuneuinvbyubrvybrriv", 5],
        ]).it('Test:%#_NormalTestWithLongAndShortStrings', (string1, string2, expected) => {
            expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
        });
    })
})

