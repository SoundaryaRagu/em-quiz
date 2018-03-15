import Controller from '@ember/controller';
import cookieGet from "em-quiz/utils/cookie-get";
export default Controller.extend({
  actions: {
    displayName: function() {
      var firstName = this.get('fname');
      if(firstName === " ") {
        $('.ui.sticky').css('display','visible')
        $('.ui.sticky').transition({
          animation: 'vertical flip',
          onComplete: function() {
            setTimeout(function(){
              $('.ui.sticky').transition('vertical flip');
            }, 2000);
          }
        });
      } else {
        cookieGet("currentUser",firstName);
        // this.set(name,firstName);
        // console.log(name);
        this.transitionToRoute("/welcome");
      }
    },
  }
});
