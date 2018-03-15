import Route from '@ember/routing/route';

export default Route.extend({
  getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  },
  model:function () {
    return this.get('store').peekAll('login');
  },
  setupController: function(controller, model) {
    let user = this.getCookie("name");
    controller.set('user',user);
    return this._super.apply(this,arguments);
  }
});
