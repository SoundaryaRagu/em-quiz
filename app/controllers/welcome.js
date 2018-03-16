import Controller from '@ember/controller';
import CookieGet from "em-quiz/utils/cookie-get";

export default Controller.extend({
  user:Ember.computed('model',{
    get: function(){
    var user = CookieGet.getCookie(name);
    console.log(user);
    return user;
    }
  }),
  actions: {
    start: function() {
      this.transitionToRoute('/question/1');
    },
    signOut: function() {
      this.get('store').peekAll('question').forEach((question)=> {
        question.rollbackAttributes();
      });
      this.transitionToRoute('login');
    }
  }
});
