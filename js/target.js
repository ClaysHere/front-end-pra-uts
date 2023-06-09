const hewan1 = document.querySelector("#blue-whale");
const hewan2 = document.querySelector("#great-white-shark");
const hewan3 = document.querySelector("#red-panda");
const hewan4 = document.querySelector("#dugong");
const hewan5 = document.querySelector("#sumatran-rhinoceros");
const reset1 = document.querySelector("#cookie-1");
const reset2 = document.querySelector("#cookie-2");
const reset3 = document.querySelector("#cookie-3");
const reset4 = document.querySelector("#cookie-4");
const reset5 = document.querySelector("#cookie-5");
const reset6 = document.querySelector("#cookie-6");
const reset7 = document.querySelector("#cookie-7");
const reset8 = document.querySelector("#cookie-8");
const reset9 = document.querySelector("#cookie-9");
const reset10 = document.querySelector("#cookie-10");
const reset11 = document.querySelector("#cookie-11");
const reset12 = document.querySelector("#cookie-12");
const reset13 = document.querySelector("#cookie-13");

let target = 0;

hewan1.addEventListener("click", () => {
  target = 1;
  document.cookie = "target=" + target;
});

hewan2.addEventListener("click", () => {
  target = 2;
  document.cookie = "target=" + target;
});

hewan3.addEventListener("click", () => {
  target = 3;
  document.cookie = "target=" + target;
});

hewan4.addEventListener("click", () => {
  target = 4;
  document.cookie = "target=" + target;
});

hewan5.addEventListener("click", () => {
  target = 5;
  document.cookie = "target=" + target;
});

reset1.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset2.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset3.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset4.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset5.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset6.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset7.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset8.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset9.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset10.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset11.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset12.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});
reset13.addEventListener("click", () => {
  target = 0;
  document.cookie = "target=" + target;
});

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("target="))
  .split("=")[1];

if (cookieValue !== undefined) {
  target = parseInt(cookieValue);
}

console.log(target);

const gambar = [
  [
    '<img src="../img/bl-wh-1.jpg" alt="blue whale">',
    '<img src="../img/bl-wh-2.jpg" alt="blue whale">',
    '<img src="../img/bl-wh-3.jpg" alt="blue whale">',
    '<img src="../img/bl-wh-4.jpg" alt="blue whale">',
    '<img src="../img/bl-wh-5.jpg" alt="blue whale">',
  ],

  [
    '<img src="../img/wh-sh-5.jpg" alt="great white shark">',
    '<img src="../img/wh-sh-2.jpg" alt="great white shark">',
    '<img src="../img/wh-sh-4.jpg" alt="great white shark">',
    '<img src="../img/wh-sh-6.jpg" alt="great white shark"><img src="../img/wh-sh-3.jpg" alt="great white shark"><img src="../img/wh-sh-7.jpg" alt="great white shark">',
    '<img src="../img/wh-sh-1.jpg" alt="great white shark">',
  ],

  [
    '<img src="../img/rd-pd-1.jpg" alt="red panda">',
    '<img src="../img/rd-pd-2.jpg" alt="red panda">',
    '<img src="../img/rd-pd-3.jpg" alt="red panda">',
    '<img src="../img/rd-pd-4.jpg" alt="red panda"><img src="../img/rd-pd-6.jpg" alt="red panda">',
    '<img src="../img/rd-pd-5.jpg" alt="red panda">',
  ],

  [
    '<img src="../img/dg-2.jpg" alt="dugong">',
    '<img src="../img/dg-1.jpg" alt="dugong"><img src="../img/dg-4.jpg" alt="dugong">',
    '<img src="../img/dg-5.jpg" alt="dugong">',
    '<img src="../img/dg-6.jpg" alt="dugong"><img src="../img/dg-7.jpg" alt="dugong">',
    '<img src="../img/dg-3.jpg" alt="dugong">',
  ],

  [
    '<img src="../img/sm-rh-2.jpg" alt="sumatran rhinoceros"><br><br><br><br><img src="../img/sm-rh-1.jpg" alt="sumatran rhinoceros">',
    '<img src="../img/sm-rh-3.jpg" alt="sumatran rhinoceros"><img src="../img/sm-rh-5.jpg" alt="sumatran rhinoceros">',
    '<img src="../img/sm-rh-4.jpg" alt="sumatran rhinoceros">',
    '<img src="../img/sm-rh-6.jpg" alt="sumatran rhinoceros"><img src="../img/sm-rh-7.jpg" alt="sumatran rhinoceros">',
    '<img src="../img/sm-rh-8.jpg" alt="sumatran rhinoceros">',
  ],
];

const teks = [
  [
    "Blue Whale",

    "<p>The blue whale (<i>Balaenoptera musculus</i>) is a marine mammal and a baleen whale. Reaching a maximum confirmed length of 29.9 meters (98 ft) and weighing up to 199 tonnes (196 long tons; 219 short tons), it is the largest animal known ever to have existed. The blue whale's long and slender body can be of various shades of greyish-blue dorsally and somewhat lighter underneath. Four subspecies are recognized: B. m. musculus in the North Atlantic and North Pacific, B. m. intermedia in the Southern Ocean, B. m. brevicauda (the pygmy blue whale) in the Indian Ocean and South Pacific Ocean, B. m. indica in the Northern Indian Ocean. There is also a population in the waters off Chile that may constitute a fifth subspecies.</br></br>In general, blue whale populations migrate between their summer feeding areas near the poles and their winter breeding grounds near the tropics. There is also evidence of year-round residencies, and partial or age/sex-based migration. Blue whales are filter feeders; their diet consists almost exclusively of krill. They are generally solitary or gather in small groups, and have no well-defined social structure other than mother-calf bonds. The fundamental frequency for blue whale vocalizations ranges from 8 to 25 Hz and the production of vocalizations may vary by region, season, behavior, and time of day. Orcas are their only natural predators.</br></br>The blue whale was once abundant in nearly all the Earth's oceans until the end of the 19th century. It was hunted almost to the point of extinction by whalers until the International Whaling Commission banned all blue whale hunting in 1966. The International Union for Conservation of Nature has listed blue whales as Endangered as of 2018. It continues to face numerous man-made threats such as ship strikes, pollution, ocean noise and climate change.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The genus name, Balaenoptera, means winged whale while the species name, musculus, could mean "muscle" or a diminutive form of "mouse", possibly a pun by Carl Linnaeus when he named the species in Systema Naturae. One of the first published descriptions of a blue whale comes from Robert Sibbald\'s Phalainologia Nova, after Sibbald found a stranded whale in the estuary of the Firth of Forth, Scotland, in 1692. The name "blue whale" was derived from the Norwegian "blåhval", coined by Svend Foyn shortly after he had perfected the harpoon gun. The Norwegian scientist G. O. Sars adopted it as the common name in 1874.</br></br>Blue whales were referred to as \'Sibbald\'s rorqual\', after Robert Sibbald, who first described the species. Herman Melville called the blue whale "sulphur bottom" in his novel Moby Dick because of the accumulation of diatoms creating a yellowish appearance on their pale underside.</p>',

    "<h2 class='title'>Reproduction</h2></br><p>Blue whales generally reach sexual maturity at 8–10 years. In the Northern Hemisphere, the length at which they reach maturity is 21–23 meters (69–75 ft) for females and 20–21 meters (66–69 ft) for males. In the Southern Hemisphere, the length of maturity is 23–24 meters (75–79 ft) and 22 meters (72 ft) for females and males respectively. Male pygmy blue whales average 18.7 meters (61.4 ft) at sexual maturity. Female pygmy blue whales are 21.0–21.7 meters (68.9–71.2 ft) in length and roughly 10 years old at the age of sexual maturity. Little is known about mating behavior, or breeding and birthing areas. Blue whales appear to be polygynous, with males competing for females. A male blue whale typically trails a female and will fight off potential rivals. The species mates from fall to winter.<br><br>\
        Pregnant females eat roughly four percent of their body weight daily, amounting to 60% of their overall body weight throughout summer foraging periods.Gestation may last 10–12 months with calves being 6–7 meters (20–23 ft) long and weighing 2–3 metric tons (2.0–3.0 long tons; 2.2–3.3 short tons) at birth. Estimates suggest that because calves require 2–4 kilograms (4.4–8.8 lb) milk per kg of mass gain, blue whales likely produce 220 kilograms (490 lb) of milk per day (ranging from 110 to 320 kilograms (240 to 710 lb) of milk per day). The first video of a calf thought to be nursing was filmed in New Zealand in 2016. Calves may be weaned when they reach 6–8 months old at a length of 16 meters (53 ft). They gain roughly 37,500 pounds (17,000 kg) during the weaning period. Interbirth periods last two to three years, they average 2.6 years in pygmy blue whales.</p>",

    "<h2 class='title'>Conservation</h2></br><p>The global blue whale population is estimated to be 5,000–15,000 mature individuals and 10,000-25,000 total as of 2018. By comparison, there were at least 140,000 mature whales in 1926. There are an estimated total of 1,000–3,000 whales in the North Atlantic, 3,000–5,000 in the North Pacific and 5,000–8,000 in the Antarctic. There are possibly 1,000–3,000 whales in the eastern South Pacific while the pygmy blue whale may number 2,000–5,000 individuals. Blue whales have been protected in areas of the Southern Hemisphere since 1939. In 1955 they were given complete protection in the North Atlantic under the International Convention for the Regulation of Whaling; this protection was extended to the Antarctic in 1965 and the North Pacific in 1966. The protected status of North Atlantic blue whales was not recognized by Iceland until 1960. In the US, the species is protected under the Endangered Species Act.<br><br>\
        Blue whales are formally classified as endangered under both the US Endangered Species Act and the IUCN Red List. They are also listed on Appendix I under the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) and the Convention on the Conservation of Migratory Species of Wild Animals. Although for some populations there is not enough information on current abundance trends (e.g., pygmy blue whales), others are critically endangered (e.g., Antarctic blue whales).</p>",

    "<h2 class='title'>Fun Facts</h2></br><ol><li>During certain times of the year, a single adult blue whale consumes about 4 tons of krill a day.</li><li>Blue whales look true blue underwater, but on the surface their coloring is more a mottled blue-gray. Their underbellies take on a yellowish hue from the millions of microorganisms that take up residence in their skin.</li><li>Blue whales are among Earth's longest-lived animals. Scientists have discovered that by counting the layers of a deceased whale's waxlike earplugs, they can get a close estimate of the animal's age. The oldest blue whale found using this method was determined to be around 110 years old. Average lifespan is estimated at around 80 to 90 years.</li><li>Blue whales are among the loudest animals on the planet. They emit a series of pulses, groans, and moans, and it’s thought that, in good conditions, blue whales can hear each other up to 1,000 miles away.</li></ol>",
  ],

  [
    "Great White Shark",

    "<p>The great white shark (<i>Carcharodon carcharias</i>), also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with the largest preserved female specimen measuring 5.83 m (19.1 ft) in length and around 2,000 kg (4,410 lb) in weight at maturity. However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average. According to a 2014 study, the lifespan of great white sharks is estimated to be as long as 70 years or more, well above previous estimates, making it one of the longest lived cartilaginous fishes currently known. According to the same study, male great white sharks take 26 years to reach sexual maturity, while the females take 33 years to be ready to produce offspring. Great white sharks can swim at speeds of 25 km/h (16 mph) for short bursts and to depths of 1,200 m (3,900 ft).</br></br>The great white shark is an apex predator, as it has no known natural predators other than, on very rare occasions, the orca. It is arguably the world's largest-known extant macropredatory fish, and is one of the primary predators of marine mammals, up to the size of large baleen whales. This shark is also known to prey upon a variety of other marine animals, including fish, and seabirds. It is the only known surviving species of its genus Carcharodon, and is responsible for more recorded human bite incidents than any other shark.</br></br>The species faces numerous ecological challenges which has resulted in international protection. The International Union for Conservation of Nature lists the great white shark as a vulnerable species, and it is included in Appendix II of CITES. It is also protected by several national governments, such as Australia (as of 2018). Due to their need to travel long distances for seasonal migration and extremely demanding diet, it is not logistically feasible to keep great white sharks in captivity; because of this, while attempts have been made to do so in the past, there are no known aquariums in the world believed to house a live specimen.</br></br>\
    The novel Jaws by Peter Benchley and its subsequent film adaptation by Steven Spielberg depicted the great white shark as a ferocious man-eater. Humans are not a preferred prey of the great white shark, but the great white is nevertheless responsible for the largest number of reported and identified fatal unprovoked shark attacks on humans, although this happens very rarely (typically fewer than 10 times a year globally).</p>",

    "<h2 class='title'>Taxonomy</h2></br><p>The great white is the sole recognized extant species in the genus Carcharodon, and is one of five extant species belonging to the family Lamnidae. Other members of this family include the mako sharks, porbeagle, and salmon shark. The family belongs to the Lamniformes, the order of mackerel sharks.</br></br>\
        The English name 'white shark' and its Australian variant 'white pointer'[22] is thought to have come from the shark's stark white underside, a characteristic feature most noticeable in beached sharks lying upside down with their bellies exposed.[23] Colloquial use favours the name 'great white shark', with 'great' perhaps stressing the size and prowess of the species,[24] and \"white shark\" having historically been used to describe the much smaller oceanic white-tipped shark, later referred to for a time as the \"lesser white shark\". Most scientists prefer 'white shark', as the name \"lesser white shark\" is no longer used, while some use 'white shark' to refer to all members of the Lamnidae.</br></br>\
    The scientific genus name Carcharodon literally means \"jagged tooth\", a reference to the large serrations that appear in the shark's teeth. It is a portmanteau of two Ancient Greek words: the prefix carchar- is derived from καρχαρίας (kárkharos), which means \"jagged\" or \"sharp\". The suffix -odon is a romanization of ὀδών (odṓn), a which translates to \"tooth\". The specific name carcharias is a Latinization of καρχαρίας (karkharías), the Ancient Greek word for shark. The great white shark was one of the species originally described by Carl Linnaeus in his 1758 10th edition of Systema Naturae, in which it was identified as an amphibian and assigned the scientific name Squalus carcharias, Squalus being the genus that he placed all sharks in. By the 1810s, it was recognized that the shark should be placed in a new genus, but it was not until 1838 when Sir Andrew Smith coined the name Carcharodon as the new genus.</br></br>\
    There have been a few attempts to describe and classify the great white before Linnaeus. One of its earliest mentions in literature as a distinct type of animal appears in Pierre Belon's 1553 book De aquatilibus duo, cum eiconibus ad vivam ipsorum effigiem quoad ejus fieri potuit, ad amplissimum cardinalem Castilioneum. In it, he illustrated and described the shark under the name Canis carcharias based on the jagged nature of its teeth and its alleged similarities with dogs. Another name used for the great white around this time was Lamia, first coined by Guillaume Rondelet in his 1554 book Libri de Piscibus Marinis, who also identified it as the fish that swallowed the prophet Jonah in biblical texts. Linnaeus recognized both names as previous classifications.</p>",

    "<h2 class='title'>Reproduction</h2></br><p>There are several unknowns in the great white shark's reproductive process; biologists have only been able to dissect about 10 pregnant females [source: McGhee]. Because of the scars on their fins, great whites likely practice the typical courtship rituals of a shark, which involve the male biting the female to hold her in place during insemination.<br><br>\
        The great white shark is ovoviviparous, which means that the shark grows in an egg, which is then hatched inside the mother. Shortly thereafter, the shark pup is born. While in the womb, great white shark embryos feast on unfertilized eggs, a practice known as oophagy. It doesn't appear that they eat the fertilized eggs, as a few other species of shark has been known to do, but they may swallow their own teeth when they lose them for the calcium.<br><br>\
        The gestation period is estimated to be 12 to 18 months, but this is largely speculative. The litter size of the great white ranges from two to 10 pups, although litters of up to 17 pups have been documented [sources: MarineBio, McGhee]. At birth, great white shark pups measure 5 feet (1.5 meters) and weigh about 77 pounds (35 kilograms). The great white grows slowly: Males reach maturity at age 9 or 10, while females are mature at 14 to 16 years of age. Scientists believe that they live about 30 years.<br><br>\
        Because of the long gestation period, it's possible that female great whites give birth every other year, taking some time to rest after mating. This low reproductive rate and slow growth to maturity are concerns to great white conservationists. Scientists are interested in learning more about the shark's reproductive habits so that they will know better what conservation methods are needed. As we mentioned, great whites face numerous threats from humans, including fishing for fins and teeth and hunting for sport.</p>",

    '<h2 class=\'title\'>Conservation status</h2></br><p>It is unclear how much of a concurrent increase in fishing for great white sharks has caused the decline of great white shark populations from the 1970s to the present. No accurate global population numbers are available, but the great white shark is now considered vulnerable. Sharks taken during the long interval between birth and sexual maturity never reproduce, making population recovery and growth difficult.</br></br>\
    The International Union for Conservation of Nature notes that very little is known about the actual status of the great white shark, but as it appears uncommon compared to other widely distributed species, it is considered vulnerable. It is included in Appendix II of CITES, meaning that international trade in the species (including parts and derivatives) requires a permit. As of March 2010, it has also been included in Annex I of the CMS Migratory Sharks MoU, which strives for increased international understanding and coordination for the protection of certain migratory sharks. A February 2010 study by Barbara Block of Stanford University estimated the world population of great white sharks to be lower than 3,500 individuals, making the species more vulnerable to extinction than the tiger, whose population is in the same range. According to another study from 2014 by George H. Burgess, Florida Museum of Natural History, University of Florida, there are about 2,000 great white sharks near the California coast, which is 10 times higher than the previous estimate of 219 by Barbara Block.</br></br>\
        Fishermen target many sharks for their jaws, teeth, and fins, and as game fish in general. The great white shark, however, is rarely an object of commercial fishing, although its flesh is considered valuable. If casually captured (it happens for example in some tonnare in the Mediterranean), it is misleadingly sold as smooth-hound shark.</br></br>\
        In Australia</br></br>\
        The great white shark was declared vulnerable by the Australian Government in 1999 because of significant population decline and is currently protected under the Environmental Protection and Biodiversity Conservation (EPBC) Act. The causes of decline prior to protection included mortality from sport fishing harvests as well as being caught in beach protection netting.</br></br>\
        The national conservation status of the great white shark is reflected by all Australian states under their respective laws, granting the species full protection throughout Australia regardless of jurisdiction. Many states had prohibited the killing or possession of great white sharks prior to national legislation coming into effect. The great white shark is further listed as threatened in Victoria under the Flora and Fauna Guarantee Act, and as rare or likely to become extinct under Schedule 5 of the Wildlife Conservation Act in Western Australia.</br></br>\
        In 2002, the Australian government created the White Shark Recovery Plan, implementing government-mandated conservation research and monitoring for conservation in addition to federal protection and stronger regulation of shark-related trade and tourism activities.[203] An updated recovery plan was published in 2013 to review progress, research findings, and to implement further conservation actions.[15] A study in 2012 revealed that Australia\'s white shark population was separated by Bass Strait into genetically distinct eastern and western populations, indicating a need for the development of regional conservation strategies.</br></br>\
        Presently, human-caused shark mortality is continuing, primarily from accidental and illegal catching in commercial and recreational fishing as well as from being caught in beach protection netting, and the populations of great white shark in Australia are yet to recover.</br></br>\
        In spite of official protections in Australia, great white sharks continue to be killed in state "shark control" programs within Australia. For example, the government of Queensland has a "shark control" program (shark culling) which kills great white sharks (as well as other marine life) using shark nets and drum lines with baited hooks.[205][161] In Queensland, great white sharks that are found alive on the baited hooks are shot. The government of New South Wales also kills great white sharks in its "shark control" program.[161] Partly because of these programs, shark numbers in eastern Australia have decreased.</br></br>\
        The Australasian population of great white sharks is believed to be in excess of 8,000–10,000 individuals according to genetic research studies done by CSIRO, with an adult population estimated to be around 2,210 individuals in both Eastern and Western Australia. The annual survival rate for juveniles in these two separate populations was estimated in the same study to be close to 73 percent, while adult sharks had a 93 percent annual survival rate. Whether or not mortality rates in great white sharks have declined, or the population has increased as a result of the protection of this species in Australian waters is as yet unknown due to the slow growth rates of this species.</br></br>\
        In New Zealand</br></br>\
        As of April 2007, great white sharks were fully protected within 370 km (230 mi) of New Zealand and additionally from fishing by New Zealand-flagged boats outside this range. The maximum penalty is a $250,000 fine and up to six months in prison.[207] In June 2018 the New Zealand Department of Conservation classified the great white shark under the New Zealand Threat Classification System as "Nationally Endangered". The species meets the criteria for this classification as there exists a moderate, stable population of between 1000 and 5000 mature individuals. This classification has the qualifiers "Data Poor" and "Threatened Overseas".</br></br>\
        In North America</br></br>\
        In 2013, great white sharks were added to California\'s Endangered Species Act. From data collected, the population of great whites in the North Pacific was estimated to be fewer than 340 individuals. Research also reveals these sharks are genetically distinct from other members of their species elsewhere in Africa, Australia, and the east coast of North America, having been isolated from other populations.</br></br>\
        A 2014 study estimated the population of great white sharks along the California coastline to be approximately 2,400.</br></br>\
        In 2015 Massachusetts banned catching, cage diving, feeding, towing decoys, or baiting and chumming for its significant and highly predictable migratory great white population without an appropriate research permit. The goal of these restrictions is to both protect the sharks and public health.</p>',

    "<h2 class='title'>Fun Facts</h2></br><ol><li>They use their serrated teeth to shred their prey into pieces. There are approximately 300 teeth in the mouth of a Great White and they only lose 1000 over their lifespan. Each time they lose teeth a new row slides into place</li><li>A Great White can devour a whole seal and won’t need to eat for another three months after that.</li><li>Great White Sharks rarely resort to combat with each other and humans. Even though shark attacks have occurred, research has shown that sharks are generally picky eaters and are not inclined to prey on humans.</li><li>Although these sharks are often classified as loners, there is a degree of social hierarchy that does exist among them. Female sharks often dominate males.</li></ol>",
  ],

  [
    "Red Panda",

    '<p>The red panda (<i>Ailurus fulgens</i>), also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China. It has dense reddish-brown fur with a black belly and legs, white-lined ears, a mostly white muzzle and a ringed tail. Its head-to-body length is 51–63.5 cm (20.1–25.0 in) with a 28–48.5 cm (11.0–19.1 in) tail, and it weighs between 3.2 and 15 kg (7.1 and 33.1 lb). It is well adapted to climbing due to its flexible joints and curved semi-retractile claws.</br></br>\
    The red panda was first formally described in 1825. The two currently recognised subspecies, the Himalayan and the Chinese red panda, genetically diverged about 250,000 years ago. The red panda\'s place on the evolutionary tree has been debated, but modern genetic evidence places it in close affinity with raccoons, weasels, and skunks. It is not closely related to the giant panda, which is a bear, though both possess elongated wrist bones or "false thumbs" used for grasping bamboo. The evolutionary lineage of the red panda (Ailuridae) stretches back around 25 to 18 million years ago, as indicated by extinct fossil relatives found in Eurasia and North America.</br></br>\
        The red panda inhabits coniferous forests as well as temperate broadleaf and mixed forests, favouring steep slopes with dense bamboo cover close to water sources. It is solitary and largely arboreal. It feeds mainly on bamboo shoots and leaves, but also on fruits and blossoms. Red pandas mate in early spring, with the females giving birth to litters of up to four cubs in summer. It is threatened by poaching as well as destruction and fragmentation of habitat due to deforestation. The species has been listed as Endangered on the IUCN Red List since 2015. It is protected in all range countries.</br></br>\
        Community-based conservation programmes have been initiated in Nepal, Bhutan and northeastern India; in China, it benefits from nature conservation projects. Regional captive breeding programmes for the red panda have been established in zoos around the world. It is featured in animated movies, video games, comic books and as the namesake of companies and music bands.</p>',

    "<h2 class='title'>Taxonomy</h2></br><p>The red panda was described and named in 1825 by Frederic Cuvier, who gave it its current scientific name Ailurus fulgens. Cuvier's description was based on zoological specimens, including skin, paws, jawbones and teeth \"from the mountains north of India\", as well as an account by Alfred Duvaucel. The red panda was described earlier by Thomas Hardwicke in 1821, but his paper was only published in 1827. In 1902, Oldfield Thomas described a skull of a male red panda specimen under the name Ailurus fulgens styani in honour of Frederick William Styan who had collected this specimen in Sichuan.</p>",

    "<h2 class='title'>Reproduction</h2></br><p>Red pandas are \"long-day\" breeders, reproducing after the winter solstice as daylight grows longer. Mating thus takes place from January to March, with births occurring from May to August. Reproduction is delayed by six months for captive pandas in the southern hemisphere. Oestrous lasts a day, and females can enter oestrous multiple times a season, but it is not known how long the intervals between each cycle last.<br><br>\
        As the reproductive season begins, males and females interact more, and will rest, move, and feed near each other. An oestrous female will spend more time marking and males will inspect her anogenital region. Receptive females make tail-flicks and position themselves in a lordosis pose, with the front lowered to the ground and the spine curved. Copulation involves the male mounting the female from behind and on top, though face-to-face matings as well as belly-to-back matings while lying on the sides also occur. The male will grab the female by the sides with his front paws instead of biting her neck. Intermission is 2–25 minutes long, and the couple grooms each other between each bout.<br><br>\
        Gestation lasts about 131 days. Prior to giving birth, the female selects a denning site, such as a tree, log or stump hollow or rock crevice, and builds a nest using material from nearby, such as twigs, sticks, branches, bark bits, leaves, grass and moss. Litters typically consist of one to four cubs that are born fully furred but blind. They are entirely dependent on their mother for the first three to four months until they first leave the nest. They nurse for their first five months. The bond between mother and offspring lasts until the next mating season. Cubs are fully grown at around 12 months and at around 18 months they reach sexual maturity. Two radio-collared cubs in eastern Nepal separated from their mothers at the age of 7–8 months and left their birth areas three weeks later. They reached new home ranges within 26–42 days and became residents after exploring them for 42–44 days.</p>",

    "<h2 class='title'>Conservation</h2></br><p>The red panda is listed in CITES Appendix I and protected in all range countries; hunting is illegal. It has been listed as Endangered on the IUCN Red List since 2008 because the global population is estimated at 10,000 individuals, with a decreasing population trend. A large extent of its habitat is part of protected areas.</br></br>\
        A red panda anti-poaching unit and community-based monitoring have been established in Langtang National Park. Members of Community Forest User Groups also protect and monitor red panda habitats in other parts of Nepal.[90] Community outreach programs have been initiated in eastern Nepal using information boards, radio broadcasting and the annual International Red Panda Day in September; several schools endorsed a red panda conservation manual as part of their curricula.</br></br>\
    Since 2010, community-based conservation programmes have been initiated in 10 districts in Nepal that aim to help villagers reduce their dependence on natural resources through improved herding and food processing practices and alternative income possibilities. The Nepali government ratified a five-year Red Panda Conservation Action Plan in 2019. From 2016 to 2019, 35 ha (86 acres) of high-elevation rangeland in Merak, Bhutan, was restored and fenced in cooperation with 120 herder families to protect the red panda forest habitat and improve communal land. Villagers in Arunachal Pradesh established two community conservation areas to protect the red panda habitat from disturbance and exploitation of forest resources. China has initiated several projects to protect its environment and wildlife, including Grain for Green, The Natural Forest Protection Project and the National Wildlife/Natural Reserve Construction Project. For the last project, the red panda is not listed as a key species for protection but may benefit from the protection of the giant panda and golden snub-nosed monkey, with which it overlaps in range.</br></br>\
    <b>In captivity</b></br></br>\
    The London Zoo received two red pandas in 1869 and 1876, the first of which was caught in Darjeeling. The Calcutta Zoo received a live red panda in 1877, the Philadelphia Zoo in 1906, and Artis and Cologne Zoos in 1908. In 1908, the first captive red panda cubs were born in an Indian zoo. In 1940, the San Diego Zoo imported four red pandas from India that had been caught in Nepal; their first litter was born in 1941. Cubs that were born later were sent to other zoos; by 1969, about 250 red pandas had been exhibited in zoos. The Taronga Conservation Society started keeping red pandas in 1977.</br></br>\
    In 1978, a breed registry, the International Red Panda Studbook, was set up, followed by the Red Panda European Endangered Species Programme in 1985. Members of international zoos ratified a global master plan for the captive breeding of the red panda in 1993. By late 2015, 219 red pandas lived in 42 zoos in Japan. The Padmaja Naidu Himalayan Zoological Park participates in the Red Panda Species Survival Plan and kept about 25 red pandas by 2016. By the end of 2019, 182 European zoos kept 407 red pandas. Regional captive breeding programmes have also been established in North American, Australasian and South African zoos.</p>",

    "<h2 class='title'>Fun Facts</h2></br><ol><li>Though red pandas are carnivores, they rarely eat meat. The term carnivore refers to their biological order, not their dietary preference. Because red pandas descended from a shared ancestor with other carnivores, they share cat-like facial features and teeth, but they switched to a bamboo-based diet more than two million of years ago.</li><li>Red pandas are skilled tree-top navigators; they have sharp, semi-retractable claws like a cat, which they use to grip mossy and slippery tree branches. They also use their bushy tails, which are marked with alternating red and buff rings, as ballasts to maintain balance.</li><li>Though a red panda’s rusty coat might seem like a bold choice for a forest-swelling species, their color helps them blend in with their surroundings. In their home in the mountainous forests of China, India, Nepal, Bhutan and Myanmar, trees are draped with reddish-brown moss and lichens. Red pandas also have black fur on their belly and legs, which helps them hide from predators like snow leopards against the dark foliage.</li><li>When temperatures drop, red pandas conserve energy by slowing their metabolic rate. When in this state, called “torpor,” they drift into deep sleep, dropping their core body temperature and respiration rate. Red pandas' tails not only help them balance as they navigate the tree canopy—they also act as built-in blankets to protect them from harsh temperatures, which can dip to 19 degrees Fahrenheit at night.</li></ol>",
  ],

  [
    "Dugong",

    "<p>The dugong (<i>Dugong dugon</i>) is a marine mammal. It is one of four living species of the order Sirenia, which also includes three species of manatees. It is the only living representative of the once-diverse family Dugongidae; its closest modern relative, Steller's sea cow (Hydrodamalis gigas), was hunted to extinction in the 18th century.</br></br>The dugong is the only sirenian in its range, which spans the waters of some 40 countries and territories throughout the Indo-West Pacific. The dugong is largely dependent on seagrass communities for subsistence and is thus restricted to the coastal habitats which support seagrass meadows, with the largest dugong concentrations typically occurring in wide, shallow, protected areas such as bays, mangrove channels, the waters of large inshore islands and inter-reefal waters. The northern waters of Australia between Shark Bay and Moreton Bay are believed to be the dugong's contemporary stronghold.</br></br>Like all modern sirenians, the dugong has a fusiform body with no dorsal fin or hind limbs. The forelimbs or flippers are paddle-like. The dugong is easily distinguished from the manatees by its fluked, dolphin-like tail, but also possesses a unique skull and teeth. Its snout is sharply downturned, an adaptation for feeding in benthic seagrass communities. The molar teeth are simple and peg-like, unlike the more elaborate molar dentition of manatees.</br></br>The dugong has been hunted for thousands of years for its meat and oil. Traditional hunting still has great cultural significance in several countries in its modern range, particularly northern Australia and the Pacific Islands. The dugong's current distribution is fragmented, and many populations are believed to be close to extinction. The IUCN lists the dugong as a species vulnerable to extinction, while the Convention on International Trade in Endangered Species limits or bans the trade of derived products. Despite being legally protected in many countries, the main causes of population decline remain anthropogenic and include fishing-related fatalities, habitat degradation and hunting. With its long lifespan of 70 years or more, and slow rate of reproduction, the dugong is especially vulnerable to extinction.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The word "dugong" derives from the Visayan (probably Cebuano) dugung. The name was first adopted and popularized by the French naturalist Georges-Louis Leclerc, Comte de Buffon, as "dugon" in Histoire Naturelle (1765), after descriptions of the animal from the island of Leyte in the Philippines. The name ultimately derives from Proto-Malayo-Polynesian *duyuŋ. Despite common misconception, the term does not come from Malay duyung and it does not mean "lady of the sea" (Mermaid).</br></br>\
    Other common local names include "sea cow", "sea pig" and "sea camel". It is known as the balguja by the Wunambal people of the Mitchell Plateau area in the Kimberley, Western Australia.</br></br>\
        Dugong dugon is the only extant species of the family Dugongidae, and one of only four extant species of the Sirenia order, the others forming the manatee family. It was first classified by Müller in 1776 as Trichechus dugon, a member of the manatee genus previously defined by Linnaeus. It was later assigned as the type species of Dugong by Lacépède and further classified within its own family by Gray and subfamily by Simpson.</br></br>\
        Dugongs and other sirenians are not closely related to other marine mammals, being more related to elephants. Dugongs and elephants share a monophyletic group with hyraxes and the aardvark, one of the earliest offshoots of eutherians. The fossil record shows sirenians appearing in the Eocene, where they most likely lived in the Tethys Ocean. The two extant families of sirenians are thought to have diverged in the mid-Eocene, after which the dugongs and their closest relative, the Steller\'s sea cow, split off from a common ancestor in the Miocene. The Steller\'s sea cow became extinct in the 18th century. No fossils exist of other members of the Dugongidae.</br></br>\
        Molecular studies have been made on dugong populations using mitochondrial DNA. The results have suggested that the population of Southeast Asia is distinct from the others. Australia has two distinct maternal lineages, one of which also contains the dugongs from Africa and Arabia. Limited genetic mixing has taken place between those in Southeast Asia and those in Australia, mostly around Timor. One of the lineages stretches all the way from Moreton Bay to Western Australia, while the other only stretches from Moreton Bay to the Northern Territory. There is not yet sufficient genetic data to make clear boundaries between distinct groups.</p>',

    "<h2 class='title'>Reproduction</h2></br><p>A dugong reaches sexual maturity between the ages of eight and eighteen, older than in most other mammals. The way that females know how a male has reached sexual maturity is by the eruption of tusks in the male since tusks erupt in males when testosterone levels reach a high enough level. The age when a female first gives birth is disputed, with some studies placing the age between ten and seventeen years, while others place it as early as six years. There is evidence that male dugongs lose fertility at older ages. Despite the longevity of the dugong, which may live for 50 years or more, females give birth only a few times during their life, and invest considerable parental care in their young. The time between births is unclear, with estimates ranging from 2.4 to 7 years.<br><br>\
        Mating behaviour varies between populations located in different areas.In some populations, males will establish a territory which females in estrus will visit. In these areas a male will try to impress the females while defending the area from other males, a practice known as lekking. In other areas many males will attempt to mate with the same female, sometimes inflicting injuries to the female or each other. During this the female will have copulated with multiple males, who will have fought to mount her from below. This greatly increases the chances of conception.<br><br>\
        Females give birth after a 13- to 15-month gestation, usually to just one calf. Birth occurs in very shallow water, with occasions known where the mothers were almost on the shore. As soon as the young is born the mother pushes it to the surface to take a breath. Newborns are already 1.2 metres (4 ft) long and weigh around 30 kilograms (65 lb). Once born, they stay close to their mothers, possibly to make swimming easier. The calf nurses for 14–18 months, although it begins to eat seagrasses soon after birth. A calf will only leave its mother once it has matured. Calves in captivity have been observed sucking on their flippers as a way of asking to be fed.</p>",

    "<h2 class='title'>Conservation</h2></br><p>Dugong numbers have decreased in recent times. For a population to remain stable, 95 percent of adults must survive the span of one year. The estimated percentage of females humans can kill without depleting the population is 1–2%. This number is reduced in areas where calving is minimal due to food shortages. Even in the best conditions, a population is unlikely to increase more than 5% a year, leaving dugongs vulnerable to over-exploitation. The fact that they live in shallow waters puts them under great pressure from human activity. Research on dugongs and the effects of human activity on them has been limited, mostly taking place in Australia. In many countries, dugong numbers have never been surveyed. As such, trends are uncertain, with more data needed for comprehensive management. The only data stretching back far enough to mention population trends comes from the urban coast of Queensland, Australia. The last major worldwide study, made in 2002, concluded that the dugong was declining and possibly extinct in a third of its range, with unknown status in another half.</br></br>\
        The IUCN Red List lists the dugong as vulnerable, and the Convention on International Trade in Endangered Species of Wild Fauna and Flora regulates and in some areas has banned international trade. Most dugong habitats fall within proposed important marine mammal areas. Regional cooperation is important due to the widespread distribution of the animal, and in 1998 there was strong support for Southeast Asian cooperation to protect dugongs. Kenya has passed legislation banning the hunting of dugongs and restricting trawling, but the dugong is not yet listed under Kenya's Wildlife Act for endangered species. Mozambique has had legislation to protect dugongs since 1955, but this has not been effectively enforced. France has a National Action Plan covering the species, implemented within the Mayotte Marine Natural Park. Many marine parks have been established on the African coast of the Red Sea, and the Egyptian Gulf of Aqaba is fully protected. The United Arab Emirates has banned all hunting of dugongs within its waters, as has Bahrain. The UAE has additionally banned drift net fishing, and has declared an intention to restore coastal ecosystems dugongs rely on. India and Sri Lanka ban the hunting and selling of dugongs and their products. Japan has listed dugongs as endangered and has banned intentional kills and harassment. Hunting, catching, and harassment are banned by the People's Republic of China. The first marine mammal to be protected in the Philippines was the dugong, although monitoring this is difficult. Palau has legislated to protect dugongs, although this is not well enforced and poaching persists. Indonesia lists dugongs as a protected species; however, protection is not always enforced and souvenir products made from dugong parts can be openly found in markets in Bali. \
        The dugong is a national animal of Papua New Guinea, which bans all except traditional hunting. Vanuatu and New Caledonia ban hunting of dugongs. Dugongs are protected throughout Australia, although the rules vary by state; in some areas, indigenous hunting is allowed. Dugongs are listed under the Nature Conservation Act in the Australian state of Queensland as vulnerable. Most currently live in established marine parks, where boats must travel at a restricted speed and mesh net fishing is restricted. The World Wide Fund for Nature has purchased gillnet licences in northern Queensland to reduce the impact of fishing. In Vietnam, an illegal network targeting dugongs had been detected and was shut down in 2012. Potential hunts along Tanzanian coasts by fishermen have raised concerns as well.</p>",

    "<h2 class='title'>Fun Facts</h2></br><ol><li>Believe it or not, the closest land relative to the dugong is the elephant. Male dugongs grow tusks when they reach maturity. Female Dugongs also get tusks but these erupt in older females.</li><li>You can estimate a dugong's age by how many rings that they have on their tusks, just like a tree.</li><li>Dugongs don't have the best eyesight, but they make up for it with excellent hearing. Dugong’s can communicate using barks, chirps, squeaks, trills and other sounds that can travel through water.</li><li>Dugongs breathe in oxygen from above the surface of the water through there nostrils, a dugong can hold its breath for up to 11 minutes and dive up to 33 metres to feed.</li></ol>",
  ],

  [
    "Sumatran Rhinoceros",

    "<p>The Sumatran rhinoceros (<i>Dicerorhinus sumatrensis</i>), also known as the Sumatran rhino, hairy rhinoceros or Asian two-horned rhinoceros, is a rare member of the family Rhinocerotidae and one of five extant species of rhinoceros; it is the only extant species of the genus Dicerorhinus. It is the smallest rhinoceros, although it is still a large mammal; it stands 112–145 cm (44–57 in) high at the shoulder, with a head-and-body length of 2.36–3.18 m (7 ft 9 in – 10 ft 5 in) and a tail of 35–70 cm (14–28 in). The weight is reported to range from 500–1,000 kg (1,100–2,200 lb), averaging 700–800 kg (1,500–1,800 lb). Like both African species, it has two horns; the larger is the nasal horn, typically 15–25 cm (5.9–9.8 in), while the other horn is typically a stub. A coat of reddish-brown hair covers most of the Sumatran rhino's body.</br></br>\
    The Sumatran rhinoceros once inhabited rainforests, swamps and cloud forests in India, Bhutan, Bangladesh, Myanmar, Laos, Thailand, Malaysia, Indonesia and southwestern China, particularly in Sichuan. It is now critically endangered, with only five substantial populations in the wild: four in Sumatra and one in Borneo, with an estimated total population of fewer than 80 mature individuals. The species was extirpated in Malaysia in 2019, and one of the Sumatran populations may already be extinct. In 2015, researchers announced that the Bornean rhinoceros had become extinct in the northern part of Borneo in Sabah, Malaysia. A tiny population was discovered in East Kalimantan in early 2016.</br></br>\
        The Sumatran rhino is a mostly solitary animal except for courtship and offspring-rearing. It is the most vocal rhino species and also communicates through marking soil with its feet, twisting saplings into patterns, and leaving excrement. The species is much better studied than the similarly reclusive Javan rhinoceros, in part because of a program that brought 40 Sumatran rhinos into captivity with the goal of preserving the species. There was little or no information about procedures that would assist in ex situ breeding. Though a number of rhinos died once at the various destinations and no offspring were produced for nearly 20 years, the rhinos were all doomed in their soon-to-be-logged forest.[10] In March 2016, a Sumatran rhinoceros (of the Bornean rhinoceros subspecies) was spotted in Indonesian Borneo.</br></br>\
        The Indonesian ministry of Environment, began an official counting of the Sumatran rhino in February 2019, planned to be completed in three years. Malaysia's last known bull and cow Sumatran rhinos died in May and November 2019, respectively. The species is now considered to be locally extinct in that country, and only survives in Indonesia. There are fewer than 80 left in existence.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The first documented Sumatran rhinoceros was shot 16 km (9.9 mi) outside Fort Marlborough, near the west coast of Sumatra, in 1793. Drawings of the animal, and a written description, were sent to the naturalist Joseph Banks, then president of the Royal Society of London, who published a paper on the specimen that year. In 1814, the species was given a scientific name by Johann Fischer von Waldheim.</br></br>\
    The specific epithet sumatrensis signifies "of Sumatra", the Indonesian island where the rhinos were first discovered. Carl Linnaeus originally classified all rhinos in the genus, Rhinoceros; therefore, the species was originally identified as Rhinoceros sumatrensis or sumatranus. Joshua Brookes considered the Sumatran rhinoceros with its two horns a distinct genus from the one-horned Rhinoceros, and gave it the name Didermocerus in 1828. Constantin Wilhelm Lambert Gloger proposed the name Dicerorhinus in 1841. In 1868, John Edward Gray proposed the name Ceratorhinus. Normally, the oldest name would be used, but a 1977 ruling by the International Commission on Zoological Nomenclature established the proper genus name as Dicerorhinus. Dicerorhinus comes from the Greek terms di (δι, meaning "two"), cero (κέρας, meaning "horn"), and rhinos (ρινος, meaning "nose").</br></br>\
    The three subspecies are:</br></br>\
        D. s. sumatrensis, known as the western Sumatran rhinoceros, which has only 75 to 85 rhinos remaining, mostly in the national parks of Bukit Barisan Selatan and Kerinci Seblat, Gunung Leuser in Sumatra, but also in Way Kambas National Park in small numbers. They have recently gone extinct in Peninsular Malaysia. The main threats against this subspecies are habitat loss and poaching. A slight genetic difference is noted between the western Sumatran and Bornean rhinos. The rhinos in Peninsular Malaysia were once known as D. s. niger, but were later recognized to be a synonym of D. s. sumatrensis. Three bulls and five cows currently live in captivity at the Sumatran Rhino Sanctuary at Way Kambas, the youngest bull having been bred and born there in 2012. Another calf, a female, was born at the sanctuary in May 2016. The sanctuary\'s two bulls were born at the Cincinnati Zoo and Botanical Garden. A third calf female was born in March 2022.</br></br>\
        D. s. harrissoni, known as the Bornean rhinoceros or eastern Sumatran rhinoceros, which was once common throughout Borneo; now only about 15 individuals are estimated to survive. The known population lives in East Kalimantan, with them having recently gone extinct in Sabah. Reports of animals surviving in Sarawak are unconfirmed. This subspecies is named after Tom Harrisson, who worked extensively with Bornean zoology and anthropology in the 1960s. The Bornean subspecies is markedly smaller in body size than the other two subspecies. The captive population consisted of one bull and two cows at the Borneo Rhinoceros Sanctuary in Sabah; the bull died in 2019 and the cows died in 2017 and 2019 respectively.</br></br>\
        D. s. lasiotis, known as the northern Sumatran rhinoceros or Chittagong rhinoceros, which once roamed India and Bangladesh, has been declared extinct in these countries. Unconfirmed reports suggest a small population may still survive in Myanmar, but the political situation in that country has prevented verification. The name lasiotis is derived from the Greek for "hairy-ears". Later studies showed that their ear hair was not longer than other Sumatran rhinos, but D. s. lasiotis remained a subspecies because it was significantly larger than the other subspecies.</p>',

    "<h2 class='title'>Reproduction</h2></br><p>Cows become sexually mature at the age of six to seven years, while bulls become sexually mature at about 10 years old. The gestation period is around 15–16 months. The calf, which typically weighs 40–60 kg (88–132 lb), is weaned after about 15 months and stays with its mother for the first two to three years of its life. In the wild, the birth interval for this species is estimated to be four to five years; its natural offspring-rearing behavior is unstudied.<br><br>\
        The reproductive habits of the Sumatran rhinoceros have been studied in captivity. Sex relationships begin with a courtship period characterized by increased vocalization, tail raising, urination, and increased physical contact, with both bull and cow using their snouts to bump the other in the head and genitals. The pattern of courtship is most similar to that of the black rhinoceros. Young Sumatran rhino bulls are often too aggressive with cows, sometimes injuring and even killing them during the courtship. In the wild, the cow could run away from an overly aggressive bull, but in their smaller captive enclosures, they cannot; this inability to escape aggressive bulls may partly contribute to the low success rate of captive-breeding programs.<br><br>\
        The period of oestrus itself, when the cow is receptive to the bull, lasts about 24 hours, and observations have placed its recurrence between 21 and 25 days. Sumatran rhinos in the Cincinnati Zoo have been observed copulating for 30–50 minutes, similar in length to other rhinos; observations at the Sumatran Rhinoceros Conservation Centre in Malaysia have shown a briefer copulation cycle. As the Cincinnati Zoo has had successful pregnancies, and other rhinos also have lengthy copulatory periods, a lengthy rut may be the natural behavior. Though researchers observed successful conceptions, all these pregnancies ended in failure for a variety of reasons until the first successful captive birth in 2001; studies of these failures at the Cincinnati Zoo discovered the Sumatran rhino's ovulation is induced by mating and it had unpredictable progesterone levels. Breeding success was finally achieved in 2001, 2004, and 2007 by providing a pregnant rhino with supplementary progestin. In 2016, a calf was born in captivity in western Indonesia, only the fifth such birth in a breeding facility. In March 2022, another female calf was born in SRS Way Kambas, Lampung.</p>",

    "<h2 class='title'>Conservation</h2></br><p>Sumatran rhinos were once quite numerous throughout Southeast Asia. Fewer than 100 individuals are now estimated to remain. The species is classed as critically endangered (primarily due to illegal poaching) while the last survey in 2008 estimated that around 250 individuals survived. From the early 1990s, the population decline was estimated at more than 50% per decade, and the small, scattered populations now face high risks of inbreeding depression.[2] Most remaining habitat is in relatively inaccessible mountainous areas of Indonesia.</br></br>\
    Poaching of Sumatran rhinos is a cause for concern, due to the high market price of its horns. This species has been overhunted for many centuries, leading to the current greatly reduced and still declining population.[2] The rhinos are difficult to observe and hunt directly (one field researcher spent seven weeks in a treehide near a salt lick without ever observing a rhino directly), so poachers make use of spear traps and pit traps. In the 1970s, uses of the rhinoceros's body parts among the local people of Sumatra were documented, such as the use of rhino horns in amulets and a folk belief that the horns offer some protection against poison. Dried rhinoceros meat was used as medicine for diarrhea, leprosy, and tuberculosis. \"Rhino oil\", a concoction made from leaving a rhino's skull in coconut oil for several weeks, may be used to treat skin diseases. The extent of use and belief in these practices is not known. Rhinoceros horn was once believed to be widely used as an aphrodisiac; in fact traditional Chinese medicine never used it for this purpose. Nevertheless, hunting in this species has primarily been driven by a demand for rhino horns with unproven medicinal properties.</br></br>\
        The rainforests of Indonesia and Malaysia, which the Sumatran rhino inhabits, are also targets for legal and illegal logging because of the desirability of their hardwoods. Rare woods such as merbau, meranti and semaram are valuable on the international markets, fetching as much as $1,800 per m3 ($1,375 per cu yd). Enforcement of illegal-logging laws is difficult because humans live within or near many of the same forests as the rhino. The 2004 Indian Ocean earthquake has been used to justify new logging. Although the hardwoods in the rainforests of the Sumatran rhino are destined for international markets and not widely used in domestic construction, the number of logging permits for these woods has increased dramatically because of the tsunami. However, while this species has been suggested to be highly sensitive to habitat disturbance, apparently it is of little importance compared to hunting, as it can withstand more or less any forest condition. Nevertheless, the main cause of drastic reduction of the species is likely caused by the Allee effect.</br></br>\
        The Bornean rhino in Sabah was confirmed to be extinct in the wild in April 2015, with only 3 individuals left in captivity. The mainland Sumatran rhino in Malaysia was confirmed to be extinct in the wild in August 2015. In March 2016 there was a rare sighting of a Sumatran rhino in Kalimantan, the Indonesian part of Borneo. The last time there was a Sumatran rhino in the Kalimantan area was approximately 40 years ago. This optimism was met with despair as the same rhino was found dead several weeks after the sighting. The cause of death is unknown.</p>",

    "<h2 class='title'>Fun Facts</h2></br><ol><li>It is the smallest and the hairiest of the of the rhino family. Usually, their reddish-brown skin is covered in patches of short, dark coarse hair with longer, thicker hair around their ears and tail.</li><li>The Sumatran Rhino is the only Asian rhino that, like the African sub-species, has two horns. The larger horn known as the “nasal” or “anterior” horn grows from the nose, measuring between 15-25cm(5.9-9.8in). The other, much smaller horn, is located between the eyes called the “posterior” horn only measuring about 10cm (3.9inches).</li><li>To avoid bumping into each other they will mark their territory with dung and urine, and by scraping the ground with their feet.</li><li>Sumatran Rhinos will only give birth to one calf at a time. In the wild, Sumatran Rhinos can give birth every 3-4 years but in captivity it is very rare. Only one captive Sumatran Rhino has given birth in 100 years.</li></ol>",
  ],
];

const judul = document.querySelector("#title-1");

const teks1 = document.querySelector("#desc-1");
const teks2 = document.querySelector("#desc-2");
const teks3 = document.querySelector("#desc-3");
const teks4 = document.querySelector("#desc-4");
const teks5 = document.querySelector("#desc-5");

const gambar1 = document.querySelector("#img-1");
const gambar2 = document.querySelector("#img-2");
const gambar3 = document.querySelector("#img-3");
const gambar4 = document.querySelector("#img-4");
const gambar5 = document.querySelector("#img-5");

if (target === 1) {
  judul.textContent = teks[0][0];
  teks1.innerHTML = teks[0][1];
  teks2.innerHTML = teks[0][2];
  teks3.innerHTML = teks[0][3];
  teks4.innerHTML = teks[0][4];
  teks5.innerHTML = teks[0][5];
  gambar1.innerHTML = gambar[0][0];
  gambar2.innerHTML = gambar[0][1];
  gambar3.innerHTML = gambar[0][2];
  gambar4.innerHTML = gambar[0][3];
  gambar5.innerHTML = gambar[0][4];
} else if (target === 2) {
  judul.textContent = teks[1][0];
  teks1.innerHTML = teks[1][1];
  teks2.innerHTML = teks[1][2];
  teks3.innerHTML = teks[1][3];
  teks4.innerHTML = teks[1][4];
  teks5.innerHTML = teks[1][5];
  gambar1.innerHTML = gambar[1][0];
  gambar2.innerHTML = gambar[1][1];
  gambar3.innerHTML = gambar[1][2];
  gambar4.innerHTML = gambar[1][3];
  gambar5.innerHTML = gambar[1][4];
} else if (target === 3) {
  judul.textContent = teks[2][0];
  teks1.innerHTML = teks[2][1];
  teks2.innerHTML = teks[2][2];
  teks3.innerHTML = teks[2][3];
  teks4.innerHTML = teks[2][4];
  teks5.innerHTML = teks[2][5];
  gambar1.innerHTML = gambar[2][0];
  gambar2.innerHTML = gambar[2][1];
  gambar3.innerHTML = gambar[2][2];
  gambar4.innerHTML = gambar[2][3];
  gambar5.innerHTML = gambar[2][4];
} else if (target === 4) {
  judul.textContent = teks[3][0];
  teks1.innerHTML = teks[3][1];
  teks2.innerHTML = teks[3][2];
  teks3.innerHTML = teks[3][3];
  teks4.innerHTML = teks[3][4];
  teks5.innerHTML = teks[3][5];
  gambar1.innerHTML = gambar[3][0];
  gambar2.innerHTML = gambar[3][1];
  gambar3.innerHTML = gambar[3][2];
  gambar4.innerHTML = gambar[3][3];
  gambar5.innerHTML = gambar[3][4];
} else if (target === 5) {
  judul.textContent = teks[4][0];
  teks1.innerHTML = teks[4][1];
  teks2.innerHTML = teks[4][2];
  teks3.innerHTML = teks[4][3];
  teks4.innerHTML = teks[4][4];
  teks5.innerHTML = teks[4][5];
  gambar1.innerHTML = gambar[4][0];
  gambar2.innerHTML = gambar[4][1];
  gambar3.innerHTML = gambar[4][2];
  gambar4.innerHTML = gambar[4][3];
  gambar5.innerHTML = gambar[4][4];
}

console.log(document.cookie);
