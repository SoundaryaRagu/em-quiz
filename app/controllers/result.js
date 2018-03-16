import Controller from '@ember/controller';

export default Controller.extend({
  score:Ember.computed('model.@each.userSelection',{
    get:function () {
      let score = 0;
      this.get('model').forEach((question)=> {
        let userSelection = question.get('userSelection');
        if(!!userSelection && question.get('correctAnswer') == userSelection){
          score++;
        }
      });
      return score;
    }
  }),
  skip:Ember.computed('model.@each.userSelection',{
    get:function () {
      let skip = 0;
      this.get('model').forEach((question)=> {
        let userSelection = question.get('userSelection');
        if(!userSelection){
          skip++;
        }
      });
      return skip;
    }
  }),
  wrong:Ember.computed('model.@each.userSelection',{
    get:function () {
      let wrong = 0;
      this.get('model').forEach((question)=> {
        let userSelection = question.get('userSelection');
        if(!!userSelection && question.get('correctAnswer') != userSelection){
          wrong++;
        }
      });
      return wrong;
    }
  }),
  actions: {
    playQuiz: function() {
      this.get('store').peekAll('question').forEach((question)=>{
        question.rollbackAttributes();
      });
      this.get('store').peekAll('option').forEach((option)=>{
        option.rollbackAttributes();
      });
      this.transitionToRoute('welcome');
    },
    exit: function() {
      this.transitionToRoute('login');
    }
  }
});
