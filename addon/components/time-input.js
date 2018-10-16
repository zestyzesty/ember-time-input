import Ember from 'ember';
import layout from '../templates/components/time-input';
const { Component, computed, inject, isPresent } = Ember;

export default Component.extend({
  moment: inject.service(),
  layout: layout,
  classNames: ['time-input'],
  classNameBindings: ['invalid'],

  format: 'hhmm',
  invalid: false,

  inputIsNativeDate: computed('value', function() {
    return this.get('value') instanceof Date;
  }),

  momentDate: computed('value', function() {
    if (isPresent(this.get('value'))) {
      return this.get('moment').moment(this.get('value'));
    }
  }),

  valueString: computed('momentDate', function() {
    const date = this.get('momentDate');
    return date ? date.format(this.get('format')) : '';
  }),

  actions: {
    valueChanged(valueString) {
      const momentService = this.get('moment');

      const parsed = momentService.moment(valueString, this.get('format'));
      this.set('invalid', !parsed.isValid());
      if (parsed.isValid()) {
        const oldDate = this.get('momentDate');
        let newDate = oldDate ? oldDate.clone() : momentService.moment();
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
