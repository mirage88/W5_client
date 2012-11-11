define([
    'vendor/backbone',
    'vendor/underscore',
    'routers/app/app_router',
    'text!templates/projects/list.html',
    'vendor/bootstrap'
  ], function(Backbone, _, appRouter, projectsListTemplate) {
    var ListView = Backbone.View.extend({
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

    return new ListView();
  }
);
