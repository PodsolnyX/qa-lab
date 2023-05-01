
const Page = require('./page');

class MainPage extends Page {

    get buttonSubmit () {
        return $('#btn-submit');
    }

    get inputString1 () {
        return $('#inputString1');
    }

    get inputString2 () {
        return $('#inputString2');
    }

    get labelResult () {
        return $('#label-result');
    }


    async getResult(string1, string2) {
        await this.inputString1.setValue(string1);
        await this.inputString2.setValue(string2);
        await this.buttonSubmit.click();
    }

    async setInputsValue(string1, string2) {
        await this.inputString1.setValue(string1);
        await this.inputString2.setValue(string2);
    }

    async onSubmitButton() {
        await this.buttonSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
