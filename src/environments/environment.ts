// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyDkSYJN80r6pePeRyYgjXr9GhgsvmRClA0",
    authDomain: "angular-app-development.firebaseapp.com",
    databaseURL: "https://angular-app-development.firebaseio.com",
    projectId: "angular-app-development",
    storageBucket: "angular-app-development.appspot.com",
    messagingSenderId: "70507336250"
  }
};
