import Ember from 'ember';
import layout from '../templates/components/time-input';
import momentjs from 'moment';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['time-input'],

  valueString: Ember.computed('value', function() {
    var format = this.get('format');

    if(Ember.isEmpty(format)) {
      format = 'hhmm';
    }

    return momentjs(this.get('value')).format(format);
  }),

  actions: {
    valueChanged(newValue) {
      this.sendAction(newValue);
    }
  }
});
