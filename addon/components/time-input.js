import Ember from 'ember';
import layout from '../templates/components/time-input';
import moment from 'moment';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['time-input'],
  classNameBindings: ['invalid'],

  format: 'hhmm',
  invalid: false,

  inputIsNativeDate: Ember.computed('value', function() {
    return this.get('value') instanceof Date;
  }),

  momentDate: Ember.computed('value', function() {
    return moment(this.get('value'));
  }),

  valueString: Ember.computed('momentDate', function() {
    return this.get('momentDate').format(this.get('format'));
  }),

  actions: {
    valueChanged(valueString) {
      var parsed = moment(valueString, this.get('format'));
      this.set('invalid', !parsed.isValid());
      if (parsed.isValid()) {
        var newDate = this.get('momentDate').clone();
        newDate.hours(parsed.hours());
        newDate.minutes(parsed.minutes());

        if (this.get('inputIsNativeDate')) {
          newDate = newDate.toDate();
        }

        this.set('value', newDate);
        this.sendAction('action', newDate);
      }
    }
  }
});
