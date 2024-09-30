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
        points: "Venomous snakes in Sri Lanka can be identified by observing their behavior and habitat. Cobras, known for their defensive hood-spreading and loud hissing, are commonly found in a variety of habitats including forests, grasslands, and near human settlements. The Common Krait is primarily nocturnal and shy, often hiding during the day in rural areas, agricultural fields, or under debris. Russell's Viper is highly aggressive, often producing a distinctive loud hiss before striking, and is frequently found in open fields, grasslands, and farmlands. The Saw-scaled Viper is quick to strike when threatened and makes a unique rattling sound by rubbing its rough scales together; it prefers arid, dry regions like scrublands and rocky areas. The Hump-nosed Viper is more sluggish and tends to stay hidden in wet, forested environments, often in dense vegetation or under leaf litter. Understanding these behaviors and habitats is key to identifying and avoiding these dangerous species in Sri Lanka.",
    },
    {
        title: "Head",
        icon: two,
        iconBg: "#E6DEDD",
        points: "Venomous snakes in Sri Lanka can be identified by their distinct head shapes. The Cobra has a broad, slightly flattened head that expands into a hood when threatened, while the Common Krait has a small, rounded head that blends seamlessly into its slender body. Russell's Viper has a prominent, triangular head that is much wider than its neck, with large nostrils and vertical pupils. Similarly, the Saw-scaled Viper also has a short, triangular head, with rough scales and vertical pupils. The Hump-nosed Viper features a distinct, pointed snout and a triangular head. These head shapes, particularly the triangular form in vipers and the hood in Cobras, are key indicators of venomous species in Sri Lanka.",
    },
    {
        title: "Coloring",
        icon: three,
        iconBg: "#E6DEDD",
        points: "Venomous snakes in Sri Lanka can often be identified by their distinct coloring. The Cobra (Naja naja) typically comes in shades of brown, black, or yellow, with a distinctive spectacle pattern on its hood. The Common Krait (Bungarus caeruleus) has a glossy black or bluish-black body with narrow white bands, creating a sharp contrast. Russell's Viper (Daboia russelii) is marked with a tan or brown body covered in dark, leopard-like spots. The Saw-scaled Viper (Echis carinatus) has a pale brown or gray body with light, zigzag patterns and rough, keeled scales. Lastly, the Hump-nosed Viper (Hypnale hypnale) displays a reddish-brown or brown body with darker zigzag or blotched patterns. These distinct colorations help in recognizing these snakes in the wild.",
    },
    {
        title: "Pupils",
        icon: four,
        iconBg: "#E6DEDD",
        points: "Examining a snake’s pupils is another method that can be utilized to identify venomous versus non-venomous snakes. Like a cat’s eye, venomous snakes have thin, black, vertical pupils surrounded by a yellow-green eyeball while non-venomous snakes have rounded pupils. While this type of pupils can indicate that the snake is venomous, this is observed at close range, which can be a potentially dangerous identification method.",
    }
]


