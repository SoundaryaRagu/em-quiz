import Route from '@ember/routing/route';

export default Route.extend({
  model: function (data) {
    let questionId = data.qid;
    let questionPost = this.store.peekRecord('question', data.qid);
    return questionPost;
  }
});
