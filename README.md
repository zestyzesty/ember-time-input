# Ember-time-input

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
