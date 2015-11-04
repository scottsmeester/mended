// var options = {};

// getActivities = function getActivities(options, callback) {
//   Meteor.call('getActivities', user, callback);
// }

// console.log('getActivities', getActivities);

Template.home.events({
  'click .button.getCash': function (event) {
    event.preventDefault();
    console.log('hello!!!');
  Meteor.call('getCashPrices');
  }
});
