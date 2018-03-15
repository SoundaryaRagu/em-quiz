import DS from 'ember-data';

export default DS.Model.extend({
  option: DS.attr('string'),
  question: DS.belongsTo('question', {
    inverse:'options',
    async: false
  })
});
