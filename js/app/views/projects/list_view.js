define([
    'vendor/backbone',
    'vendor/underscore',
    'app/routers/app/app_router',
    'text!templates/projects/list.html',
    'vendor/bootstrap'
  ], function(Backbone, _, appRouter, projectsListTemplate) {
    var listView = Backbone.View.extend({
      el: $('#projects'),
      render: function() {
        this.$el.addClass('modal');
        this.$el.append(_.template(projectsListTemplate));
        this.$el.modal();
        this.$el.on('hidden', { elObj: this }, function(ev) {
          ev.data.elObj.$el.empty();
          appRouter.initialize();
        });
      }
    });

    return new listView;
  }
);
