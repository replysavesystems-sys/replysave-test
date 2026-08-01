/*==========================================================
REPLYSAVE SYSTEMS
Premium Homepage
JavaScript
==========================================================*/



/*==========================================================
FAQ ACCORDION
==========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach((faq) => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



/*==========================================================
LIVE SIMULATOR
==========================================================*/

const tradeChoice = document.getElementById("trade-choice");

const replyType = document.getElementById("reply-type");

const generateButton = document.getElementById("generate-reply");

const simulationLog = document.getElementById("simulation-log");



const replies = {

    plumbing:

`Hi 👋 Thanks for calling.

We're currently on another job but didn't want to miss your enquiry.

Please reply to this message with a few details and we'll get back to you as soon as possible.

If it's an emergency leak please mention EMERGENCY.

Thank you,
ReplySave Demo`,



    heating:

`Thanks for calling.

We're currently helping another customer.

Reply with your postcode and a brief description of the issue and we'll contact you shortly.`,



    electrician:

`Thanks for getting in touch.

We're currently on site.

Reply with your enquiry and we'll respond as soon as we're available.`,



    roofing:

`Thanks for calling.

We're currently working on another property.

Please reply with your address and a short description of the work required.`,



    locksmith:

`Thanks for calling.

If you're locked out please reply URGENT.

We'll contact you as quickly as possible.`,



    mechanic:

`Thanks for calling.

We're currently with another vehicle.

Reply with your vehicle registration and we'll get back to you shortly.`

};



generateButton.addEventListener("click", () => {

let key = tradeChoice.value.toLowerCase();

if(key.includes("plumb")) key = "plumbing";
else if(key.includes("heat")) key = "heating";
else if(key.includes("electric")) key = "electrician";
else if(key.includes("roof")) key = "roofing";
else if(key.includes("lock")) key = "locksmith";
else key = "mechanic";

const method = replyType.value;

simulationLog.innerHTML = `

<div class="generated-reply">

<h3>

Automatic ${method} Preview

</h3>

<p>

${replies[key]}

</p>

</div>

`;

});



/*==========================================================
SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});
/*==========================================================
HEADER EFFECT
==========================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(5,8,22,.82)";
        header.style.backdropFilter = "blur(35px)";
        header.style.borderBottom =
            "1px solid rgba(79,140,255,.15)";

    } else {

        header.style.background = "rgba(5,8,22,.55)";
        header.style.borderBottom =
            "1px solid rgba(255,255,255,.05)";

    }

});



/*==========================================================
SCROLL REVEAL
==========================================================*/

const revealItems = document.querySelectorAll(

".feature-card, .price-card, .trust-item, .summary-card, .faq-item, .support-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});



/*==========================================================
DASHBOARD CARD STAGGER
==========================================================*/

const activityCards = document.querySelectorAll(".activity-card");

activityCards.forEach((card,index)=>{

card.style.animationDelay=`${index*.15}s`;

card.classList.add("slide-in");

});



/*==========================================================
COUNTER ANIMATION
==========================================================*/

const counters=document.querySelectorAll(

".summary-card strong,.hero-stats strong"

);

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

if(isNaN(number)) return;

let current=0;

const increment=Math.max(1,Math.ceil(number/60));

const suffix=text.replace(/[0-9]/g,"");

const timer=setInterval(()=>{

current+=increment;

if(current>=number){

current=number;

clearInterval(timer);

}

counter.innerText=current+suffix;

},18);

counterObserver.unobserve(counter);

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});



/*==========================================================
FLOATING BACKGROUND
==========================================================*/

const gradients=document.querySelectorAll(".gradient");

window.addEventListener("mousemove",(event)=>{

const x=(event.clientX/window.innerWidth)-0.5;

const y=(event.clientY/window.innerHeight)-0.5;

gradients.forEach((gradient,index)=>{

const movement=(index+1)*18;

gradient.style.transform=

`translate(${x*movement}px,${y*movement}px)`;

});

});



/*==========================================================
BUTTON RIPPLE EFFECT
==========================================================*/

document.querySelectorAll(

".button-primary,.button-secondary"

).forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});



/*==========================================================
PAGE LOADED
==========================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log(

"ReplySave Premium Homepage Loaded"

);

});
/*==========================================================
COOKIE BANNER
==========================================================*/

const cookieBanner =
document.getElementById("cookie-banner");

const acceptCookies =
document.getElementById("cookie-accept");

const declineCookies =
document.getElementById("cookie-decline");

if(localStorage.getItem("replysaveCookies")){

cookieBanner.style.display="none";

}

acceptCookies.addEventListener("click",()=>{

localStorage.setItem(
"replysaveCookies",
"accepted"
);

cookieBanner.style.display="none";

});

declineCookies.addEventListener("click",()=>{

localStorage.setItem(
"replysaveCookies",
"declined"
);

cookieBanner.style.display="none";

});
