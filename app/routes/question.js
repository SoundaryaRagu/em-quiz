import Route from '@ember/routing/route';

export default Route.extend({
  model: function (data) {
    var questionId = data.qid;
    var questionPost = this.store.peekRecord('question', data.qid);
    return questionPost;
  }
});
