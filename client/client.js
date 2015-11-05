
Template.home.events({
  'click .button.getCash': function (event) {
    event.preventDefault();
    console.log('hello!!!');
  Meteor.call('getCashPrices');
  }
});

Template.myIndices.helpers({
  cptIndex: function() {
    // generate a random cost between, oh $22 and $41 - return to DOM
    var cptIndex = Meteor.call('getRandomPrice', 22, 41, function(error, result) {
    console.log('result', result);
      return result;
    })
    return cptIndex;
  }
  // ,
  // drgIndex: function() {
  //   // generat a random cost between, oh $39 and $69 - return
  //   // var drgIndex = getRandomPrice(39, 69);
  //   return drgIndex;
  // }
});