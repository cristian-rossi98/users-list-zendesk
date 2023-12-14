angularjs.controller("angularjsController", function ($scope, zendeskService) {
  zendeskService.listUsers().then(function (users) {
    $scope.arrayUsers = users.users;
    console.log(users.users);
  });
  // zendeskService.listTickets().then(function (tickets) {
  //   console.log("TICKETS: ", tickets.tickets);
  // });
  // let ticket = {
  //   ticket: {
  //     comment: {
  //       body: "Ticket criado via app",
  //     },
  //     priority: "urgent",
  //     subject: "Minha primeira requisição via app",
  //   },
  // };
  // zendeskService.createTicket(ticket).then(function (data) {
  //   console.log("TICKET CRIADO: ", data);
  // });
  // client.metadata().then(function (parameters) {
  //   console.log("Manifest: ", parameters);
  // });
});
