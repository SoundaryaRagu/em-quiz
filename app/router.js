import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('welcome');
  this.route('question', {
    path:'/question/:qid'
  });
  this.route('result', {
    path:'/question/result'
  });
});
export default Router;
