// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "substation-data-3a7e7"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "AIzaSyC25fzBUqgBjBQZo-m3buxLweeA21FyV5s",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;