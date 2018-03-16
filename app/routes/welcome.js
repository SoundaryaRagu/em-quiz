import Route from '@ember/routing/route';
import getCookie from "em-quiz/utils/cookie-get";

export default Route.extend({
  // getCookie(name) {
  //   let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  //   return v ? v[2] : null;
  // },
  model:function () {
    return this.get('store').peekAll('login');
  },
  setupController: function(controller, model) {
    let user = getCookie('name');
    controller.set('user',user);
    return this._super.apply(this,arguments);
  }
});
