import Ember from 'ember';
import layout from '../templates/components/time-input';

export default Ember.Component.extend({
  layout: layout,

  valueString: Ember.computed.readOnly('value')
});
