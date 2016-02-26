/* E2E TESTS */

describe('ToDoList', function() {
    const new_task_text = '*TeStOvAcÍ*úKoL*';

    beforeEach(function () {
        browser.get('http://localhost:8000/index.html');
        browser.sleep(3000);
        element.all(by.css('.btn-danger')).click();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('ToDoList');
    });

    it('should add new task', function () {
        element(by.id('taskInput')).sendKeys(new_task_text, protractor.Key.ENTER);
        expect(element(by.binding('task.text')).getText()).toEqual(new_task_text);
    });

    it('should remove existing task', function () {
        element(by.id('taskInput')).sendKeys(new_task_text, protractor.Key.ENTER);
        expect(element(by.binding('task.text')).getText()).toEqual(new_task_text);
        element(by.css('.btn-danger')).click();
        expect(element(by.binding('task.text')).isPresent()).toBe(false);
    });

    afterEach(function () {
        element(by.id('taskInput')).sendKeys('Vysát koberec', protractor.Key.ENTER);
        element(by.id('taskInput')).sendKeys('Zajít na nákup', protractor.Key.ENTER);
        element.all(by.css('.btn-success')).click();
        element(by.id('taskInput')).sendKeys('Vyvenčit psa', protractor.Key.ENTER);
        element(by.id('taskInput')).sendKeys('Zaplatit nájem', protractor.Key.ENTER);
        element(by.id('taskInput')).sendKeys('Udělat commit ToDoList', protractor.Key.ENTER);
    });
});