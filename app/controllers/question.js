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
      } else if((this.get('qid')) == 1 ) {
        previous.css('visibility','hidden');
      }
      let userSelection = option.get('id');
      let userSec = userSelection;
      this.set('model.userSelection',option);
      console.log(userSelection);
      if(this.get('qid')>=5) {
        this.transitionToRoute('/question/result');
      } else {
        if(userSec == userSelection){
          $('.ui.label').removeClass('green');
        } else {
        $('#qns').transition('vertical flip in');
        $('#ans').transition('horizontal flip in');
        this.transitionToRoute('/question/'+(++count));
  }
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

      if(count == 1){
        this.transitionToRoute('/question/1');
      } else {
      $('#qns').transition('vertical flip in');
      $('#ans').transition('horizontal flip in');
      this.transitionToRoute('/question/'+(--count));
    }
  }
  }
});
