angular.module("DataApp").service("zendeskService", [
  "$q",
  function ($q) {
    let client = ZAFClient.init();

    this.listUsers = function () {
      let deferred = $q.defer();
      client
        .request({
          url: "/api/v2/users",
          type: "GET",
          contentType: "application/json",
        })
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (error) {
          deferred.reject(error);
        });
      return deferred.promise;
    };

    this.listTickets = function () {
      let deferred = $q.defer();
      client
        .request({
          url: "/api/v2/tickets",
          type: "GET",
          contentType: "application/json",
        })
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (error) {
          deferred.reject(error);
        });
      return deferred.promise;
    };

    this.createTicket = function (ticket) {
      let deferred = $q.defer();
      client
        .request({
          url: "/api/v2/tickets",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(ticket),
        })
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (error) {
          deferred.reject(error);
        });
      return deferred.promise;
    };
  },
]);
