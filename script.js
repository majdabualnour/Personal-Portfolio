// Create floating stars background
// function createStars() {
//     const stars = document.getElementById('stars');
//     for (let i = 0; i < 100; i++) {
//         const star = document.createElement('div');
//         star.style.position = 'absolute';
//         star.style.left = Math.random() * 100 + '%';
//         star.style.top = Math.random() * 100 + '%';
//         star.style.width = Math.random() * 3 + 'px';
//         star.style.height = star.style.width;
//         star.style.backgroundColor = 'white';
//         star.style.borderRadius = '50%';
//         star.style.opacity = Math.random();
//         star.style.animation = `float ${3 + Math.random() * 5}s infinite`;
//         stars.appendChild(star);
//     }
// }
// Replace with your GitHub username, repository name, and personal access token
const LOCAL_CODE_LINES = [
    'const GITHUB_USERNAME = "your-username";',
    'const REPO_NAME = "your-repo-name";',
    'const ACCESS_TOKEN = "your-access-token";',
    'async function fetchCodeFromGitHub() {',
    '  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/`;',
    
  'const greeting = "Hello, World!";',
  'function add(a, b) { return a + b; }',
  'console.log("Welcome to my portfolio!");',
  'const portfolio = { name: "Majda", skills: ["JavaScript", "React", "Node.js"] };',
  'for (let i = 0; i < 10; i++) { console.log(i); }',
  'const isAwesome = true;',
  'document.querySelector("#code-background").style.opacity = 0.8;',
  'const randomNumber = Math.floor(Math.random() * 100);',
  'class Person { constructor(name) { this.name = name; } }',
  'const fetchData = async () => { const response = await fetch(url); };',
  'const array = [1, 2, 3, 4, 5];',
  'const sum = array.reduce((acc, val) => acc + val, 0);',
  'const button = document.createElement("button");',
  'button.addEventListener("click", () => alert("Clicked!"));',
  'const map = new Map();',
  'map.set("key", "value");',
  'const promise = new Promise((resolve, reject) => { resolve("Success!"); });',
  'const element = document.getElementById("myElement");',
  'element.classList.add("active");',
  'const date = new Date();',
  'const formattedDate = date.toLocaleDateString();',
  'const regex = /[A-Z]/g;',
  'const matches = "Hello World".match(regex);',
  'const set = new Set([1, 2, 3, 4, 5]);',
  'const isEven = num => num % 2 === 0;',
  'const filteredArray = array.filter(isEven);',
  'const sortedArray = array.sort((a, b) => a - b);',
  'const reversedArray = array.reverse();',
  'const uniqueArray = [...new Set(array)];',
  'const timeout = setTimeout(() => console.log("Timeout!"), 1000);',
  'const interval = setInterval(() => console.log("Interval!"), 1000);',
  'clearInterval(interval);',
  'const json = JSON.stringify({ name: "Majda", age: 25 });',
  'const parsedJson = JSON.parse(json);',
  'const fetchUser = async () => { const response = await fetch("/api/user"); };',
  'const user = { name: "Majda", age: 25, skills: ["JavaScript", "React"] };',
  'const { name, age } = user;',
  'const numbers = [1, 2, 3, 4, 5];',
  'const doubled = numbers.map(num => num * 2);',
  'const isGreaterThanTen = num => num > 10;',
  'const hasGreaterThanTen = numbers.some(isGreaterThanTen);',
  'const allGreaterThanTen = numbers.every(isGreaterThanTen);',
  'const firstGreaterThanTen = numbers.find(isGreaterThanTen);',
  'const index = numbers.findIndex(isGreaterThanTen);',
  'const includesFive = numbers.includes(5);',
  'const slicedArray = numbers.slice(1, 3);',
  'const splicedArray = numbers.splice(1, 2);',
  'const concatenated = numbers.concat([6, 7, 8]);',
  'const joined = numbers.join(", ");',
  'const flattened = [[1, 2], [3, 4]].flat();',
  'const mapped = numbers.flatMap(num => [num, num * 2]);',
  'const reduced = numbers.reduce((acc, num) => acc + num, 0);',
  'const entries = Object.entries(user);',
  'const keys = Object.keys(user);',
  'const values = Object.values(user);',
  'const hasKey = Object.hasOwnProperty.call(user, "name");',
  'const newUser = Object.assign({}, user, { age: 26 });',
  'const spreadUser = { ...user, age: 26 };',
  'const frozenUser = Object.freeze(user);',
  'const sealedUser = Object.seal(user);',
  'const isFrozen = Object.isFrozen(user);',
  'const isSealed = Object.isSealed(user);',
  'const isExtensible = Object.isExtensible(user);',
  'const prototype = Object.getPrototypeOf(user);',
  'const descriptors = Object.getOwnPropertyDescriptors(user);',
  'const descriptor = Object.getOwnPropertyDescriptor(user, "name");',
  'const definedProperty = Object.defineProperty(user, "name", { value: "Majda" });',
  'const definedProperties = Object.defineProperties(user, { name: { value: "Majda" } });',
  'const created = Object.create(user);',
  'const isPrototype = user.isPrototypeOf(created);',
  'const hasOwn = user.hasOwnProperty("name");',
  'const propertyIsEnumerable = user.propertyIsEnumerable("name");',
  'const toString = user.toString();',
  'const toLocaleString = user.toLocaleString();',
  'const valueOf = user.valueOf();',
  'const isArray = Array.isArray(numbers);',
  'const isObject = typeof user === "object";',
  'const isFunction = typeof add === "function";',
  'const isString = typeof greeting === "string";',
  'const isNumber = typeof randomNumber === "number";',
  'const isBoolean = typeof isAwesome === "boolean";',
  'const isUndefined = typeof undefined === "undefined";',
  'const isNull = typeof null === "object";',
  'const isSymbol = typeof Symbol() === "symbol";',
  'const isBigInt = typeof BigInt(1) === "bigint";',
  'const isNaN = isNaN(NaN);',
  'const isFinite = isFinite(Infinity);',
  'const isInteger = Number.isInteger(1);',
  'const isSafeInteger = Number.isSafeInteger(1);',
  'const isFloat = Number.isFinite(1.1);',
  'const isNegativeZero = Object.is(-0, 0);',
  'const isPrimitive = Object.isPrimitive(1);',
  'const isFalsy = !1;',
  'const isTruthy = !!1;',
  'const isEven = num => num % 2 === 0;',
  'const isOdd = num => num % 2 !== 0;',
  'const isPositive = num => num > 0;',
  'const isNegative = num => num < 0;',
  'const isZero = num => num === 0;',
  'const isDivisibleBy = (num, divisor) => num % divisor === 0;',
  'const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; };',
  'const isPalindrome = str => str === str.split("").reverse().join("");',
  'const isAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");',
  'const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;',
  'const isWeekend = date => [0, 6].includes(date.getDay());',
  'const isToday = date => date.toDateString() === new Date().toDateString();',
  'const isTomorrow = date => date.toDateString() === new Date(new Date().setDate(new Date().getDate() + 1)).toDateString();',
  'const isYesterday = date => date.toDateString() === new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();',
  'const isFuture = date => date > new Date();',
  'const isPast = date => date < new Date();',
  'const isMorning = date => date.getHours() >= 6 && date.getHours() < 12;',
  'const isAfternoon = date => date.getHours() >= 12 && date.getHours() < 18;',
  'const isEvening = date => date.getHours() >= 18 && date.getHours() < 24;',
  'const isNight = date => date.getHours() >= 0 && date.getHours() < 6;',
  'const isDaylight = date => isMorning(date) || isAfternoon(date);',
  'const isDark = date => isEvening(date) || isNight(date);',
  'const isWeekday = date => ![0, 6].includes(date.getDay());',
  'const isHoliday = date => [0, 6].includes(date.getDay());',
  'const isBusinessDay = date => isWeekday(date) && !isHoliday(date);',
  'const isBusinessHours = date => isWeekday(date) && isDaylight(date);',
  'const isOpen = date => isBusinessDay(date) && isBusinessHours(date);',
  'const isClosed = date => !isOpen(date);',
  'const isWorking = date => isOpen(date);',
  'const isOff = date => isClosed(date);',
  'const isAvailable = date => isOpen(date);',
  'const isUnavailable = date => isClosed(date);',
  'const isBusy = date => isWorking(date);',
  'const isFree = date => isOff(date);',
  'const isActive = date => isWorking(date);',
  'const isInactive = date => isOff(date);',
  'const isOnline = date => isWorking(date);',
  'const isOffline = date => isOff(date);',
  'const isLoggedIn = date => isWorking(date);',
  'const isLoggedOut = date => isOff(date);',
  'const isConnected = date => isWorking(date);',
  'const isDisconnected = date => isOff(date);',
  'const isIdle = date => isOff(date);',
  'const isAway = date => isOff(date);',
  'const isDoNotDisturb = date => isOff(date);',
  'const isAvailableForChat = date => isWorking(date);',
  'const isUnavailableForChat = date => isOff(date);',
  'const isAvailableForCall = date => isWorking(date);',
  'const isUnavailableForCall = date => isOff(date);',
  'const isAvailableForMeeting = date => isWorking(date);',
  'const isUnavailableForMeeting = date => isOff(date);',
  'const isAvailableForEmail = date => isWorking(date);',
  'const isUnavailableForEmail = date => isOff(date);',
  'const isAvailableForMessage = date => isWorking(date);',
  'const isUnavailableForMessage = date => isOff(date);',
  'const isAvailableForVideoCall = date => isWorking(date);',
  'const isUnavailableForVideoCall = date => isOff(date);',
  'const isAvailableForVoiceCall = date => isWorking(date);',
  'const isUnavailableForVoiceCall = date => isOff(date);',
  'const isAvailableForScreenShare = date => isWorking(date);',
  'const isUnavailableForScreenShare = date => isOff(date);',
  'const isAvailableForFileShare = date => isWorking(date);',
  'const isUnavailableForFileShare = date => isOff(date);',
  'const isAvailableForCollaboration = date => isWorking(date);',
  'const isUnavailableForCollaboration = date => isOff(date);',
  'const isAvailableForProject = date => isWorking(date);',
  'const isUnavailableForProject = date => isOff(date);',
  'const isAvailableForTask = date => isWorking(date);',
  'const isUnavailableForTask = date => isOff(date);',
  'const isAvailableForEvent = date => isWorking(date);',
  'const isUnavailableForEvent = date => isOff(date);',
  'const isAvailableForAppointment = date => isWorking(date);',
  'const isUnavailableForAppointment = date => isOff(date);',
  'const isAvailableForReservation = date => isWorking(date);',
  'const isUnavailableForReservation = date => isOff(date);',
  'const isAvailableForBooking = date => isWorking(date);',
  'const isUnavailableForBooking = date => isOff(date);',
  'const isAvailableForOrder = date => isWorking(date);',
  'const isUnavailableForOrder = date => isOff(date);',
  'const isAvailableForPurchase = date => isWorking(date);',
  'const isUnavailableForPurchase = date => isOff(date);',
  'const isAvailableForSale = date => isWorking(date);',
  'const isUnavailableForSale = date => isOff(date);',
  'const isAvailableForRent = date => isWorking(date);',
  'const isUnavailableForRent = date => isOff(date);',
  'const isAvailableForLease = date => isWorking(date);',
  'const isUnavailableForLease = date => isOff(date);',
  'const isAvailableForLoan = date => isWorking(date);',
  'const isUnavailableForLoan = date => isOff(date);',
  'const isAvailableForInvestment = date => isWorking(date);',
  'const isUnavailableForInvestment = date => isOff(date);',
  'const isAvailableForDonation = date => isWorking(date);',
  'const isUnavailableForDonation = date => isOff(date);',
  'const isAvailableForSubscription = date => isWorking(date);',
  'const isUnavailableForSubscription = date => isOff(date);',
  'const isAvailableForMembership = date => isWorking(date);',
  'const isUnavailableForMembership = date => isOff(date);',
  'const isAvailableForService = date => isWorking(date);',
  'const isUnavailableForService = date => isOff(date);',
  'const isAvailableForSupport = date => isWorking(date);',
  'const isUnavailableForSupport = date => isOff(date);',
  'const isAvailableForConsultation = date => isWorking(date);',
  'const isUnavailableForConsultation = date => isOff(date);',
  'const isAvailableForTraining = date => isWorking(date);',
  'const isUnavailableForTraining = date => isOff(date);',
  'const isAvailableForWorkshop = date => isWorking(date);',
  'const isUnavailableForWorkshop = date => isOff(date);',
  'const isAvailableForSeminar = date => isWorking(date);',
  'const isUnavailableForSeminar = date => isOff(date);',
  'const isAvailableForConference = date => isWorking(date);',
  'const isUnavailableForConference = date => isOff(date);',
  'const isAvailableForWebinar = date => isWorking(date);',
  'const isUnavailableForWebinar = date => isOff(date);',
  'const isAvailableForEvent = date => isWorking(date);',
  'const isUnavailableForEvent = date => isOff(date);',
  'const isAvailableForParty = date => isWorking(date);',
  'const isUnavailableForParty = date => isOff(date);',
  'const isAvailableForCelebration = date => isWorking(date);',
  'const isUnavailableForCelebration = date => isOff(date);',
  'const isAvailableForGathering = date => isWorking(date);',
  'const isUnavailableForGathering = date => isOff(date);',
  'const isAvailableForMeeting = date => isWorking(date);',
  'const isUnavailableForMeeting = date => isOff(date);',
  'const isAvailableForAppointment = date => isWorking(date);',
  'const isUnavailableForAppointment = date => isOff(date);',
  'const isAvailableForReservation = date => isWorking(date);',
  'const isUnavailableForReservation = date => isOff(date);',
  'const isAvailableForBooking = date => isWorking(date);',
  'const isUnavailableForBooking = date => isOff(date);',
  'const isAvailableForOrder = date => isWorking(date);',
  'const isUnavailableForOrder = date => isOff(date);',
  'const isAvailableForPurchase = date => isWorking(date);',
  'const isUnavailableForPurchase = date => isOff(date);',
  'const isAvailableForSale = date => isWorking(date);'
  ];

  
  // Function to get a random subset of code lines
  function getRandomCodeLines(lines, count) {
    const shuffled = lines.sort(() => 0.5 - Math.random()); // Shuffle array randomly
    return shuffled.slice(0, count); // Take the first 'count' lines from the shuffled array
  }
  
  // Function to create floating code lines
  function createFloatingCodeLines(codeLines) {
    const codeBackground = document.getElementById('code-background');
  
    codeLines.forEach((line) => {
      const codeLine = document.createElement('div');
      codeLine.className = 'code-line';
      codeLine.textContent = line.trim();
      codeLine.style.top = Math.random() * 100 + '%';  // Random position top
      codeLine.style.left = Math.random() * 100 + '%';  // Random position left
  
      // Add the code line to the background
      codeBackground.appendChild(codeLine);
  
      // Wait for the popIn animation to finish and then start the popOut animation
      setTimeout(() => {
        codeLine.classList.add('exit'); // Apply the popOut animation to make it disappear
      }, 3000); // Wait for the 'popIn' animation to finish (3s)
  
      // Remove the code line after the popOut animation
      setTimeout(() => {
        codeLine.remove(); // Remove the code line after it finishes disappearing
      }, 6000); // Wait for the 'popOut' animation to finish (6s)
    });
  }
  
  // Initialize the background
  function initCodeBackground() {
    const randomLines = getRandomCodeLines(LOCAL_CODE_LINES, 5); // Number of lines to show (can adjust)
    createFloatingCodeLines(randomLines);
  }
  
  // Call the function to start
  initCodeBackground();
  
  // Optional: Loop the animation every few seconds to add more lines dynamically
  setInterval(() => {
    const randomLines = getRandomCodeLines(LOCAL_CODE_LINES, 5); // Number of lines to show (can adjust)
    createFloatingCodeLines(randomLines);
  }, 7000); // Add new lines every 7 seconds (can adjust)
  
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Initialize stars
createStars();


// Add testimonial slider functionality
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function cycleTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(cycleTestimonials, 8000);

// Add timeline animation
const timelineEvents = document.querySelectorAll('.timeline-event');
timelineEvents.forEach((event, index) => {
    event.style.transitionDelay = `${index * 100}ms`;
    observer.observe(event);
});

// Add this to script.js
async function fetchGitHubProjects() {
    try {
        const response = await fetch('https://api.github.com/users/majdabualnour/repos?sort=updated&direction=desc');
        const projects = await response.json();
        
        const projectsContainer = document.getElementById('github-projects');
        
        projects.forEach(async project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const languages = await fetchProjectLanguages(project.languages_url);
            
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || 'No description available'}</p>
                <div class="project-languages">
                    ${languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.html_url}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    ${project.homepage ? `
                    <a href="${project.homepage}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsContainer.innerHTML = '<p>Error loading projects. Please check back later.</p>';
    }
}

async function fetchProjectLanguages(url) {
    try {
        const response = await fetch(url);
        const languages = await response.json();
        return Object.keys(languages).slice(0, 3); // Show top 3 languages
    } catch (error) {
        return [];
    }
}

// Call the function when the page loads
window.addEventListener('load', fetchGitHubProjects);
// Add particles.js effect
document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js loaded');
    });
});


  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



