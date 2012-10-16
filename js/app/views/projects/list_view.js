define([
    'vendor/backbone',
    'vendor/underscore',
    'text!templates/projects/list.html',
    'vendor/bootstrap'
  ], function(Backbone, _, projectsListTemplate) {
    var listView = Backbone.View.extend({
      el: $('#projects'),
      render: function() {
        this.$el.addClass('modal');
        this.$el.append(_.template(projectsListTemplate));
        this.$el.modal();
      }
    });

    return new listView;
  }
);
