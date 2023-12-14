angularjs.controller("angularjsController", function ($scope, zendeskService) {
  zendeskService.listUsers().then(function (users) {
    $scope.arrayUsers = users.users;
  });
});
