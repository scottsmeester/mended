Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.publish("cashPrices", function () {
  return console.log('published!');
});

Meteor.methods({
  getCashPrices: function() {
    var PokitDok = Meteor.npmRequire('pokitdok-nodejs');
    var pokitdok = new PokitDok(Meteor.settings.POKITDOK_MENDED_TEST.POKITDOK_CLIENT_ID, Meteor.settings.POKITDOK_MENDED_TEST.POKITDOK_CLIENT_SECRET);

    // pokitdok.cashPrices({
    //     zip_code: '80221',
    //     cpt_code: '90658'
    // }, function (err, res) {
    //     if (err) {
    //         return console.log(err, res.statusCode);
    //     }
    //     // print the cpt, geo_zip and average price
    //     for (var i = 0, ilen = res.data.length; i < ilen; i++) {
    //         var price = res.data[i];
    //         console.log(price.cpt_code + ':' + price.geo_zip_area + ':' + price.average_price);
    //     }
    // });

    //// print the procedure code and price for a particular zip/cpt combination
    pokitdok.insurancePrices({
        zip_code: '80221',
        cpt_code: '90658'
    }, function (err, res) {
        if (err) {
            return console.log(err, res.statusCode);
        }
        // print the cpt and geo_zip
        console.log(res.data.cpt_code + ':' + res.data.geo_zip_area);
        // print the average price per payment types
        for (var i = 0, ilen = res.data.amounts.length; i < ilen; i++) {
            var price = res.data.amounts[i];
            console.log(price.payment_type + ':' + price.average_price);
        }
    });

    // console.log('pokitdok', pokitdok);

    // console.log("getting cashPrices!");
  }
});
