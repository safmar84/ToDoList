/* TESTS */

'use strict';

describe('$toDoApp', function () {

    var TEST_TASKS = {
        'task1': { completed: false, text: 'foo' },
        'task2': { completed: true, text: 'bar' }
    };

    var scope;
    var controller;
    var firebaseArray;


    beforeEach(function () {
        // load my app modul to test
        module('toDoApp');
        module('firebase');
        // inject ToDoCtrl and mock scope
        inject(function ($controller, $rootScope, $firebaseArray) {
            scope = $rootScope.$new();
            controller = $controller('ToDoCtrl', {$scope: scope});
            firebaseArray = $firebaseArray;
        });
    });

    // unit tests for data representation
    describe('List of tasks', function () {
        it('should be defined.', function () {
            expect(scope.tasks).toBeDefined();
        });
        it('should be a valid array.', function() {
            expect(Array.isArray(scope.tasks)).toBe(true);
        });
    });

    // unit tests for addTask function
    describe('addTask', function () {
        var new_task_text = 'foo';
        var new_task = { completed: false, text: new_task_text };
        var new_task_to_compare = { completed: false, text: new_task_text };

        it('function should be defined.', function () {
            expect(scope.addTask).toBeDefined();
        });
/*        
        it('function should add valit data.', function () {
            //var id;
            scope.tasks.$add(new_task).then(function(ref) {
                id = ref.key();
            });
            //expect(scope.tasks.$getRecord(id)).toEqual(new_task_to_compare);
            expect(id).toBe(3);
        });

        it('addTask should save valid values', function () {
            scope.addTask(new_task_text);
            expect(function() { 
                scope.tasks.new_task.toBeNull('bar');
            });
        }); */
    });

    // unit tests for checkedTask function
    describe('checkedTask', function () {
        
        it('function should be defined.', function () {
            expect(scope.checkedTask).toBeDefined();
        });
    });

    // unit tests for deleteTask function
    describe('deleteTask', function () {

        it('function should be defined.', function () {
            expect(scope.deleteTask).toBeDefined();
        });
    });

/*
    // constructor test
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
*/
});