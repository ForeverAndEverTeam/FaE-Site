import "@babel/polyfill";
import 'whatwg-fetch';
import "./closest";
import "./snow";
import startSnow from "./snow";

window.javascriptLocales = {
	copyMessage: "Just wanted to let you know that Satania is always with you! Even inside your clipboard! We are everywhere and you should really join us!\n" +
		"Also yes, any website can access your clipboard however they want, isn't that creepy?\n" +
		"Regardless, Satania is the BEST WAIFU, and you should agree! http://satania.moe/",
	searchByVoice: "lmao, no one uses this button",
	searchButton: "but the results are already there =]",
	searchBar: "this isn't a real search bar",
	snedHelp: "pls send helppp",
	perfection: "perfection",
	searchBarName: "satania",
	newTab: "Link opens in a new tab."
}

/*
	SLIDESHOW
*/
for (const slideshow of document.getElementsByClassName("slideshow")) {
	const slides = slideshow.querySelectorAll("picture");
	let currentSlide = 0;
	setInterval(() => {
		slides[currentSlide].classList.remove("shown");
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add("shown");
	}, 5000);
}

document.getElementById('close-language-protip').addEventListener("click", () => {
	document.getElementById('language-protip').style.display = 'none';
});

//Snow is automatically enabled when between december 11th and january 1st
const CURR_YEAR = new Date().getFullYear();
const D25_START = new Date(CURR_YEAR, 11, 11);
const D25_END = new Date(CURR_YEAR+1, 0, 1);

if (D25_START.getTime() <= new Date().getTime() && new Date().getTime() <= D25_END.getTime()) {
    startSnow();
}
