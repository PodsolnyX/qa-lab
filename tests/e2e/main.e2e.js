const MainPage = require('../pages/main.page');

describe("mainPageTests", () => {
    it('SubmitWithCorrectData_ResultLabelHaveResultText', async () => {
        await MainPage.open();
        await MainPage.getResult("abc", "abc");
        await expect(MainPage.labelResult).toHaveText("3");
    });

    it('SubmitWithIncorrectData_ResultLabelHaveErrorText', async () => {
        await MainPage.open();
        await MainPage.getResult("a333bc", "abc");
        await expect(MainPage.labelResult).toHaveText("Ошибка!");
    });

    it('SubmitButtonWhenOpeningPage_SubmitButtonToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.buttonSubmit).toBeExisting();
    });

    it('InputString1WhenOpeningPage_InputString1ToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.inputString1).toBeExisting();
    });

    it('InputString2WhenOpeningPage_InputString1ToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.inputString2).toBeExisting();
    });

    it('ResultLabelWhenOpeningPage_ResultLabelToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toBeExisting();
    });

    it('AllComponentsWhenOpeningPage_AllComponentsToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toBeExisting();
        await expect(MainPage.buttonSubmit).toBeExisting();
        await expect(MainPage.inputString1).toBeExisting();
        await expect(MainPage.inputString2).toBeExisting();
    });

    it('ResultLabelTextWhenOpeningPage_ToBeEmpty', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toHaveText("");
    });

    it('InputsStringWhenInputValue_InputsStringHaveValue', async () => {
        await MainPage.open();
        await MainPage.setInputsValue("fegrgr", "abc");
        await expect(MainPage.inputString1).toHaveValue("fegrgr");
        await expect(MainPage.inputString2).toHaveValue("abc");
    });

    it('SubmitButtonWhenClickingWithout_ResultLabelHaveErrorText', async () => {
        await MainPage.open();
        await MainPage.onSubmitButton();
        await expect(MainPage.labelResult).toHaveText("Ошибка!");
    });

})


