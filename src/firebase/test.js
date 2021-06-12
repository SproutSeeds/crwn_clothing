import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Dh5rCtfiNijrXNbhDToB")
  .collection("cartItems")
  .doc("BWcXL2WXNvBF4KaadU9s");

firestore.doc("/users/Dh5rCtfiNijrXNbhDToB/cartItems/BWcXL2WXNvBF4KaadU9s");
firestore.collection("/users/Dh5rCtfiNijrXNbhDToB/cartItems/");
