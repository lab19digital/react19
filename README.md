# React19

React19 is a *fairly* simple React/Redux boilerplate we use within our team. 

Why redux? Redux offers an opinionated way of managing state that makes an app easy to understand if you've never been on a project. For us, easy knowledge sharing is the ultimate goal. A redux project is much faster to get to grips with than when other libraries are used such as mobx, because of predictable patterns. redux-devtools Chrome extension offers incredible insights into your app state, and offers time travel. 

### React packages included
1. react
2. react-redux
3. redux-saga
4. redux-form

### Front end 
4. Bootstrap 4 [beta] (Sass, flexbox) 

### Debugging

- <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en" target="_blank">Redux devtools</a> (redux all the things)
- Flow and flow-runtime

### Development
- Webpack server
- Hot reloading
- Flux Standard Actions (FSA)
- Jest

### Utilities
- lodash (beware the footprint)

### Other libraries
The basics are covered above, but here are some recommended libraries to install:

- <a href="https://github.com/ReactTraining/react-router">react-router</a> (probably will add this as hard dependency soon)
- <a href="https://github.com/JedWatson/react-select">react-select</a> (custom typeahead/select)
- <a href="https://github.com/airbnb/react-dates">react-dates</a> (datepicker by airbnb)
- <a href="https://github.com/akiran/react-slick">react-slick</a> (port of Slick)
- <a href="https://github.com/mmazzarolo/react-native-starter">react-native-starter</a> (very nice boilerplate for react-native, especially if you want to use parse-server sdks)
- <a href="https://github.com/reactjs/reselect">reselect</a> (advanced redux lib for memoization; use this to improve rendering of large amounts of data)

#### !important note about CSS:
Because Bootstrap relies on a lot of global css, this becomes difficult to use with css-modules. So we allow global css, but you can isolate css easily using a classname like this:

  __.loginComponent {
    color:blue;
  }

Webpack looks for classnames like this and generates a hash, so you can attach a unique parent class to your components without worrying about collisions with other components, while still being able to use global bootstrap css within your components. 

This is only if you're intending to separate your scss files per component, rather than having a lot of global css imported to main.scss.

For example, you import the component styles into your component:

  import loginStyles from './login.component.scss';
    
    const loginComponent = () => (
      <div className={styles.__loginComponent}></div>
    );
    
This outputs something like

    <div class="__loginComponent5a1da8"></div>
    

Boilerplate by <a href="https://lab19digital.com" target="_blank">Lab19 Digital</a>.

<img src="https://lab19digital.com/wp-content/uploads/2015/09/lab19-logo.svg" width="50" />
