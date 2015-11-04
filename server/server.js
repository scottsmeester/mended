Meteor.startup(function () {
  // code to run on server at startup
  console.log('process.env.', Meteor.settings.POKITDOK_MENDED_TEST.POKITDOK_CLIENT_ID)
});

// Meteor.publish("cashPrices", function () {
//   return Tasks.find();
// });

Meteor.methods({
  getCashPrices: function() {
    var PokitDok = Meteor.npmRequire('pokitdok-nodejs');
    var pokitdok = new PokitDok(Meteor.settings.POKITDOK_CLIENT_ID, Meteor.settings.POKITDOK_CLIENT_SECRET);

    pokitdok.cashPrices({
            zip_code: '94401',
            cpt_code: '90658'
        }, function (err, res) {
        if (err) {
            return console.log(err, res.statusCode);
        }
        // print the cpt, geo_zip and average price
        for (var i = 0, ilen = res.data.length; i < ilen; i++) {
            var price = res.data[i];
            console.log(price.cpt_code + ':' + price.geo_zip_area +  ':' + price.average);
        }
    });

    // console.log('pokitdok', pokitdok);

    // var gists = Async.runSync(function(done) {
    //   github.gists.getFromUser({user: 'arunoda'}, function(err, data) {
    //     done(null, data);
    //   });
    // });

    // return gists.result;
  }
});

