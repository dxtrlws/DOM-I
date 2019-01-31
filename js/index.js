const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//  Set navigation links
// let nav1 = document.querySelector("nav a:nth-child(1)");
// nav1.textContent = siteContent.nav["nav-item-1"];

// let nav2 = document.querySelector("nav a:nth-child(2)");
// nav2.textContent = siteContent.nav["nav-item-2"];

// let nav3 = document.querySelector("nav a:nth-child(3)");
// nav3.textContent = siteContent.nav["nav-item-3"];

// let nav4 = document.querySelector("nav a:nth-child(4)");
// nav4.textContent = siteContent.nav["nav-item-4"];

// let nav5 = document.querySelector("nav a:nth-child(5)");
// nav5.textContent = siteContent.nav["nav-item-5"];

// let nav6 = document.querySelector("nav a:nth-child(6)");
// nav6.textContent = siteContent.nav["nav-item-6"];

const navLinks = document.querySelectorAll("nav a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].setAttribute("id", "nav-item-" + (i + 1));
  navLinks[i].style.color = "green";
  navLinks[i].textContent = siteContent["nav"][navLinks[i].getAttribute("id")];
}

function createNavLink(element, text) {
  const linkElement = document.createElement(element);
  linkElement.setAttribute("src", "#");
  linkElement.textContent = text;
  linkElement.style.color = "green";
  const nav = document.querySelector("nav");
  return { linkElement, nav };
}

function appNewLink(element, text, cb) {
  const el = cb(element, text);
  return el.nav.appendChild(el.linkElement);
}
function preNewLink(element, text, cb) {
  const el = cb(element, text);
  return el.nav.prepend(el.linkElement);
}

appNewLink("a", "Outreach Program", createNavLink);
preNewLink("a", "Home", createNavLink);

// Set CTA image and text

let hero = document.getElementById("cta-img");
hero.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text > h1");
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text > button");
ctaButton.textContent = siteContent.cta.button;

// Set top content

let featuresH4 = document.querySelector(
  ".main-content .top-content .text-content h4"
);
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let aboutH4 = document.querySelector(
  ".main-content .top-content .text-content:nth-child(2) h4"
);
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let featuresContent = document.querySelector(
  ".main-content .top-content .text-content p"
);
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutContent = document.querySelector(
  ".main-content .top-content .text-content:nth-child(2) p"
);
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Set middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Set bottom content

let servicesH4 = document.querySelector(".bottom-content .text-content h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let productH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productH4.textContent = siteContent["main-content"]["product-h4"];

let visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let servicesContent = document.querySelector(".bottom-content .text-content p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productContent = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productContent.textContent = siteContent["main-content"]["product-content"];

let visionContent = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionContent.textContent = siteContent["main-content"]["vision-content"];

// Set contact info
let contactH4 = document.querySelector(".contact > h4");
contactH4.textContent = siteContent.contact["contact-h4"];

let address = document.querySelector(".contact > p");
address.textContent = siteContent.contact.address;

let phone = document.querySelector(".contact p:nth-child(3)");
phone.textContent = siteContent.contact.phone;

let email = document.querySelector(".contact p:nth-child(4)");
email.textContent = siteContent.contact.email;

// Set footer
let footer = document.querySelector("footer > p");
footer.textContent = siteContent.footer.copyright;

document
  .querySelector("button")
  .addEventListener("click", () => alert("Lets go baby!"));
