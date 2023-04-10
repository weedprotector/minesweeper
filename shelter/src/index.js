const burger = document.querySelector('.hamburger');
const closeTriggers = document.querySelectorAll('[data-close]');
const aside = document.querySelector('.aside');
const substrate = document.querySelector('.substrate');
const petsData = [
	{
		name: "Jennifer",
		img: "src/img/jennifer.png",
		type: "Dog",
		breed: "Labrador",
		description:
			"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		age: "2 months",
		inoculations: ["none"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Sophia",
		img: "src/img/sophia.png",
		type: "Dog",
		breed: "Shih tzu",
		description:
			"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		age: "1 month",
		inoculations: ["parvovirus"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Woody",
		img: "src/img/woody.png",
		type: "Dog",
		breed: "Golden Retriever",
		description:
			"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		age: "3 years 6 months",
		inoculations: ["adenovirus", "distemper"],
		diseases: ["right back leg mobility reduced"],
		parasites: ["none"],
	},
	{
		name: "Scarlett",
		img: "src/img/scarlett.png",
		type: "Dog",
		breed: "Jack Russell Terrier",
		description:
			"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		age: "3 months",
		inoculations: ["parainfluenza"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Katrine",
		img: "src/img/katrine.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		age: "6 months",
		inoculations: ["panleukopenia"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Timmy",
		img: "src/img/timmy.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		age: "2 years 3 months",
		inoculations: ["calicivirus", "viral rhinotracheitis"],
		diseases: ["kidney stones"],
		parasites: ["none"],
	},
	{
		name: "Freddie",
		img: "src/img/freddie.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		age: "2 months",
		inoculations: ["rabies"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Charly",
		img: "src/img/charly.png",
		type: "Dog",
		breed: "Jack Russell Terrier",
		description:
			"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		age: "8 years",
		inoculations: ["bordetella bronchiseptica", "leptospirosis"],
		diseases: ["deafness", "blindness"],
		parasites: ["lice", "fleas"],
	},
];

// burger

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_flip');
    aside.classList.toggle('show');
    substrate.classList.toggle('substrate-show');
    document.body.classList.toggle('scroll-lock');
})

closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        burger.classList.toggle('burger_flip');
        aside.classList.toggle('show');
        substrate.classList.toggle('substrate-show');
        document.body.classList.toggle('scroll-lock');
    })
})

//slider
let currArr = [],
    pastArr = [],
    nextArr = [];

function createUniqArr(arr) {
    for (let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 7.99));
    }
    if (
        arr[0] == arr[1] ||
        arr[0] == arr[2] ||
        arr[1] == arr[2]  
    ) {
        arr.length = 0;
        createUniqArr(arr);
    } else {
        return arr
    }
    
}

createUniqArr(currArr);
createUniqArr(nextArr);
createUniqArr(pastArr);

function createSlides(arr1, arr2) {
    if (arr2.some((num) => arr1.includes(num))) {
        arr2.length = 0;
        createUniqArr(arr2);
        createSlides(arr1, arr2);
    } else {
        return(arr1, arr2);
    }
    
}

createSlides(currArr, pastArr);
createSlides(currArr, nextArr);

const leftSlides = document.querySelector('.pastSlides');
const centerSlides = document.querySelector('.currSlides');
const rightSlides = document.querySelector('.nextSlides');



const renderSlider = (item, cardNum)  => {
    item.innerHTML = `
        <div id=${cardNum[0]} class="pet-card">
            <img class="pet-card__img" src=${petsData[cardNum[0]].img} alt="card1">
            <p class="pet-card__name">${petsData[cardNum[0]].name}</p>
            <button class="pet-card__button button-bordered">Learn more</button>
        </div>
        
        <div id=${cardNum[1]} class="pet-card">
            <img class="pet-card__img" src=${petsData[cardNum[1]].img} alt="card1">
            <p class="pet-card__name">${petsData[cardNum[1]].name}</p>
            <button class="pet-card__button button-bordered">Learn more</button>
        </div>
        <div id=${cardNum[2]} class="pet-card">
            <img class="pet-card__img" src=${petsData[cardNum[2]].img} alt="card1">
            <p class="pet-card__name">${petsData[cardNum[2]].name}</p>
            <button class="pet-card__button button-bordered">Learn more</button>
        </div>
    `
}
renderSlider(leftSlides, pastArr);
renderSlider(centerSlides, currArr);
renderSlider(rightSlides, nextArr);


const nextSlide = document.querySelector('.next-slide');
const prevSlide = document.querySelector('.prev-slide');
const slidesContent = document.querySelector('.slides-content');
let offset = 0;

slidesContent.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === 'slide-left') {
        slidesContent.classList.remove("translate-left");
		rightSlides.innerHTML = centerSlides.innerHTML;
		centerSlides.innerHTML = leftSlides.innerHTML;
		currArr = pastArr;
		pastArr = [];
		nextArr = currArr;
		createUniqArr(pastArr);
		createSlides(currArr, pastArr);
		renderSlider(leftSlides, pastArr);
	} else {
		slidesContent.classList.remove("translate-right");
		leftSlides.innerHTML = centerSlides.innerHTML;
		centerSlides.innerHTML = rightSlides.innerHTML;
		currArr = nextArr;
		nextArr = [];
		pastArr = currArr;
		createUniqArr(nextArr);
		createSlides(currArr, nextArr);
		renderSlider(rightSlides, nextArr);
	}
});

const moveTo = (className) => {
	slidesContent.classList.add(`translate-${className}`);
	prevSlide.removeEventListener("click", moveTo);
	nextSlide.removeEventListener("click", moveTo);
};

prevSlide.addEventListener("click", () => moveTo("left"));
nextSlide.addEventListener("click", () => moveTo("right"));

const petCard = document.querySelectorAll('.pet-card');
const popUp = document.querySelector('.popUp')

centerSlides.addEventListener('click', (e) => {
    let target = e.target.closest('.pet-card');
    if (target && target.id) {
        let id = target.id;
        popUp.classList.toggle('hide');
        popUp.innerHTML = `
        <figure class="pets-description__item" >
            <img src=${petsData[id].img} alt=${petsData[id].name} class="popUp__img">
            <figcaption>
                <h2 class="common-title">${petsData[id].name}</h2>
                <h3 class="common-subtitle">${petsData[id].type} - ${petsData[id].breed}</h3>
                <p class="pets-description__text">${petsData[id].description}</p>
                <ul class="popUp__list">
                    <li>
                        <strong>Age:</strong> ${petsData[id].age}
                    </li>
                    <li>
                        <strong>Inoculations:</strong> ${petsData[id].inoculations.join(", ")}
                    </li>
                    <li>
                        <strong>Diseases:</strong> ${petsData[id].diseases.join(", ")}
                    </li>
                    <li>
                        <strong>Parasites:</strong> ${petsData[id].parasites.join(", ")}
                    </li>

                </ul>
            </figcaption>
            <button class="popUp__button"><img src="src/img/icons/Cross.svg" alt="" class="popUp__cross"></button>
	    </figure>`;
        document.body.classList.add('scroll-lock');
        slidesContent.style.position = 'static';
    }

})

popUp.addEventListener('click', (e) => {
    if (e.target) {
        popUp.classList.toggle('hide')
        document.body.classList.remove('scroll-lock');
        slidesContent.style.display = 'relative';
    }
})