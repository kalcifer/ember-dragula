# Ember-dragula

##Introduction

An ember addon that allows to use Dragula - A drag and drop library (https://github.com/bevacqua/dragula)

##How to use

###Install addon
ember install ember-dragula

###Syntax
The following syntax is required to get the addon working.
```
{{#ember-dragula config=dragulaoptions dragulaEvent='dragulaEvent' }}
	{{#ember-dragula-container }}
		<div>
			...
		</div>
		<div>
		</div>
	{{/ember-dragula-container}}
	{{#ember-dragula-container }}
		<div>
			...
		</div>
		<div>
		</div>
	{{/ember-dragula-container}}
{{/ember-dragula}}
```
Since dragula uses containers whose elements we can drag and drop. So ```ember-dragula``` is the ember container for all dragula containers(including those defined in ```isContainer```. It is also the component that manages the lifecycle for the associated drake.

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
