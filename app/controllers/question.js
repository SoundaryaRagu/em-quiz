import Controller from '@ember/controller';
import cookieGet from "em-quiz/utils/cookie-get";

export default Controller.extend({

  actions: {
    ans: function(option) {
      var qid = this.get('model.id');
      var userSelection = option.get('id');
      this.set('model.userSelection',option);
      if(qid>=5) {
        this.transitionToRoute('/question/result');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++qid));
      }
    },
    next: function(){
      var qid = this.get('model.id');
      if(qid>=5) {
        this.transitionToRoute('/question/result');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++qid));
      }
    },

    skip: function() {
      var qid = this.get('model.id');
      if(qid>=5) {
        this.transitionToRoute('/question/result');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++qid));
      }
    },

    prev:function(){
      var qid =this.get('model.id');
      if(qid<=1) {
        this.transitionToRoute('/welcome');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(--qid));
      }
    },
  }
});
