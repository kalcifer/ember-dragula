[![Build Status](https://travis-ci.org/kalcifer/ember-dragula.svg?branch=master)](https://travis-ci.org/kalcifer/ember-dragula)

# Ember Dragula

An ember-cli addon for using [Dragula](https://github.com/bevacqua/dragula) - A drag and drop library.

## How to use

### Install

Inside an ember-cli project, run:

```
ember install ember-dragula
```

This will install ember-dragula and dragula and wire everything up for you. Now you have two components available: `{{ember-dragula}}` and `{{ember-dragula-container}}`.

### Example

```hbs
{{#ember-dragula config=dragulaconfig}}
	{{#ember-dragula-container }}
		<div>drag me</div>
		<div>or me</div>
	{{/ember-dragula-container}}
	{{#ember-dragula-container }}
		<div>you can also drag me</div>
		<div>and me</div>
	{{/ember-dragula-container}}
{{/ember-dragula}}
```

Dragula will allow the user to drag any direct child element of a `{{ember-dragula-container}}`. `{{ember-dragula}}` is the component that manages the lifecycle of the associated drake and should always wrap around your containers in the template.

### Passing options

In the above code snippet, the config parameter must be set in the following format on a parent controller/component.

```js
dragulaconfig: {
	options: {
		copy: false,           
		revertOnSpill: false,  
		removeOnSpill: false
		// Other options from the dragula source page.
	},
	enabledEvents: ['drag', 'drop']
}
```

### Using events

You can enable any of the default [Dragula events](https://github.com/bevacqua/dragula#drakeon-events) in the config as seen above. When they're enabled, you still need to define corresponding actions on your parent controller/component:

```hbs
{{#ember-dragula config=dragulaconfig drag='onDrag' drop='onDrop'}}
	{{#ember-dragula-container }}
		<div>drag me</div>
		<div>or me</div>
	{{/ember-dragula-container}}
{{/ember-dragula}}
```

## Advanced usage

If you can not nest the markup directly, you can pass the `drake` instance down directly:

```hbs
{{#ember-dragula config=dragulaconfig as |drake|}}
	<div>
		{#ember-dragula-container drake=drake}}
			<div>drag me</div>
			<div>or me</div>
		{{/ember-dragula-container}}
	</div>
{{/ember-dragula}}
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
