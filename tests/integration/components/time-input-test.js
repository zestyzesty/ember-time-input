import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import MomentService from 'ember-moment/services/moment';

moduleForComponent('time-input', 'Integration | Component | time input', {
  integration: true,
  beforeEach: function() {
    this.register('service:moment', MomentService);
    this.inject.service('moment');
  }
});

test('it renders', function(assert) {
  this.get('moment').setTimeZone('America/Los_Angeles');

  const epoch = 0;
  this.set('time', epoch);
  this.set('format', 'hh:mm a');

  this.render(hbs`{{time-input value=time format=format}}`);

  assert.equal(this._element.querySelector('input').value, '04:00 pm');
});
