import Controller from '@ember/controller';
import getCookie from "em-quiz/utils/cookie-get";

export default Controller.extend({

  user:null,
  actions: {
    start: function() {
    getCookie('name');
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
