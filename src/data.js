import navLocationIcon from "./assets/search-nav/nav-location-icon.svg";
import navBikeIcon from "./assets/search-nav/nav-bike-icon.svg";
import navCalendarIcon from "./assets/search-nav/nav-calendar-icon.svg";
import navGroupIcon from "./assets/search-nav/nav-group-icon.svg";

import bigSurImg from "./assets/destinations/big-sur.svg";
import prescottImg from "./assets/destinations/prescott.svg";
import fortMayersImg from "./assets/destinations/fort-mayers.svg";
import tucsonImg from "./assets/destinations/tucson.svg";
import stJosephImg from "./assets/destinations/st-joseph.svg";

import monasteroImg from "./assets/hotels-restaurants/monastero.svg";
import grandHotelImg from "./assets/hotels-restaurants/grand-hotel.svg";
import oberoiImg from "./assets/hotels-restaurants/oberoi.svg";
import beverlyHillsImg from "./assets/hotels-restaurants/beverly-hills.svg";
import ratingThree from "./assets/hotels-restaurants/rating-3.svg";
import ratingFour from "./assets/hotels-restaurants/rating-4.svg";
import ratingFive from "./assets/hotels-restaurants/rating-5.svg";

import eastVillageImg from "./assets/travel/east-village.svg";
import brooklynImg from "./assets/travel/brooklyn.svg";

import sailingImg from "./assets/activities/sailing.svg";
import climbingImg from "./assets/activities/climbing.svg";
import skiingImg from "./assets/activities/skiing.svg";
import hikingImg from "./assets/activities/hiking.svg";

export const navItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Hotels",
  },
  {
    id: 3,
    name: "Restaurants",
  },
  {
    id: 4,
    name: "Tours",
  },
  {
    id: 5,
    name: "Destionations",
  },
  {
    id: 6,
    name: "Activities",
  },
  {
    id: 7,
    name: "Contact",
  },
];

export const searchNavItems = [
  {
    id: 1,
    normalText: "Location",
    boldText: "Explore nearby destinations",
    icon: navLocationIcon,
  },
  {
    id: 2,
    normalText: "Activity",
    boldText: "All activities",
    icon: navBikeIcon,
  },
  {
    id: 3,
    normalText: "When",
    boldText: "Choose a Date",
    icon: navCalendarIcon,
  },
  {
    id: 4,
    normalText: "Guests",
    boldText: "1 guest",
    icon: navGroupIcon,
  },
];

export const destinations = [
  {
    id: 1,
    name: "Big Sur",
    location: "California, USA",
    image: bigSurImg,
  },
  {
    id: 2,
    name: "Prescott",
    location: "Arizona, USA",
    image: prescottImg,
  },
  {
    id: 3,
    name: "Fort Mayers",
    location: "Florida, USA",
    image: fortMayersImg,
  },
  {
    id: 4,
    name: "Tucson",
    location: "Arizona, USA",
    image: tucsonImg,
  },
  {
    id: 5,
    name: "St. Joseph",
    location: "Michigan, USA",
    image: stJosephImg,
  },
];

export const hotelsRestaurants = [
  {
    id: 1,
    name: "Monastero Santa Rosa Hotel & Spa",
    location: "Salerno, Italy",
    image: monasteroImg,
    ratingImage: ratingFive,
  },
  {
    id: 2,
    name: "Grand Hotel Tremezzo",
    location: "Lake Como, Italy",
    image: grandHotelImg,
    ratingImage: ratingThree,
  },
  {
    id: 3,
    name: "The Oberoi Udaivilas, Udaipur",
    location: "Udaipur, India",
    image: oberoiImg,
    ratingImage: ratingFour,
  },
  {
    id: 4,
    name: "AKA Beverly Hills",
    location: "Los Angeles, United States",
    image: beverlyHillsImg,
    ratingImage: ratingThree,
  },
];

export const travelItems = [
  {
    id: 1,
    image: eastVillageImg,
    location: "East Village Ice Cream Crawl",
    text: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour.At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
    calendarText: "Today",
    userText: "Maria Philips",
    commentsText: "2",
  },
  {
    id: 2,
    image: brooklynImg,
    location: "Brooklyn Bridge cinematic photo walk",
    text: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. ",
    calendarText: "Today",
    userText: "James Calzoni",
    commentsText: "17",
  },
];

export const activities = [
  {
    id: 1,
    name: "Sailing",
    image: sailingImg,
  },
  {
    id: 2,
    name: "Climbing",
    image: climbingImg,
  },
  {
    id: 3,
    name: "Skiing",
    image: skiingImg,
  },
  {
    id: 4,
    name: "Hiking",
    image: hikingImg,
  },
];

export const footerNav = [
  {
    id: 1,
    title: "About",
    links: ["About Us", "Features", "News", "Menu"],
  },
  {
    id: 2,
    title: "Company",
    links: ["Why 2rism", "Partner With Us", "FAQ", "Blog"],
  },
  {
    id: 3,
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Contact Us"],
  },
];
