import automation from '../assets/automation.png';
import idea from '../assets/idea.png';
import treatment from '../assets/treatment.png';
import dos from '../assets/do.png';
import donts from '../assets/dont.png';
import symptoms from '../assets/symptoms.png';
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

export const navLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "treatments",
        title: "Treatments",
    },
    {
        id: "explore",
        title: "Explore",
    },
    {
        id: "identification",
        title: "Identify",
    }
];

export const services = [
    {
        title: "Automated Identification",
        icon: automation,
        details: "Spot any snake? Just upload a photo and our new tool powered with machine learning will tell you what species it is."
    },
    {
        title: "Learn",
        icon: idea,
        details: "Embark on a journey around the world to discover the fascinating world of snakes! We'll explore both venomous and non-venomous species, learning about their unique habits and adaptations."
    },
    {
        title: "Be aware",
        icon: treatment,
        details: "Learn what paramedics do to treat snakebites and how to prevent them from happening in the first place."
    }
]

export const treatments = [
    {
        title: "Do",
        icon: dos,
        iconBg: "#383E56",
        points: [
            "Remain calm and console the bitten person.",
            "Move slowly away from the snake.",
            "For spitting snake bites, flush the venom out of the eyes with clean, running water.",
            "Don't touch or mess with the bite wound.",
            "Take off any jewelry or tight clothing around the bite area.",
            "Lay the person down on their side and keep the bitten area still.",
            "Get medical help as soon as possible.",
            "If possible try to identify the snake safely.",
        ],
    },
    {
        title: "Don't",
        icon: donts,
        iconBg: "#E6DEDD",
        points: [
            "Don't panic.",
            "Don't attack or kill the snake, Remember, a striking distance snake can easily reach you to defend itself. Leave it alone.",
            "Don't Never rub your eyes! This can worsen irritation and spread venom.",
            "Don't wash, cut or suck the wound, it can lead to infections and venom spreading.",
            "Don't restrict blood flow by tying the wound.",
            "Don't lay the patient on his/her back, lying on the back can block the airways.",
            "Don't use traditional methods or unsafe treatments.",
        ],
    },
    {
        title: "Symptoms",
        icon: symptoms,
        iconBg: "#383E56",
        points: [
            "Signs of a puncture at the wound",
            "Redness, swelling, bruising, bleeding, or blistering around the bite",
            "Severe pain and tenderness at the site of the bite",
            "Nausea, vomiting, or diarrhea",
            "In severe cases, breathing may become difficult or even stop altogether",
            "Rapid heart rate, weak pulse, low blood pressure",
            "Disturbed vision"
        ],
    }
];

export const steps = [
    {
        title: "Behavior and Habitat of Snakes",
        icon: one,
        iconBg: "#E6DEDD",
        points: "Behavior is one component that may help identify snakes. Each species of snake exhibits different behaviors. Thus, remembering these differences can pose a challenge to an untrained individual. Regardless, behavior observation is an important component that helps wildlife professionals determine the right solutions in situations when wildlife and humans interact. One of the most well-known behavior traits can be observed in the rattlesnake.",
    },
    {
        title: "Head",
        icon: two,
        iconBg: "#E6DEDD",
        points: "Venomous snakes have distinct heads. While non-venomous snakes have a rounded head, venomous snakes have a more triangular-shaped head. The shape of a venomous snake's head may deter predators. However, some non-venomous snakes can mimic the triangular shape of non-venomous snakes by flattening their heads. This can help them appear more dangerous to potential predators.",
    },
    {
        title: "Coloring",
        icon: three,
        iconBg: "#E6DEDD",
        points: "While there are only four types of venomous snakes in the U.S., each type contains many subspecies with size and color variations that helps them blend in with their environments. Thus, coloring may not be an efficient method for distinguishing between a venomous and non-venomous snake. For example, venomous coral snakes and non-venomous scarlet king snakes both have a banded pattern of yellow, brown and black on their scales. The difference between the two types is that the red bands touch the yellow bands on a coral snake whereas red bands touch the black bands on scarlet king snakes.",
    },
    {
        title: "Pupils",
        icon: four,
        iconBg: "#E6DEDD",
        points: "Examining a snake’s pupils is another method that can be utilized to identify venomous versus non-venomous snakes. Like a cat’s eye, venomous snakes have thin, black, vertical pupils surrounded by a yellow-green eyeball while non-venomous snakes have rounded pupils. While this type of pupils can indicate that the snake is venomous, this is observed at close range, which can be a potentially dangerous identification method.",
    }
]


