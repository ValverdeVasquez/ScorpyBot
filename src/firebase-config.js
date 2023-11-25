import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDJ0XCNB9pP8zgwS8EfgKZJgVXT4_Qm44o",
  	authDomain: "scorpybot.firebaseapp.com",
  	databaseURL: "https://scorpybot-default-rtdb.firebaseio.com",
  	projectId: "scorpybot",
  	storageBucket: "scorpybot.appspot.com",
  	messagingSenderId: "1060524804719",
  	appId: "1:1060524804719:web:b3089ca034b569ff999b9a"
};

export const StartFirebase = () => {
  initializeApp(firebaseConfig);
  getDatabase();
};