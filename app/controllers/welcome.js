import Controller from '@ember/controller';

export default Controller.extend({
  getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  },
  user:null,
  actions: {
    start: function() {
      this.getCookie("name");
      this.transitionToRoute('/question/1');
    },
    signOut: function() {
      this.get('store').peekAll('question').forEach((question)=> {
        question.rollbackAttributes();
      });
      this.transitionToRoute('/login');
    }
  }
});
