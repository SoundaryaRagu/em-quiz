import Controller from '@ember/controller';
import getCookie from "em-quiz/utils/cookie-get";

export default Controller.extend({
  qid : Ember.computed.alias('model.id'),
  actions: {
    ans: function(option) {
      let count = this.get('qid');
      let previous = $('#prev');
      if((this.get('qid')) >= 1) {
        previous.css('visibility','visible');
      } else if((this.get('qid')) ==1 ) {
        previous.css('visibility','hidden');
      }
      let userSelection = option.get('id');
      this.set('model.userSelection',option);
      if(this.get('qid')>=5) {
        this.transitionToRoute('/question/result');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++count));
      }
    },
    next: function(){
      let count = this.get('qid');
      let previous = $('#prev');
      if(this.get('qid') >= 1) {
        previous.css('visibility','visible');
      } else if(this.get('qid')==1) {
        previous.css('visibility','hidden');
      }
      if(this.get('qid')>=5) {
        this.transitionToRoute('/question/result');
      } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++count));
      }
    },
    prev:function(){
      let count = this.get('qid');
      $('#qns').transition('vertical flip in');
      $('#ans').transition('horizontal flip in');
      this.transitionToRoute('/question/'+(--count));
    }
  }
});
