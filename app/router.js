import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('walks', function() {
    this.resource('walk', { path: '/:walk_id' });
  });
});

export default Router;
