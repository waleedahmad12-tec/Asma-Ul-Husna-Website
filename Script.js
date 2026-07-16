
const names = [
    {
        id:1,
        arabic:"اللهأسماء الله الحسنى",
        english:"Asma-ul-Husna",
        meaning:"The Most Beautiful Names of Allah.",
        description:" Allah brought everything into existence from nothing and sustains all life.",
        audio:"allah/full audio.m4a"
    },
    {
        id:2,
        arabic:"الله",
        english:"The Allah",
        meaning:"The one God",
        description:" Allah brought everything into existence from nothing and sustains all life.",
        audio:"allah/1.MP3"
    },
{
    id:3,
    arabic:"الرَّحْمٰنُ",
    english:"Ar-Rahman",
    meaning:"The Most Merciful",
    description:"Allah is the Most Compassionate and Merciful.",
    audio:"allah/2.mp3"
},
{
    id:4,
    arabic:"الرَّحِيمُ",
    english:"Ar-Raheem",
    meaning:"The Most Compassionate",
    description:"Allah continuously shows mercy to His creation.",
    audio:"allah/3.mp3"
},
{
    id:5,
    arabic:"الْمَلِكُ",
    english:"Al-Malik",
    meaning:"The King",
    description:"Allah is the Absolute King of all creation.",
    audio:"allah/4.mp3"
},
{
    id:6,
    arabic:"الْقُدُّوسُ",
    english:"Al-Quddus",
    meaning:"The Most Holy",
    description:"Allah is Pure and Perfect.",
    audio:"allah/5.mp3"
},
{
    id:7,
    arabic:"السَّلَامُ",
    english:"As-Salam",
    meaning:"The Source of Peace",
    description:"Allah is free from every imperfection.",
    audio:"allah/6.mp3"
},
{
    id:8,
    arabic:"ٱلْمُؤْمِنُ",
    english:"Al Mu'min",
    meaning:"The Affirmer of Truth",
    description:"The Source of Security",
    audio:"allah/7.mp3"
},
{
    id:9,
    arabic:"الْمُهَيْمِنُ",
    english:"Al-Muhaymin",
    meaning:"The Overseer",
    description:"The protector and overseer of all creation.",
    audio:"allah/8.mp3"
},
{
    id:10,
    arabic:"الْعَزِيزُ",
    english:"Al-Aziz",
    meaning:"The Almighty",
    description:"The all-powerful whom none can overcome.",
    audio:"allah/9.mp3"
},
{
    id: 11,
    arabic: "الْجَبَّارُ",
    english: "Al-Jabbar",
    meaning: "The Compeller",
    description: "The one whose will always prevails.",
    audio: "allah/10.mp3"
},
{
    id: 12,
    arabic: "الْمُتَكَبِّرُ",
    english: "Al-Mutakabbir",
    meaning: "The Supreme",
    description: "The greatest in majesty and greatness.",
    audio: "allah/11.mp3"
},
{
    id: 13,
    arabic: "الْخَالِقُ",
    english: "Al-Khaliq",
    meaning: "The Creator",
    description: "The creator of everything from nothing.",
    audio: "allah/12.mp3"
},
{
    id: 14,
    arabic: "الْبَارِئُ",
    english: "Al-Bari",
    meaning: "The Originator",
    description: "The one who creates perfectly and flawlessly.",
    audio: "allah/13.mp3"
},
{
    id: 15,
    arabic: "الْمُصَوِّرُ",
    english: "Al-Musawwir",
    meaning: "The Fashioner",
    description: "The one who gives every creation its unique form.",
    audio: "allah/14.mp3"
},
{
    id: 16,
    arabic: "الْغَفَّارُ",
    english: "Al-Ghaffar",
    meaning: "The Constant Forgiver",
    description: "Repeatedly forgives the sins of those who repent.",
    audio: "allah/15.mp3"
},
{
    id: 17,
    arabic: "الْقَهَّارُ",
    english: "Al-Qahhar",
    meaning: "The All-Subduer",
    description: "The one who has complete control over everything.",
    audio: "allah/16.mp3"
},
{
    id: 18,
    arabic: "الْوَهَّابُ",
    english: "Al-Wahhab",
    meaning: "The Bestower",
    description: "The giver of endless gifts and blessings.",
    audio: "allah/17.mp3"
},
{
    id: 19,
    arabic: "الرَّزَّاقُ",
    english: "Ar-Razzaq",
    meaning: "The Provider",
    description: "The one who provides sustenance for all creation.",
    audio: "allah/18.mp3"
},
{
    id: 20,
    arabic: "الْفَتَّاحُ",
    english: "Al-Fattah",
    meaning: "The Opener",
    description: "The opener of doors of mercy, success, and knowledge.",
    audio: "allah/19.mp3"
},
{
    id: 21,
    arabic: "الْعَلِيمُ",
    english: "Al-'Aleem",
    meaning: "The All-Knowing",
    description: "Knows everything, hidden and apparent.",
    audio: "allah/20.mp3"
},
{
    id: 22,
    arabic: "الْقَابِضُ",
    english: "Al-Qabid",
    meaning: "The Withholder",
    description: "Restricts provision according to His perfect wisdom.",
    audio: "allah/21.mp3"
},
{
    id: 23,
    arabic: "الْبَاسِطُ",
    english: "Al-Basit",
    meaning: "The Expander",
    description: "Expands provision, mercy, and blessings.",
    audio: "allah/22.mp3"
},
{
    id: 24,
    arabic: "الْخَافِضُ",
    english: "Al-Khafid",
    meaning: "The Humbler",
    description: "Lowers whom He wills with perfect justice.",
    audio: "allah/23.mp3"
},
{
    id: 25,
    arabic: "الرَّافِعُ",
    english: "Ar-Rafi'",
    meaning: "The Exalter",
    description: "Raises whom He wills in honor and status.",
    audio: "allah/24.mp3"
},
{
    id: 26,
    arabic: "الْمُعِزُّ",
    english: "Al-Mu'izz",
    meaning: "The Honorer",
    description: "Grants honor, dignity, and strength.",
    audio: "allah/25.mp3"
},
{
    id: 27,
    arabic: "الْمُذِلُّ",
    english: "Al-Mudhill",
    meaning: "The Dishonorer",
    description: "Humbles whom He wills according to His wisdom.",
    audio: "allah/26.mp3"
},
{
    id: 28,
    arabic: "السَّمِيعُ",
    english: "As-Sami'",
    meaning: "The All-Hearing",
    description: "Hears every sound, prayer, and whisper.",
    audio: "allah/27.mp3"
},
{
    id: 29,
    arabic: "الْبَصِيرُ",
    english: "Al-Basir",
    meaning: "The All-Seeing",
    description: "Sees everything without limitation.",
    audio: "allah/28.mp3"
},
{
    id: 30,
    arabic: "الْحَكَمُ",
    english: "Al-Hakam",
    meaning: "The Judge",
    description: "Judges with perfect justice and wisdom.",
    audio: "allah/29.mp3"
},
{
    id: 31,
    arabic: "الْعَدْلُ",
    english: "Al-'Adl",
    meaning: "The Most Just",
    description: "Never wrongs anyone and is perfectly fair.",
    audio: "allah/30.mp3"
},
{
    id: 32,
    arabic: "اللَّطِيفُ",
    english: "Al-Latif",
    meaning: "The Most Gentle",
    description: "Shows kindness in the most subtle ways.",
    audio: "allah/31.mp3"
},
{
    id: 33,
    arabic: "الْخَبِيرُ",
    english: "Al-Khabir",
    meaning: "The All-Aware",
    description: "Fully aware of everything, seen and unseen.",
    audio: "allah/32.mp3"
},
{
    id: 34,
    arabic: "الْحَلِيمُ",
    english: "Al-Haleem",
    meaning: "The Most Forbearing",
    description: "Patient despite the sins and mistakes of His creation.",
    audio: "allah/33.mp3"
},
{
    id: 35,
    arabic: "الْعَظِيمُ",
    english: "Al-'Azim",
    meaning: "The Magnificent",
    description: "Infinite in greatness, majesty, and perfection.",
    audio: "allah/34.mp3"
},
{
    id: 36,
    arabic: "الْغَفُورُ",
    english: "Al-Ghafur",
    meaning: "The Most Forgiving",
    description: "Forgives the sins of those who sincerely repent.",
    audio: "allah/35.mp3"
},
{
    id: 37,
    arabic: "الشَّكُورُ",
    english: "Ash-Shakur",
    meaning: "The Most Appreciative",
    description: "Rewards even the smallest good deeds generously.",
    audio: "allah/36.mp3"
},
{
    id: 38,
    arabic: "الْعَلِيُّ",
    english: "Al-'Aliyy",
    meaning: "The Most High",
    description: "Exalted above all creation in rank and greatness.",
    audio: "allah/37.mp3"
},
{
    id: 39,
    arabic: "الْكَبِيرُ",
    english: "Al-Kabir",
    meaning: "The Most Great",
    description: "Greater than everything in existence.",
    audio: "allah/38.mp3"
},
{
    id: 40,
    arabic: "الْحَفِيظُ",
    english: "Al-Hafiz",
    meaning: "The Preserver",
    description: "Protects and preserves all of creation.",
    audio: "allah/39.mp3"
},
{
    id: 41,
    arabic: "الْمُقِيتُ",
    english: "Al-Muqit",
    meaning: "The Sustainer",
    description: "Provides nourishment and sustenance to every creature.",
    audio: "allah/40.mp3"
},
{
    id: 42,
    arabic: "الْحَسِيبُ",
    english: "Al-Hasib",
    meaning: "The Reckoner",
    description: "Sufficient for everyone and the one who calls all to account.",
    audio: "allah/41.mp3"
},
{
    id: 43,
    arabic: "الْجَلِيلُ",
    english: "Al-Jalil",
    meaning: "The Majestic",
    description: "Possessor of perfect majesty, honor, and greatness.",
    audio: "allah/42.mp3"
},
{
    id: 44,
    arabic: "الْكَرِيمُ",
    english: "Al-Karim",
    meaning: "The Most Generous",
    description: "Gives generously without limit or expectation.",
    audio: "allah/43.mp3"
},
{
    id: 45,
    arabic: "الرَّقِيبُ",
    english: "Ar-Raqib",
    meaning: "The Watchful",
    description: "Always watches over every action and every heart.",
    audio: "allah/44.mp3"
},
{
    id: 46,
    arabic: "الْمُجِيبُ",
    english: "Al-Mujib",
    meaning: "The Responsive",
    description: "Answers the sincere prayers of His servants.",
    audio: "allah/45.mp3"
},
{
    id: 47,
    arabic: "الْوَاسِعُ",
    english: "Al-Wasi'",
    meaning: "The All-Encompassing",
    description: "His mercy, knowledge, and generosity have no limits.",
    audio: "allah/46.mp3"
},
{
    id: 48,
    arabic: "الْحَكِيمُ",
    english: "Al-Hakim",
    meaning: "The Most Wise",
    description: "Every decision and action of Allah is full of wisdom.",
    audio: "allah/47.mp3"
},
{
    id: 49,
    arabic: "الْوَدُودُ",
    english: "Al-Wadud",
    meaning: "The Most Loving",
    description: "Loves His righteous servants with perfect love.",
    audio: "allah/48.mp3"
},
{
    id: 50,
    arabic: "الْمَجِيدُ",
    english: "Al-Majeed",
    meaning: "The Most Glorious",
    description: "Full of glory, honor, and nobility.",
    audio: "allah/49.mp3"
},
{
    id: 51,
    arabic: "الْبَاعِثُ",
    english: "Al-Ba'ith",
    meaning: "The Resurrector",
    description: "Will raise all creation on the Day of Judgment.",
    audio: "allah/50.mp3"
},
{
    id: 52,
    arabic: "الشَّهِيدُ",
    english: "Ash-Shahid",
    meaning: "The Witness",
    description: "Witnesses everything without missing anything.",
    audio: "allah/51.mp3"
},
{
    id: 53,
    arabic: "الْحَقُّ",
    english: "Al-Haqq",
    meaning: "The Truth",
    description: "The absolute truth whose promise never fails.",
    audio: "allah/52.mp3"
},
{
    id: 54,
    arabic: "الْوَكِيلُ",
    english: "Al-Wakeel",
    meaning: "The Trustee",
    description: "The best disposer of all affairs.",
    audio: "allah/53.mp3"
},
{
    id: 55,
    arabic: "الْقَوِيُّ",
    english: "Al-Qawiyy",
    meaning: "The All-Strong",
    description: "Possesses unlimited strength and power.",
    audio: "allah/54.mp3"
},
{
    id: 56,
    arabic: "الْمَتِينُ",
    english: "Al-Mateen",
    meaning: "The Firm",
    description: "Perfectly strong, steadfast, and unwavering.",
    audio: "allah/55.mp3"
},
{
    id: 57,
    arabic: "الْوَلِيُّ",
    english: "Al-Waliyy",
    meaning: "The Protecting Friend",
    description: "Supports, protects, and guides His believing servants.",
    audio: "allah/56.mp3"
},
{
    id: 58,
    arabic: "الْحَمِيدُ",
    english: "Al-Hamid",
    meaning: "The Praiseworthy",
    description: "Deserving of all praise in every situation.",
    audio: "allah/57.mp3"
},
{
    id: 59,
    arabic: "الْمُحْصِي",
    english: "Al-Muhsi",
    meaning: "The Reckoner",
    description: "Counts and records everything with perfect knowledge.",
    audio: "allah/58.mp3"
},
{
    id: 60,
    arabic: "الْمُبْدِئُ",
    english: "Al-Mubdi'",
    meaning: "The Originator",
    description: "Brings creation into existence from nothing.",
    audio: "allah/59.mp3"
},
{
    id: 61,
    arabic: "الْمُعِيدُ",
    english: "Al-Mu'id",
    meaning: "The Restorer",
    description: "Brings creation back to life after death.",
    audio: "allah/60.mp3"
},
{
    id: 62,
    arabic: "الْمُحْيِي",
    english: "Al-Muhyi",
    meaning: "The Giver of Life",
    description: "Gives life to whom He wills.",
    audio: "allah/61.mp3"
},
{
    id: 63,
    arabic: "الْمُمِيتُ",
    english: "Al-Mumit",
    meaning: "The Creator of Death",
    description: "Causes death at the appointed time.",
    audio: "allah/62.mp3"
},
{
    id: 64,
    arabic: "الْحَيُّ",
    english: "Al-Hayy",
    meaning: "The Ever-Living",
    description: "Lives eternally and never dies.",
    audio: "allah/63.mp3"
},
{
    id: 65,
    arabic: "الْقَيُّومُ",
    english: "Al-Qayyum",
    meaning: "The Self-Subsisting",
    description: "Sustains and maintains all of creation.",
    audio: "allah/64.mp3"
},
{
    id: 66,
    arabic: "الْوَاجِدُ",
    english: "Al-Wajid",
    meaning: "The Finder",
    description: "Nothing is ever beyond His knowledge or power.",
    audio: "allah/65.mp3"
},
{
    id: 67,
    arabic: "الْمَاجِدُ",
    english: "Al-Majid",
    meaning: "The Most Glorious",
    description: "Perfect in glory, honor, and nobility.",
    audio: "allah/66.mp3"
},
{
    id: 68,
    arabic: "الْوَاحِدُ",
    english: "Al-Wahid",
    meaning: "The One",
    description: "The One and only God with no partner.",
    audio: "allah/67.mp3"
},
{
    id: 69,
    arabic: "الْأَحَدُ",
    english: "Al-Ahad",
    meaning: "The Unique",
    description: "Absolutely One, without equal or likeness.",
    audio: "allah/68.mp3"
},
{
    id: 70,
    arabic: "الصَّمَدُ",
    english: "As-Samad",
    meaning: "The Eternal Refuge",
    description: "The One upon whom all creation depends.",
    audio: "allah/68.mp3"
},
{
    id: 71,
    arabic: "الْقَادِرُ",
    english: "Al-Qadir",
    meaning: "The All-Powerful",
    description: "Has complete power over everything.",
    audio: "allah/69.mp3"
},
{
    id: 72,
    arabic: "الْمُقْتَدِرُ",
    english: "Al-Muqtadir",
    meaning: "The Creator of All Power",
    description: "Exercises His power with perfect authority.",
    audio: "allah/70.mp3"
},
{
    id: 73,
    arabic: "الْمُقَدِّمُ",
    english: "Al-Muqaddim",
    meaning: "The Expediter",
    description: "Brings forward whom He wills according to His wisdom.",
    audio: "allah/71.mp3"
},
{
    id: 74,
    arabic: "الْمُؤَخِّرُ",
    english: "Al-Mu'akhkhir",
    meaning: "The Delayer",
    description: "Delays whom He wills according to His wisdom.",
    audio: "allah/72.mp3"
},
{
    id: 75,
    arabic: "الْأَوَّلُ",
    english: "Al-Awwal",
    meaning: "The First",
    description: "Existed before everything else.",
    audio: "allah/73.mp3"
},
{
    id: 76,
    arabic: "الْآخِرُ",
    english: "Al-Akhir",
    meaning: "The Last",
    description: "Will remain after everything has ended.",
    audio: "allah/74.mp3"
},
{
    id: 77,
    arabic: "الظَّاهِرُ",
    english: "Az-Zahir",
    meaning: "The Manifest",
    description: "His existence is evident through His signs.",
    audio: "allah/75.mp3"
},
{
    id: 78,
    arabic: "الْبَاطِنُ",
    english: "Al-Batin",
    meaning: "The Hidden",
    description: "Beyond the full understanding of His creation.",
    audio: "allah/76.mp3"
},
{
    id: 79,
    arabic: "الْوَالِي",
    english: "Al-Wali",
    meaning: "The Governor",
    description: "Controls and manages all affairs of creation.",
    audio: "allah/77.mp3"
},
{
    id: 80,
    arabic: "الْمُتَعَالِي",
    english: "Al-Muta'ali",
    meaning: "The Most Exalted",
    description: "Far above all imperfections and limitations.",
    audio: "allah/78.mp3"
},
{
    id: 81,
    arabic: "الْبَرُّ",
    english: "Al-Barr",
    meaning: "The Source of Goodness",
    description: "Perfectly kind, generous, and good to His creation.",
    audio: "allah/79.mp3"
},
{
    id: 82,
    arabic: "التَّوَّابُ",
    english: "At-Tawwab",
    meaning: "The Acceptor of Repentance",
    description: "Always accepts sincere repentance from His servants.",
    audio: "allah/80.mp3"
},
{
    id: 83,
    arabic: "الْمُنْتَقِمُ",
    english: "Al-Muntaqim",
    meaning: "The Avenger",
    description: "Administers justice upon persistent wrongdoing.",
    audio: "allah/81.mp3"
},
{
    id: 84,
    arabic: "الْعَفُوُّ",
    english: "Al-'Afuww",
    meaning: "The Pardoner",
    description: "Erases sins completely when He forgives.",
    audio: "allah/82.mp3"
},
{
    id: 85,
    arabic: "الرَّؤُوفُ",
    english: "Ar-Ra'uf",
    meaning: "The Most Kind",
    description: "Shows immense compassion and tenderness.",
    audio: "allah/83.mp3"
},
{
    id: 86,
    arabic: "مَالِكُ الْمُلْكِ",
    english: "Malik-ul-Mulk",
    meaning: "Owner of All Sovereignty",
    description: "Owns all kingdoms, power, and authority.",
    audio: "allah/84.mp3"
},
{
    id: 87,
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
    english: "Dhul-Jalali wal-Ikram",
    meaning: "Lord of Majesty and Honor",
    description: "Possessor of perfect majesty, honor, and generosity.",
    audio: "allah/85.mp3"
},
{
    id: 88,
    arabic: "الْمُقْسِطُ",
    english: "Al-Muqsit",
    meaning: "The Equitable",
    description: "Judges with complete fairness and justice.",
    audio: "allah/86.mp3"
},
{
    id: 89,
    arabic: "الْجَامِعُ",
    english: "Al-Jami'",
    meaning: "The Gatherer",
    description: "Will gather all creation on the Day of Judgment.",
    audio: "allah/87.mp3"
},
{
    id: 90,
    arabic: "الْغَنِيُّ",
    english: "Al-Ghani",
    meaning: "The Self-Sufficient",
    description: "Free of all needs while all creation depends on Him.",
    audio: "allah/88.mp3"
},
{
    id: 91,
    arabic: "الْمُغْنِي",
    english: "Al-Mughni",
    meaning: "The Enricher",
    description: "Grants wealth, sufficiency, and contentment.",
    audio: "allah/89.mp3"
},
{
    id: 92,
    arabic: "الْمَانِعُ",
    english: "Al-Mani'",
    meaning: "The Withholder",
    description: "Prevents harm or grants protection according to His wisdom.",
    audio: "allah/90.mp3"
},
{
    id: 93,
    arabic: "الضَّارُ",
    english: "Ad-Darr",
    meaning: "The Creator of Harm",
    description: "Allows hardship only according to His perfect wisdom.",
    audio: "allah/91.mp3"
},
{
    id: 94,
    arabic: "النَّافِعُ",
    english: "An-Nafi'",
    meaning: "The Creator of Benefit",
    description: "Grants benefit, goodness, and blessings.",
    audio: "allah/92.mp3"
},
{
    id: 95,
    arabic: "النُّورُ",
    english: "An-Nur",
    meaning: "The Light",
    description: "The light who guides hearts and illuminates the truth.",
    audio: "allah/93.mp3"
},
{
    id: 96,
    arabic: "الْهَادِي",
    english: "Al-Hadi",
    meaning: "The Guide",
    description: "Guides whom He wills to the straight path.",
    audio: "allah/94.mp3"
},
{
    id: 97,
    arabic: "الْبَدِيعُ",
    english: "Al-Badi'",
    meaning: "The Incomparable Originator",
    description: "Creates without any previous example.",
    audio: "allah/95.mp3"
},
{
    id: 98,
    arabic: "الْبَاقِي",
    english: "Al-Baqi",
    meaning: "The Everlasting",
    description: "Remains forever while everything else perishes.",
    audio: "allah/96.mp3"
},
{
    id: 99,
    arabic: "الْوَارِثُ",
    english: "Al-Warith",
    meaning: "The Inheritor",
    description: "The ultimate inheritor of everything in existence.",
    audio: "allah/97.mp3"
},
{
    id: 100,
    arabic: "الرَّشِيدُ",
    english: "Ar-Rashid",
    meaning: "The Guide to the Right Path",
    description: "Guides all affairs with perfect wisdom.",
    audio: "allah/98.mp3"
},
{
    id: 101,
    arabic: "الصَّبُورُ",
    english: "As-Sabur",
    meaning: "The Most Patient",
    description: "Never hastens punishment and is infinitely patient.",
    audio: "allah/99.mp3"
},

];



function safeGet(key, fallback){
    try{
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : fallback;
    }catch(e){
        console.warn("localStorage read failed:", e);
        return fallback;
    }
}

function safeSet(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value));
    }catch(e){
        console.warn("localStorage write failed:", e);
    }
}


let favorites = safeGet("favorites", []);
let currentAudio = null;


const namesContainer = document.getElementById("namesContainer");
const todayCard = document.getElementById("todayCard");
const searchInput = document.getElementById("searchInput");


function displayNames(data){

    namesContainer.innerHTML = "";

    data.forEach(item=>{

        const card = document.createElement("div");
        card.className = "name-card fade-up";

        const isFav = favorites.includes(item.english);

        card.innerHTML = `
        <h2>${item.arabic}</h2>
        <h3>${item.english}</h3>
        <p>${item.meaning}</p>
        <div class="card-buttons">
            <button class="card-btn listen-btn" onclick="playAudio('${item.audio}')">
                <i class="fa-solid fa-volume-high"></i>
            </button>
            <button class="card-btn favorite-btn ${isFav ? 'active' : ''}"
                onclick="toggleFavorite('${item.english}', this)">
                ❤️
            </button>
            <button class="card-btn copy-btn" onclick="copyName('${item.english}')">
                <i class="fa-solid fa-copy"></i>
            </button>
        </div>
        `;

        namesContainer.appendChild(card);

    });

}

displayNames(names);



function showTodayName(){

    const item = names[0];

    todayCard.innerHTML = `
    <h2>${item.arabic}</h2>
    <h3>${item.english}</h3>
    <p>${item.meaning}</p>
    <button class="card-btn listen-btn" onclick="playAudio('${item.audio}')">
        <i class="fa-solid fa-volume-high"></i>
    </button>
    `;

}

showTodayName();


searchInput.addEventListener("keyup", ()=>{

    const value = searchInput.value.toLowerCase();

    const result = names.filter(item=>{
        return(
            item.english.toLowerCase().includes(value) ||
            item.meaning.toLowerCase().includes(value)
        );
    });

    displayNames(result);

});

function playAudio(file){

    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(file);

    currentAudio.play().catch(()=>{
        console.log("Audio file not found:", file);
    });

}


function copyName(name){

    navigator.clipboard.writeText(name);

    let msg = document.createElement("div");
    msg.innerText = `${name} copied ✓`;
    msg.style.position = "fixed";
    msg.style.bottom = "30px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "#0B6E4F";
    msg.style.color = "white";
    msg.style.padding = "12px 25px";
    msg.style.borderRadius = "30px";
    msg.style.zIndex = "999999";

    document.body.appendChild(msg);

    setTimeout(()=>{
        msg.remove();
    }, 2000);

}



function toggleFavorite(name, btn){

    if(favorites.includes(name)){
        favorites = favorites.filter(item => item !== name);
    }else{
        favorites.push(name);
    }

    safeSet("favorites", favorites);

    if(btn){
        btn.classList.toggle("active", favorites.includes(name));
    }

    showFavorites();

}

function showFavorites(){

    const favoriteList = document.getElementById("favoriteList");
    if(!favoriteList) return;

    favoriteList.innerHTML = "";

    if(favorites.length === 0){
        favoriteList.innerHTML = `<p>No Favorite Names Added ❤️</p>`;
        return;
    }

    favorites.forEach(favName=>{

        const item = names.find(name => name.english === favName);

        if(item){
            favoriteList.innerHTML += `
            <div class="favorite-item">
                <div>
                    <h2 style="font-family:'Amiri',serif;color:#D4AF37;">${item.arabic}</h2>
                    <h3>${item.english}</h3>
                    <p>${item.meaning}</p>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <button class="card-btn listen-btn" onclick="playAudio('${item.audio}')">🔊</button>
                    <button class="card-btn copy-btn" onclick="removeFavorite('${item.english}')">❌</button>
                </div>
            </div>
            `;
        }

    });

}

function removeFavorite(name){

    favorites = favorites.filter(item => item !== name);
    safeSet("favorites", favorites);

    showFavorites();

    displayNames(
        searchInput && searchInput.value
            ? names.filter(item =>
                item.english.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                item.meaning.toLowerCase().includes(searchInput.value.toLowerCase()))
            : names
    );

}



function openFavorites(){
    const favoritesModal = document.getElementById("favoritesModal");
    if(favoritesModal){
        favoritesModal.style.display = "flex";
        showFavorites();
    }
}

const closeModal = document.getElementById("closeModal");
const favoritesModal = document.getElementById("favoritesModal");

if(closeModal && favoritesModal){
    closeModal.onclick = ()=>{
        favoritesModal.style.display = "none";
    };
}

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", ()=>{

        document.body.classList.toggle("dark");

        let mode = document.body.classList.contains("dark");

        safeSet("darkMode", mode);

        themeBtn.innerHTML = mode
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}

if(safeGet("darkMode", false) === true){

    document.body.classList.add("dark");

    if(themeBtn){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}


window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    if(loader){
        loader.classList.add("hidden");
    }
});


window.addEventListener("scroll", ()=>{

    const progress = document.querySelector(".progress-bar");

    if(progress){
        let scrollTop = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let percentage = height > 0 ? (scrollTop / height) * 100 : 0;
        progress.style.width = percentage + "%";
    }

});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(topBtn){
        topBtn.style.display = window.scrollY > 400 ? "block" : "none";
    }

});

if(topBtn){
    topBtn.addEventListener("click", ()=>{
        window.scrollTo({ top:0, behavior:"smooth" });
    });
}


function revealCards(){

    const cards = document.querySelectorAll(".name-card");

    cards.forEach(card=>{
        let position = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100){
            card.classList.add("fade-up");
        }
    });

}

window.addEventListener("scroll", revealCards);
revealCards();


function openDetails(id){

    const item = names.find(name => name.id === id);
    const modal = document.getElementById("detailsModal");

    if(modal && item){

        modal.innerHTML = `
        <div class="details-box">
            <button onclick="closeDetails()">❌</button>
            <h2>${item.arabic}</h2>
            <h3>${item.english}</h3>
            <p>${item.meaning}</p>
            <p>${item.description}</p>
            <button class="listen-btn card-btn" onclick="playAudio('${item.audio}')">🔊 Listen</button>
        </div>
        `;

        modal.style.display = "flex";

    }

}

function closeDetails(){
    const modal = document.getElementById("detailsModal");
    if(modal){
        modal.style.display = "none";
    }
}


function updateDailyName(){

    const item = names[0];
    const daily = document.getElementById("todayCard");

    if(daily && item){
        daily.innerHTML = `
        <h2>${item.arabic}</h2>
        <h3>${item.english}</h3>
        <p>${item.meaning}</p>
        <button class="card-btn listen-btn" onclick="playAudio('${item.audio}')">🔊</button>
        `;
    }

}

updateDailyName();

window.addEventListener("click", (e)=>{

    const detailsModal = document.getElementById("detailsModal");
    if(detailsModal && e.target === detailsModal){
        detailsModal.style.display = "none";
    }

    const favModal = document.getElementById("favoritesModal");
    if(favModal && e.target === favModal){
        favModal.style.display = "none";
    }

});


// ==============================

window.addEventListener("DOMContentLoaded", ()=>{
    showFavorites();
});
