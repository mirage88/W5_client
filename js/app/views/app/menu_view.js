define([
    'backbone',
    'underscore',
    'text!templates/menu.html'
  ], function(Backbone, _, menuViewTemplate) {
    var MenuView = Backbone.View.extend({
      el: $('#menu'),
      render: function() {
        this.$el.append(_.template(menuViewTemplate, {primaryButton: 'Projects'}));
      }
    });

    return new MenuView();
  }
);
