import Controller from '@ember/controller';
import getCookie from "em-quiz/utils/cookie-get";

export default Controller.extend({
  actions: {
    displayName: function() {
      let first = this.get('fname');
      let firstName = first.trim();
      if(!firstName == "") {
        getCookie(firstName);
        this.transitionToRoute("welcome");
      } else {
        let sticky = $('.ui.sticky');
         sticky.css('display','visible')
         sticky.transition({
          animation: 'vertical flip',
          onComplete: function() {
            setTimeout(function(){
              $('.ui.sticky').transition('vertical flip');
            }, 2000);
          }
        });
      }
    },
  }
});
