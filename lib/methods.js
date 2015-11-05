Meteor.methods({
  getRandomPrice: function(min, max) {
    // this function will return a random price. for now, 
    // just return the concatenated parameters
    return rndPrice = min.toString() + '.' + max.toString();
  }
})