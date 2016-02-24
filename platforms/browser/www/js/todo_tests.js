/* TESTS */

'use strict';
// constructor test
describe('$toDoApp', function () {
    // load my app modul to test
    beforeEach(function () {
        module('toDoApp');
    });

    describe('<constructor>', function () {
        var $firebase;
        beforeEach(function() {
            inject(function (_$firebase_) {
                $firebase = _$firebase_;
            });
        });
        it('throws an error', function() {
            expect(function() {
                $firebase(new Firebase('Mock://'));
            }).toThrow();
        });
    });
});