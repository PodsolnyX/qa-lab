const findLongestCommonSubsequence = require("./solution");
const each = require("jest-each").default;

describe("longestSub_StringLenEqual0ExceedsLeftLimit_ReturnException", () => {
    each([
        ["", "aaa"],
        ["aaa", ""]
    ]).it('Test:%#_StringLenEqual0ExceedsLeftLimit', (string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})

describe("longestSub_StringLenEqual1000ExceedsRightLimit_ReturnException", () => {
    each([
        ["a".repeat(1000), "aaa"],
        ["aaa", "b".repeat(1000),],
        ["v".repeat(1000), "b".repeat(1000),],
        ["ca".repeat(500), "aaa"],
    ]).it('Test:%#_StringLenEqual1000ExceedsRightLimit', (string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})

describe("longestSub_StringLenEqual1001ExceedsRightLimit_ReturnException", () => {
    each([
        ["a".repeat(1001), "aaa"],
        ["aaa", "a".repeat(1001)],
        ["v".repeat(1001), "a".repeat(1001)],
        ["c".repeat(1001), "aaa"],
    ]).it('Test:%#_StringLenEqual1001ExceedsRightLimit', (string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})

describe("longestSub_StringLenEqual999NotExceedsRightLimit", () => {
    each([
        ["a".repeat(999), "defa", 1],
        ["a".repeat(999), "a".repeat(999), 999],
        ["dad", "a".repeat(999), 1]
    ]).it('Test:%#_StringLenEqual999NotExceedsRightLimit', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_StringLenEqual1NotExceedsLeftLimit", () => {
    each([
        ["d", "deffefeegeg", 1],
        ["dedgeegge", "d", 1]
    ]).it('Test:%#_StringLenEqual1NotExceedsLeftLimit', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_StringIncludesNumbers_ReturnException", () => {
    each([
        ["11156ggr46646", "aaa"],
        ["aaa", "1f144441"],
        ["a437737aa", "1f1444344441"],
        ["a437737aa", "1"],
    ]).it('Test:%#_StringIncludesNumbers', (title, string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})

describe("longestSub_StringIncludesCyrillic_ReturnException", () => {
    each([
        ["жжкпкvvvж", "vvv"],
        ["vvv", "жжddddж"],
        ["vдвоьаугашугvv", "жжddddж"],
    ]).it('Test:%#_StringIncludesCyrillic', (title, string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})
describe("longestSub_StringIncludesSpecialCharacters_ReturnException", () => {
    each([
        ["#fefeg##", "vvv"],
        ["vvv", "$eeff$$"],
        ["vv####v", "$eeff$$"],
    ]).it('Test:%#_StringIncludesSpecialCharacters', (title, string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})
describe("longestSub_StringIncludesUppercaseEnglishCharacters_ReturnException", () => {
    each([
        ["AAfffA", "aaa"],
        ["vvv", "LOaaL"],
        ["VVV", "LOaaL"],
    ]).it('Test:%#_StringIncludesUppercaseEnglishCharacters', (string1, string2) => {
        expect(findLongestCommonSubsequence(string1, string2)).toThrow();
    });
})

describe("longestSub_StringIncludesLowercaseEnglishCharacters", () => {
    each([
        ["aaa", "aaefefea", 3],
        ["vththtthvv", "vvv", 3],
    ]).it('Test:%#_StringIncludesLowercaseEnglishCharacters', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_StringEqualCommonSub_ReturnStringLen", () => {
    each([
        ["ace", "abcde", 3],
        ["abcde", "ace", 3],
    ]).it('Test:%#_StringEqualCommonSub', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_StringIsSingleCharacterAndEqualCommonSub_ReturnOne", () => {
    each([
        ["a", "aaaa", 1],
        ["aaaa", "a", 1],
        ["aaaaavvvdvdss", "v", 1],
    ]).it('Test:%#_StringIsSingleCharacterAndEqualCommonSub', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_IdenticalStrings_ReturnStringsLen", () => {
    each([
        ["abc", "abc", 3],
        ["asdfg", "asdfg", 5],
    ]).it('Test:%#_IdenticalStrings', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_NoSuchSubsequence_ReturnZero", () => {
    each([
        ["abc", "def", 0],
        ["qryuitie", "zccnnf", 0],
    ]).it('Test:%#_NoSuchSubsequence', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_NormalTestWithShortStrings", () => {
    each([
        ["abcegew", "gegeheje", 3],
        ["egwwnntn", "keineinffffemcune", 4],
        ["ecwneuicne", "vnneceeff", 4],
        ["znhcbubeuce", "wiwncbybe", 5],
    ]).it('Test:%#_NormalTestWithShortStrings', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_NormalTestWithLongStrings", () => {
    each([
        ["aneyvbceuybecenuyejbcuckebcyubjecbeyc", "mcuyebcyucetyvevbcnwnubcwucebbcuwbce", 20],
        ["ncybehcjeecuygeuwnjmicnweubcnewncwnce", "wockiwemcmybetvwiwjkocmewiunyubgucwebcwc", 17],
        ["wcneyuctywevcbniucwnunceuwbnewuicjwicmncwe", "aaanvcjhegcuwicnuyvcetcwehcjwecihewc", 17],
        ["knvhbvuhrriubvyubnvbwucbwcew", "poppoporjvrbvbrcwcwenywervrtbrtwcwcerrevecefe", 13],
    ]).it('Test:%#_NormalTestWithLongStrings', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

describe("longestSub_NormalTestWithLongAndShortStrings", () => {
    each([
        ["abcveveevwvwevewevvwevwbeebebbeeqcbt", "deffff", 1],
        ["abcec", "dejnjencebvjcebycebeyvcebcef", 4],
        ["abmnrhbyuebhrnubnreccecubyguebc", "mbjvnbugrbv", 7],
        ["btyeer", "einvybnvuygruneuinvbyubrvybrriv", 4],
    ]).it('Test:%#_NormalTestWithLongAndShortStrings', (string1, string2, expected) => {
        expect(findLongestCommonSubsequence(string1, string2)).toBe(expected);
    });
})

