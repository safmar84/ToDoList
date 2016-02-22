/* MODEL */

// create module with dependency on firebase for using AngularFire services
var toDoApp = angular.module("toDoApp", ["firebase"]);

// construct controller with injected $firebaseArray services
toDoApp.controller("ToDoCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        
        // binding a model to a firebase URL
        var ref = new Firebase("https://safmar84-todo.firebaseio.com/");
        $scope.tasks = $firebaseArray(ref);

        // add task
        $scope.addTask = function(e) {
            if (e.keyCode == 13 && $scope.task) {
                $scope.tasks.$add({
                    completed: false,
                    text: $scope.task
                });
                // reset task for a next add
                $scope.task="";
            }
        }
        // check/uncheck task
        $scope.checkedTask = function(task) {
            task.completed = !task.completed;
            $scope.tasks.$save(task);        
        }
        // delete task
        $scope.deleteTask = function(task) {
            $scope.tasks.$remove(task);
        }
    }
]);