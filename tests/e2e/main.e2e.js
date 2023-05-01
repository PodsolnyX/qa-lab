const MainPage = require('../pages/main.page');

describe("mainPageTests", () => {
    //При корректных данных при нажатии на кнопку выводится результат
    it('SubmitWithCorrectData_ResultLabelHaveResultText', async () => {
        await MainPage.open();
        await MainPage.getResult("abc", "abc");
        await expect(MainPage.labelResult).toHaveText("3");
    });
    //При некорректных данных при нажатии на кнопку выводится текст об ошибке
    it('SubmitWithIncorrectData_ResultLabelHaveErrorText', async () => {
        await MainPage.open();
        await MainPage.getResult("a333bc", "abc");
        await expect(MainPage.labelResult).toHaveText("Ошибка!");
    });
    //При открытии страницы появляется кнопка
    it('SubmitButtonWhenOpeningPage_SubmitButtonToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.buttonSubmit).toBeExisting();
    });
    //При открытии страницы появляется поле ввода первой строки
    it('InputString1WhenOpeningPage_InputString1ToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.inputString1).toBeExisting();
    });
    //При открытии страницы появляется поле ввода второй строки
    it('InputString2WhenOpeningPage_InputString1ToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.inputString2).toBeExisting();
    });
    //При открытии страницы появляется текст с результатом
    it('ResultLabelWhenOpeningPage_ResultLabelToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toBeExisting();
    });
    //При открытии страницы появляются все компоненты страницы
    it('AllComponentsWhenOpeningPage_AllComponentsToBeExisting', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toBeExisting();
        await expect(MainPage.buttonSubmit).toBeExisting();
        await expect(MainPage.inputString1).toBeExisting();
        await expect(MainPage.inputString2).toBeExisting();
    });
    //При открытии страницы текст с результатом пустой
    it('ResultLabelTextWhenOpeningPage_ToBeEmpty', async () => {
        await MainPage.open();
        await expect(MainPage.labelResult).toHaveText("");
    });
    //При заполнении полей ввода строк, в полях ввода появляется текст
    it('InputsStringWhenEnteringValue_InputsStringHaveValue', async () => {
        await MainPage.open();
        await MainPage.setInputsValue("fegrgr", "abc");
        await expect(MainPage.inputString1).toHaveValue("fegrgr");
        await expect(MainPage.inputString2).toHaveValue("abc");
    });
    //При нажатии на кнопку при пустых полях ввода выводится текст об ошибке
    it('SubmitButtonWhenClickingWithoutEnteringInputs_ResultLabelHaveErrorText', async () => {
        await MainPage.open();
        await MainPage.onSubmitButton();
        await expect(MainPage.labelResult).toHaveText("Ошибка!");
    });

})


