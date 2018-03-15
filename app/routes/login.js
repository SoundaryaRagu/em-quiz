import Route from '@ember/routing/route';

export default Route.extend({
  setupController: function(controller, model) {
    controller.set('fname',' ');
    return this._super.apply(this,arguments);
  }
});
