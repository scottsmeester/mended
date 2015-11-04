// var options = {};

// getActivities = function getActivities(options, callback) {
//   Meteor.call('getActivities', user, callback);
// }

// console.log('getActivities', getActivities);

// Template.home.events({
//   'submit form': function (event) {
//     event.preventDefault();
//     console.log('hello!!!');
//   }
// });


Meteor.subscribe('getCashPrices');