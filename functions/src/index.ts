/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/* import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger"; */

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Main Code
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

/* export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
     db.collection("users")
      .doc(user.uid)
      .set(JSON.parse(JSON.stringify(user))); 
  }); */

/* Best Solution for now */
export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      providerData: user.providerData,
    };
    db.collection("users").doc(user.uid).set(newUser);
  });

// How to add New User to firestore database using firebase Cloud Functions
// To add New User to firestore database without using firebase Cloud Functions - go to SignUp & OauthButton
