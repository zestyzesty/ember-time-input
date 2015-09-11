# Ember-time-input [![Build Status](https://travis-ci.org/bdvholmes/ember-time-input.svg)](https://travis-ci.org/bdvholmes/ember-time-input)

A component for inputting times. Uses momentjs and performs basic validation.

## Usage

Exposes a `time-input` component. Use moment conventions for defining format:

http://momentjs.com/docs/#/displaying/format/

Action will be called when the time has changed and can be parsed correctly.

If the date cannot be parsed the element is endowed with the class `.invalid`.

```
{{time-input value=task.startTime
             format='h:mm a'
             action='timeChanged'
             class='time-edit'}}
```

## Parameters

You can specify on the `time-input` component.

  - `format` - the date format as recognised by moment.js
  - `action` - the action to trigger when when the time is changed, passes the new time as a parameter.
  - `input-class` - classes to add to the input
  - `placeholder` - the placeholder text for the input

# Contributing

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
