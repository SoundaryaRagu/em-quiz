import Route from '@ember/routing/route';
import CookieGet from "em-quiz/utils/cookie-get";

export default Route.extend({
  model:function () {
    return this.get('store').peekAll('login');
  },
  setupController: function(controller, model) {
    let user = CookieGet.getCookie(name);
    controller.set('user',user);
    return this._super.apply(this,arguments);
  }
});
