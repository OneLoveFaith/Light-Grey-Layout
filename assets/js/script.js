"use strict";

const header = document.querySelector('header .container');

header.innerHTML = `
    <div class="header">
        <div class="header-logo">
            <h1 class="header-title">Light Gray</h1>
            <input type="search" placeholder="Search">
        </div> 
        <ul class="menu">
            <li class="menu-item"><a href="index.html">Home</a></li>
            <li class="menu-item"><a href="LatestNews.html">Latest News</a></li>
            <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
            <li class="menu-item"><a href="aboutUs.html">About us</a></li>
            <li class="menu-item"><a href="contact.html">Contact</a></li>
        </ul>             
    </div>
`;
