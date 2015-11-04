FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {mainContent: 'home'});
    }
});

FlowRouter.route('/about', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {mainContent: 'aboutMain'});
    }
});