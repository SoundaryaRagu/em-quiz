import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  correctAnswer: DS.belongsTo('option', {async: false}),
  options: DS.hasMany('option',{
    async: false
  }),
  userSelection: DS.attr('string')
});
