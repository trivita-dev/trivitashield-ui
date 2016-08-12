## TriVita AngularJS App
This application uses **Angular 1.5** but is written using **ES2015 script** formatting for easy upgrading to Angular 2.0 in the future. The ES2015 script (a.k.a. ES6) is transpiled to ES5 script with Babelfy for backwards browser compatability.

### App Features include:
* ES2015 Class and Component architecture
* [Babel](https://babeljs.io/) for ES2015 to ES5 transpiling
* [Browserify](http://browserify.org/) for Module Dependency Injection (DI)
* [Gulp](http://gulpjs.com/) for task management

### Assumptions:
1. You vave [Node](https://nodejs.org/) gloablly installed on your DEV Environment.
2. You have [NPM](https://www.npmjs.com/package/npm) gloablly installed on your DEV Environment *(now comes with Node)*.
3. You have Admin priveledges on your DEV Environment (NPM installs may require `sudo npm`).

### Steps to Take:

STEP 1: Make sure you have Gulp installed globally:
__If you have previously installed a version of gulp globally, please run `npm rm --global gulp`
to make sure your old version doesn't collide with gulp-cli.__

```sh
$ npm install --global gulp-cli
```


STEP 2: Make sure you have Browserify installed globally:

```sh
$ npm install -g browserify
```


STEP 3: This App has Babel installed locally because it's generally a bad idea to run Babel globally. To uninstall any existing global copy of Babel:

```sh
$ npm uninstall --global babel-cli
```


STEP 4: [Clone](https://github.com/Trivita-Development/trivitashield-ui.git) repo to your DEV Environment.


STEP 5: Using your CLI Interface, set your prompt to the Cloned Repo's root directory.

```sh
$ CD /path/to/repo/root
```


STEP 6: Run app installer:

```sh
$ npm install
```


STEP 7: Generate Template Cache Views *(repeat when any new html is generated for App Project)*:

```sh
$ gulp views
```


STEP 8: Generate App Build and Dist files *(repeat when any App Project changes are distribution ready)*:

```sh
$ gulp build
```


STEP 9: Run App Project on Localhost *(repeat during App Project Development. Localhost port is set in gilp.js file and is currently at :4000)*:

```sh
$ gulp
```

### Information:

This App uses jQuery 2.1.1 and Bootstrap 3.3.6 to propogate a responsive UI. It's various UI features and capabilities are inclusive of the liscenced version of the [INSPINA](https://github.com/Trivita-Development/Inspinia-Template) Angular Template.

Please create your own branch before making any application changes. DO NOT WORK FROM MASTER BRANCH!
