import { moduleForComponent, test } from 'ember-qunit';
import MomentService from 'ember-moment/services/moment';

moduleForComponent('time-input', 'Unit | Component | time input', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  const component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it displays a time', function(assert) {
  const momentService = new MomentService();
  momentService.setTimeZone('America/Los_Angeles');

  const component = this.subject({ moment: momentService });
  component.set('value', 0);
  component.set('format', 'h:mm a');

  this.render();
  assert.equal(component.get('valueString'), '4:00 pm');
});

test('it respects the service\'s time zone', function(assert) {
  const momentService = new MomentService();
  momentService.setTimeZone('America/New_York');

  const component = this.subject({ moment: momentService });
  component.set('value', 0);
  component.set('format', 'h:mm a');
  this.render();
  assert.equal(component.get('valueString'), '7:00 pm');
});
