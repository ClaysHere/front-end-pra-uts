const fixedNav = document.querySelector(".fixed");
const normal = document.querySelector(".normal");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});

const images = [
  [
    '<img src="" alt="blue whale">',
    '<img src="" alt="blue whale">',
    '<img src="" alt="blue whale">',
    '<img src="" alt="blue whale">',
    '<img src="" alt="blue whale">',
  ],

  [
    '<img src="" alt="great white shark">',
    '<img src="" alt="great white shark">',
    '<img src="" alt="great white shark">',
    '<img src="" alt="great white shark">',
    '<img src="" alt="great white shark">',
  ],

  [
    '<img src="" alt="red panda">',
    '<img src="" alt="red panda">',
    '<img src="" alt="red panda">',
    '<img src="" alt="red panda">',
    '<img src="" alt="red panda">',
  ],

  [
    '<img src="" alt="dugong">',
    '<img src="" alt="dugong">',
    '<img src="" alt="dugong">',
    '<img src="" alt="dugong">',
    '<img src="" alt="dugong">',
  ],

  [
    '<img src="" alt="sumatran rhinoceros">',
    '<img src="" alt="sumatran rhinoceros">',
    '<img src="" alt="sumatran rhinoceros">',
    '<img src="" alt="sumatran rhinoceros">',
    '<img src="" alt="sumatran rhinoceros">',
  ],
];

const desc = [
  [
    "Blue Whale",

    "<p>The blue whale (Balaenoptera musculus) is a marine mammal and a baleen whale. Reaching a maximum confirmed length of 29.9 meters (98 ft) and weighing up to 199 tonnes (196 long tons; 219 short tons), it is the largest animal known ever to have existed. The blue whale's long and slender body can be of various shades of greyish-blue dorsally and somewhat lighter underneath. Four subspecies are recognized: B. m. musculus in the North Atlantic and North Pacific, B. m. intermedia in the Southern Ocean, B. m. brevicauda (the pygmy blue whale) in the Indian Ocean and South Pacific Ocean, B. m. indica in the Northern Indian Ocean. There is also a population in the waters off Chile that may constitute a fifth subspecies.</br></br>In general, blue whale populations migrate between their summer feeding areas near the poles and their winter breeding grounds near the tropics. There is also evidence of year-round residencies, and partial or age/sex-based migration. Blue whales are filter feeders; their diet consists almost exclusively of krill. They are generally solitary or gather in small groups, and have no well-defined social structure other than mother-calf bonds. The fundamental frequency for blue whale vocalizations ranges from 8 to 25 Hz and the production of vocalizations may vary by region, season, behavior, and time of day. Orcas are their only natural predators.</br></br>The blue whale was once abundant in nearly all the Earth's oceans until the end of the 19th century. It was hunted almost to the point of extinction by whalers until the International Whaling Commission banned all blue whale hunting in 1966. The International Union for Conservation of Nature has listed blue whales as Endangered as of 2018. It continues to face numerous man-made threats such as ship strikes, pollution, ocean noise and climate change.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The genus name, Balaenoptera, means winged whale while the species name, musculus, could mean "muscle" or a diminutive form of "mouse", possibly a pun by Carl Linnaeus when he named the species in Systema Naturae. One of the first published descriptions of a blue whale comes from Robert Sibbald\'s Phalainologia Nova, after Sibbald found a stranded whale in the estuary of the Firth of Forth, Scotland, in 1692. The name "blue whale" was derived from the Norwegian "blåhval", coined by Svend Foyn shortly after he had perfected the harpoon gun. The Norwegian scientist G. O. Sars adopted it as the common name in 1874.</br></br>Blue whales were referred to as \'Sibbald\'s rorqual\', after Robert Sibbald, who first described the species. Herman Melville called the blue whale "sulphur bottom" in his novel Moby Dick because of the accumulation of diatoms creating a yellowish appearance on their pale underside.</p>',

    "<h2 class='title'>test</h2></br><p>test</p>",

    "<h2 class='title'>Subspecies and stocks</h2></br><p>At least four subspecies of blue whale are recognized, some of which are divided into population stocks or \"management units\". They have a worldwide distribution, but are mostly absent from the Arctic Ocean and the Mediterranean, Okhotsk, and Bering Sea.</br></br>Northern subspecies (B. m. musculus)</br></br>North Atlantic population - This population is mainly documented from New England along eastern Canada to Greenland, particularly in the Gulf of St. Lawrence, during summer though some individuals may remain there all year. They also aggregate near Iceland and have increased their presence in the Norwegian Sea. They are reported to migrate south to the West Indies, the Azores and northwest Africa.</br></br>Eastern North Pacific population - Whales in this region mostly feed off California from summer to fall and then Oregon, Washington State, the Alaska Gyre and Aleutian Islands later in the fall. During winter and spring, blue whales migrate south to the waters of Mexico, mostly the Gulf of California, and the Costa Rica Dome, where they both feed and breed.</br></br>Central/Western Pacific population - This stock is documented around the Kamchatka Peninsula during the summer; some individuals may remain there year-round. They have been recorded wintering in Hawaiian waters, though some can be found in the Gulf of Alaska during fall and early winter.</br></br>Northern Indian Ocean subspecies (B. m. indica) - This subspecies can be found year-round in the northwestern Indian Ocean, though some individuals have recorded travelling to the Crozet Islands during between summer and fall.</br></br>Pygmy blue whale (B. m. brevicauda)</br></br>Madagascar population - This population migrates between the Seychelles and Amirante Islands in the north and the Crozet Islands and Prince Edward Islands in the south were they feed, passing through the Mozambique Channel.</br></br>Australia/Indonesia population - Whales in this region appear to winter off Indonesia and migrate to their summer feeding grounds off the coast of Western Australia, with major concentrations at Perth Canyon and an area stretching from the Great Australian Bight and Bass Strait.</br></br>\
  Eastern Australia/New Zealand population - This stock may reside in the Tasman Sea and the Lau Basin in winter and feed mostly in the South Taranaki Bight and off the coast of eastern North Island. Blue whales have been detected around New Zealand throughout the year.</br></br>\
  Antarctic subspecies (B. m. intermedia) - This subspecies includes all populations found around the Antarctic. They have been recorded to travel as far north as eastern tropical Pacific, the central Indian Ocean, and the waters of southwestern Australia and northern New Zealand.</br></br>\
  Blue whales off the Chilean coast may be a separate subspecies based on geographic separation, genetics, and unique song types. Chilean blue whales may overlap in the Eastern Tropical Pacific with Antarctica blue whales and Eastern North Pacific blue whales. Chilean blue whales are genetically differentiated from Antarctica blue whales and are unlikely to be interbreeding. However, the genetic distinction is less with the Eastern North Pacific blue whale and there may be gene flow between hemispheres.</p>",

    "<h2 class='title'>Fun Factn</h2></br><p>fun fact</p>",
  ],

  [
    "Great White Shark",

    "<p>The great white shark (Carcharodon carcharias), also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with the largest preserved female specimen measuring 5.83 m (19.1 ft) in length and around 2,000 kg (4,410 lb) in weight at maturity. However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average. According to a 2014 study, the lifespan of great white sharks is estimated to be as long as 70 years or more, well above previous estimates, making it one of the longest lived cartilaginous fishes currently known. According to the same study, male great white sharks take 26 years to reach sexual maturity, while the females take 33 years to be ready to produce offspring. Great white sharks can swim at speeds of 25 km/h (16 mph) for short bursts and to depths of 1,200 m (3,900 ft).</br></br>The great white shark is an apex predator, as it has no known natural predators other than, on very rare occasions, the orca. It is arguably the world's largest-known extant macropredatory fish, and is one of the primary predators of marine mammals, up to the size of large baleen whales. This shark is also known to prey upon a variety of other marine animals, including fish, and seabirds. It is the only known surviving species of its genus Carcharodon, and is responsible for more recorded human bite incidents than any other shark.</br></br>The species faces numerous ecological challenges which has resulted in international protection. The International Union for Conservation of Nature lists the great white shark as a vulnerable species, and it is included in Appendix II of CITES. It is also protected by several national governments, such as Australia (as of 2018). Due to their need to travel long distances for seasonal migration and extremely demanding diet, it is not logistically feasible to keep great white sharks in captivity; because of this, while attempts have been made to do so in the past, there are no known aquariums in the world believed to house a live specimen.</br></br>\
The novel Jaws by Peter Benchley and its subsequent film adaptation by Steven Spielberg depicted the great white shark as a ferocious man-eater. Humans are not a preferred prey of the great white shark, but the great white is nevertheless responsible for the largest number of reported and identified fatal unprovoked shark attacks on humans, although this happens very rarely (typically fewer than 10 times a year globally).</p>",

    "<h2 class='title'>Taxonomy</h2></br><p>The great white is the sole recognized extant species in the genus Carcharodon, and is one of five extant species belonging to the family Lamnidae. Other members of this family include the mako sharks, porbeagle, and salmon shark. The family belongs to the Lamniformes, the order of mackerel sharks.</br></br>\
    The English name 'white shark' and its Australian variant 'white pointer'[22] is thought to have come from the shark's stark white underside, a characteristic feature most noticeable in beached sharks lying upside down with their bellies exposed.[23] Colloquial use favours the name 'great white shark', with 'great' perhaps stressing the size and prowess of the species,[24] and \"white shark\" having historically been used to describe the much smaller oceanic white-tipped shark, later referred to for a time as the \"lesser white shark\". Most scientists prefer 'white shark', as the name \"lesser white shark\" is no longer used, while some use 'white shark' to refer to all members of the Lamnidae.</br></br>\
The scientific genus name Carcharodon literally means \"jagged tooth\", a reference to the large serrations that appear in the shark's teeth. It is a portmanteau of two Ancient Greek words: the prefix carchar- is derived from καρχαρίας (kárkharos), which means \"jagged\" or \"sharp\". The suffix -odon is a romanization of ὀδών (odṓn), a which translates to \"tooth\". The specific name carcharias is a Latinization of καρχαρίας (karkharías), the Ancient Greek word for shark. The great white shark was one of the species originally described by Carl Linnaeus in his 1758 10th edition of Systema Naturae, in which it was identified as an amphibian and assigned the scientific name Squalus carcharias, Squalus being the genus that he placed all sharks in. By the 1810s, it was recognized that the shark should be placed in a new genus, but it was not until 1838 when Sir Andrew Smith coined the name Carcharodon as the new genus.</br></br>\
There have been a few attempts to describe and classify the great white before Linnaeus. One of its earliest mentions in literature as a distinct type of animal appears in Pierre Belon's 1553 book De aquatilibus duo, cum eiconibus ad vivam ipsorum effigiem quoad ejus fieri potuit, ad amplissimum cardinalem Castilioneum. In it, he illustrated and described the shark under the name Canis carcharias based on the jagged nature of its teeth and its alleged similarities with dogs. Another name used for the great white around this time was Lamia, first coined by Guillaume Rondelet in his 1554 book Libri de Piscibus Marinis, who also identified it as the fish that swallowed the prophet Jonah in biblical texts. Linnaeus recognized both names as previous classifications.</p>",

    "<h2 class='title'>test</h2></br><p>test</p>",

    '<h2 class=\'title\'>Conservation status</h2></br><p>It is unclear how much of a concurrent increase in fishing for great white sharks has caused the decline of great white shark populations from the 1970s to the present. No accurate global population numbers are available, but the great white shark is now considered vulnerable. Sharks taken during the long interval between birth and sexual maturity never reproduce, making population recovery and growth difficult.</br></br>\
The International Union for Conservation of Nature notes that very little is known about the actual status of the great white shark, but as it appears uncommon compared to other widely distributed species, it is considered vulnerable. It is included in Appendix II of CITES, meaning that international trade in the species (including parts and derivatives) requires a permit. As of March 2010, it has also been included in Annex I of the CMS Migratory Sharks MoU, which strives for increased international understanding and coordination for the protection of certain migratory sharks. A February 2010 study by Barbara Block of Stanford University estimated the world population of great white sharks to be lower than 3,500 individuals, making the species more vulnerable to extinction than the tiger, whose population is in the same range. According to another study from 2014 by George H. Burgess, Florida Museum of Natural History, University of Florida, there are about 2,000 great white sharks near the California coast, which is 10 times higher than the previous estimate of 219 by Barbara Block.</br></br>\
    Fishermen target many sharks for their jaws, teeth, and fins, and as game fish in general. The great white shark, however, is rarely an object of commercial fishing, although its flesh is considered valuable. If casually captured (it happens for example in some tonnare in the Mediterranean), it is misleadingly sold as smooth-hound shark.</br></br>\
    In Australia</br></br>\
    The great white shark was declared vulnerable by the Australian Government in 1999 because of significant population decline and is currently protected under the Environmental Protection and Biodiversity Conservation (EPBC) Act. The causes of decline prior to protection included mortality from sport fishing harvests as well as being caught in beach protection netting.</br></br>\
    The national conservation status of the great white shark is reflected by all Australian states under their respective laws, granting the species full protection throughout Australia regardless of jurisdiction. Many states had prohibited the killing or possession of great white sharks prior to national legislation coming into effect. The great white shark is further listed as threatened in Victoria under the Flora and Fauna Guarantee Act, and as rare or likely to become extinct under Schedule 5 of the Wildlife Conservation Act in Western Australia.</br></br>\
    In 2002, the Australian government created the White Shark Recovery Plan, implementing government-mandated conservation research and monitoring for conservation in addition to federal protection and stronger regulation of shark-related trade and tourism activities.[203] An updated recovery plan was published in 2013 to review progress, research findings, and to implement further conservation actions.[15] A study in 2012 revealed that Australia\'s white shark population was separated by Bass Strait into genetically distinct eastern and western populations, indicating a need for the development of regional conservation strategies.</br></br>\
    Presently, human-caused shark mortality is continuing, primarily from accidental and illegal catching in commercial and recreational fishing as well as from being caught in beach protection netting, and the populations of great white shark in Australia are yet to recover.</br></br>\
    In spite of official protections in Australia, great white sharks continue to be killed in state "shark control" programs within Australia. For example, the government of Queensland has a "shark control" program (shark culling) which kills great white sharks (as well as other marine life) using shark nets and drum lines with baited hooks.[205][161] In Queensland, great white sharks that are found alive on the baited hooks are shot.[165] The government of New South Wales also kills great white sharks in its "shark control" program.[161] Partly because of these programs, shark numbers in eastern Australia have decreased.</br></br>\
    The Australasian population of great white sharks is believed to be in excess of 8,000–10,000 individuals according to genetic research studies done by CSIRO, with an adult population estimated to be around 2,210 individuals in both Eastern and Western Australia. The annual survival rate for juveniles in these two separate populations was estimated in the same study to be close to 73 percent, while adult sharks had a 93 percent annual survival rate. Whether or not mortality rates in great white sharks have declined, or the population has increased as a result of the protection of this species in Australian waters is as yet unknown due to the slow growth rates of this species.</br></br>\
    In New Zealand</br></br>\
    As of April 2007, great white sharks were fully protected within 370 km (230 mi) of New Zealand and additionally from fishing by New Zealand-flagged boats outside this range. The maximum penalty is a $250,000 fine and up to six months in prison.[207] In June 2018 the New Zealand Department of Conservation classified the great white shark under the New Zealand Threat Classification System as "Nationally Endangered". The species meets the criteria for this classification as there exists a moderate, stable population of between 1000 and 5000 mature individuals. This classification has the qualifiers "Data Poor" and "Threatened Overseas".</br></br>\
    In North America</br></br>\
    In 2013, great white sharks were added to California\'s Endangered Species Act. From data collected, the population of great whites in the North Pacific was estimated to be fewer than 340 individuals. Research also reveals these sharks are genetically distinct from other members of their species elsewhere in Africa, Australia, and the east coast of North America, having been isolated from other populations.</br></br>\
    A 2014 study estimated the population of great white sharks along the California coastline to be approximately 2,400.</br></br>\
    In 2015 Massachusetts banned catching, cage diving, feeding, towing decoys, or baiting and chumming for its significant and highly predictable migratory great white population without an appropriate research permit. The goal of these restrictions is to both protect the sharks and public health.</p>',

    "<h2 class='title'>Fun Fact</h2></br><p>fun fact</p>",
  ],

  [
    "Red Panda",

    '<p>The red panda (Ailurus fulgens), also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China. It has dense reddish-brown fur with a black belly and legs, white-lined ears, a mostly white muzzle and a ringed tail. Its head-to-body length is 51–63.5 cm (20.1–25.0 in) with a 28–48.5 cm (11.0–19.1 in) tail, and it weighs between 3.2 and 15 kg (7.1 and 33.1 lb). It is well adapted to climbing due to its flexible joints and curved semi-retractile claws.</br></br>\
The red panda was first formally described in 1825. The two currently recognised subspecies, the Himalayan and the Chinese red panda, genetically diverged about 250,000 years ago. The red panda\'s place on the evolutionary tree has been debated, but modern genetic evidence places it in close affinity with raccoons, weasels, and skunks. It is not closely related to the giant panda, which is a bear, though both possess elongated wrist bones or "false thumbs" used for grasping bamboo. The evolutionary lineage of the red panda (Ailuridae) stretches back around 25 to 18 million years ago, as indicated by extinct fossil relatives found in Eurasia and North America.</br></br>\
    The red panda inhabits coniferous forests as well as temperate broadleaf and mixed forests, favouring steep slopes with dense bamboo cover close to water sources. It is solitary and largely arboreal. It feeds mainly on bamboo shoots and leaves, but also on fruits and blossoms. Red pandas mate in early spring, with the females giving birth to litters of up to four cubs in summer. It is threatened by poaching as well as destruction and fragmentation of habitat due to deforestation. The species has been listed as Endangered on the IUCN Red List since 2015. It is protected in all range countries.</br></br>\
    Community-based conservation programmes have been initiated in Nepal, Bhutan and northeastern India; in China, it benefits from nature conservation projects. Regional captive breeding programmes for the red panda have been established in zoos around the world. It is featured in animated movies, video games, comic books and as the namesake of companies and music bands.</p>',

    "<h2 class='title'>Taxonomy</h2></br><p>The red panda was described and named in 1825 by Frederic Cuvier, who gave it its current scientific name Ailurus fulgens. Cuvier's description was based on zoological specimens, including skin, paws, jawbones and teeth \"from the mountains north of India\", as well as an account by Alfred Duvaucel. The red panda was described earlier by Thomas Hardwicke in 1821, but his paper was only published in 1827. In 1902, Oldfield Thomas described a skull of a male red panda specimen under the name Ailurus fulgens styani in honour of Frederick William Styan who had collected this specimen in Sichuan.</p>",

    "<h2 class='title'>test</h2></br><p>test</p>",

    "<h2 class='title'>Conservation</h2></br><p>The red panda is listed in CITES Appendix I and protected in all range countries; hunting is illegal. It has been listed as Endangered on the IUCN Red List since 2008 because the global population is estimated at 10,000 individuals, with a decreasing population trend. A large extent of its habitat is part of protected areas.</br></br>\
    A red panda anti-poaching unit and community-based monitoring have been established in Langtang National Park. Members of Community Forest User Groups also protect and monitor red panda habitats in other parts of Nepal.[90] Community outreach programs have been initiated in eastern Nepal using information boards, radio broadcasting and the annual International Red Panda Day in September; several schools endorsed a red panda conservation manual as part of their curricula.</br></br>\
Since 2010, community-based conservation programmes have been initiated in 10 districts in Nepal that aim to help villagers reduce their dependence on natural resources through improved herding and food processing practices and alternative income possibilities. The Nepali government ratified a five-year Red Panda Conservation Action Plan in 2019. From 2016 to 2019, 35 ha (86 acres) of high-elevation rangeland in Merak, Bhutan, was restored and fenced in cooperation with 120 herder families to protect the red panda forest habitat and improve communal land. Villagers in Arunachal Pradesh established two community conservation areas to protect the red panda habitat from disturbance and exploitation of forest resources. China has initiated several projects to protect its environment and wildlife, including Grain for Green, The Natural Forest Protection Project and the National Wildlife/Natural Reserve Construction Project. For the last project, the red panda is not listed as a key species for protection but may benefit from the protection of the giant panda and golden snub-nosed monkey, with which it overlaps in range.</br></br>\
In captivity</br></br>\
The London Zoo received two red pandas in 1869 and 1876, the first of which was caught in Darjeeling. The Calcutta Zoo received a live red panda in 1877, the Philadelphia Zoo in 1906, and Artis and Cologne Zoos in 1908. In 1908, the first captive red panda cubs were born in an Indian zoo. In 1940, the San Diego Zoo imported four red pandas from India that had been caught in Nepal; their first litter was born in 1941. Cubs that were born later were sent to other zoos; by 1969, about 250 red pandas had been exhibited in zoos. The Taronga Conservation Society started keeping red pandas in 1977.</br></br>\
In 1978, a breed registry, the International Red Panda Studbook, was set up, followed by the Red Panda European Endangered Species Programme in 1985. Members of international zoos ratified a global master plan for the captive breeding of the red panda in 1993. By late 2015, 219 red pandas lived in 42 zoos in Japan. The Padmaja Naidu Himalayan Zoological Park participates in the Red Panda Species Survival Plan and kept about 25 red pandas by 2016. By the end of 2019, 182 European zoos kept 407 red pandas. Regional captive breeding programmes have also been established in North American, Australasian and South African zoos.</p>",

    "<h2 class='title'>Fun Fact</h2></br><p>fun fact</p>",
  ],

  [
    "Dugong",

    "<p>The dugong (/ˈd(j)uːɡɒŋ/; Dugong dugon) is a marine mammal. It is one of four living species of the order Sirenia, which also includes three species of manatees. It is the only living representative of the once-diverse family Dugongidae; its closest modern relative, Steller's sea cow (Hydrodamalis gigas), was hunted to extinction in the 18th century.</br></br>The dugong is the only sirenian in its range, which spans the waters of some 40 countries and territories throughout the Indo-West Pacific. The dugong is largely dependent on seagrass communities for subsistence and is thus restricted to the coastal habitats which support seagrass meadows, with the largest dugong concentrations typically occurring in wide, shallow, protected areas such as bays, mangrove channels, the waters of large inshore islands and inter-reefal waters. The northern waters of Australia between Shark Bay and Moreton Bay are believed to be the dugong's contemporary stronghold.</br></br>Like all modern sirenians, the dugong has a fusiform body with no dorsal fin or hind limbs. The forelimbs or flippers are paddle-like. The dugong is easily distinguished from the manatees by its fluked, dolphin-like tail, but also possesses a unique skull and teeth. Its snout is sharply downturned, an adaptation for feeding in benthic seagrass communities. The molar teeth are simple and peg-like, unlike the more elaborate molar dentition of manatees.</br></br>The dugong has been hunted for thousands of years for its meat and oil. Traditional hunting still has great cultural significance in several countries in its modern range, particularly northern Australia and the Pacific Islands. The dugong's current distribution is fragmented, and many populations are believed to be close to extinction. The IUCN lists the dugong as a species vulnerable to extinction, while the Convention on International Trade in Endangered Species limits or bans the trade of derived products. Despite being legally protected in many countries, the main causes of population decline remain anthropogenic and include fishing-related fatalities, habitat degradation and hunting. With its long lifespan of 70 years or more, and slow rate of reproduction, the dugong is especially vulnerable to extinction.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The word "dugong" derives from the Visayan (probably Cebuano) dugung. The name was first adopted and popularized by the French naturalist Georges-Louis Leclerc, Comte de Buffon, as "dugon" in Histoire Naturelle (1765), after descriptions of the animal from the island of Leyte in the Philippines. The name ultimately derives from Proto-Malayo-Polynesian *duyuŋ. Despite common misconception, the term does not come from Malay duyung and it does not mean "lady of the sea" (Mermaid).</br></br>\
Other common local names include "sea cow", "sea pig" and "sea camel". It is known as the balguja by the Wunambal people of the Mitchell Plateau area in the Kimberley, Western Australia.</br></br>\
    Dugong dugon is the only extant species of the family Dugongidae, and one of only four extant species of the Sirenia order, the others forming the manatee family. It was first classified by Müller in 1776 as Trichechus dugon, a member of the manatee genus previously defined by Linnaeus. It was later assigned as the type species of Dugong by Lacépède and further classified within its own family by Gray and subfamily by Simpson.</br></br>\
    Dugongs and other sirenians are not closely related to other marine mammals, being more related to elephants. Dugongs and elephants share a monophyletic group with hyraxes and the aardvark, one of the earliest offshoots of eutherians. The fossil record shows sirenians appearing in the Eocene, where they most likely lived in the Tethys Ocean. The two extant families of sirenians are thought to have diverged in the mid-Eocene, after which the dugongs and their closest relative, the Steller\'s sea cow, split off from a common ancestor in the Miocene. The Steller\'s sea cow became extinct in the 18th century. No fossils exist of other members of the Dugongidae.</br></br>\
    Molecular studies have been made on dugong populations using mitochondrial DNA. The results have suggested that the population of Southeast Asia is distinct from the others. Australia has two distinct maternal lineages, one of which also contains the dugongs from Africa and Arabia. Limited genetic mixing has taken place between those in Southeast Asia and those in Australia, mostly around Timor. One of the lineages stretches all the way from Moreton Bay to Western Australia, while the other only stretches from Moreton Bay to the Northern Territory. There is not yet sufficient genetic data to make clear boundaries between distinct groups.</p>',

    "<h2 class='title'>test</h2></br><p>test</p>",

    "<h2 class='title'>Conservation</h2></br><p>Dugong numbers have decreased in recent times. For a population to remain stable, 95 percent of adults must survive the span of one year. The estimated percentage of females humans can kill without depleting the population is 1–2%. This number is reduced in areas where calving is minimal due to food shortages. Even in the best conditions, a population is unlikely to increase more than 5% a year, leaving dugongs vulnerable to over-exploitation. The fact that they live in shallow waters puts them under great pressure from human activity. Research on dugongs and the effects of human activity on them has been limited, mostly taking place in Australia. In many countries, dugong numbers have never been surveyed. As such, trends are uncertain, with more data needed for comprehensive management. The only data stretching back far enough to mention population trends comes from the urban coast of Queensland, Australia. The last major worldwide study, made in 2002, concluded that the dugong was declining and possibly extinct in a third of its range, with unknown status in another half.</br></br>\
    The IUCN Red List lists the dugong as vulnerable, and the Convention on International Trade in Endangered Species of Wild Fauna and Flora regulates and in some areas has banned international trade. Most dugong habitats fall within proposed important marine mammal areas. Regional cooperation is important due to the widespread distribution of the animal, and in 1998 there was strong support for Southeast Asian cooperation to protect dugongs. Kenya has passed legislation banning the hunting of dugongs and restricting trawling, but the dugong is not yet listed under Kenya's Wildlife Act for endangered species. Mozambique has had legislation to protect dugongs since 1955, but this has not been effectively enforced. France has a National Action Plan covering the species, implemented within the Mayotte Marine Natural Park.[42] Many marine parks have been established on the African coast of the Red Sea, and the Egyptian Gulf of Aqaba is fully protected. The United Arab Emirates has banned all hunting of dugongs within its waters, as has Bahrain. The UAE has additionally banned drift net fishing,[13] and has declared an intention to restore coastal ecosystems dugongs rely on. India and Sri Lanka ban the hunting and selling of dugongs and their products. Japan has listed dugongs as endangered and has banned intentional kills and harassment. Hunting, catching, and harassment are banned by the People's Republic of China. The first marine mammal to be protected in the Philippines was the dugong, although monitoring this is difficult. Palau has legislated to protect dugongs, although this is not well enforced and poaching persists. Indonesia lists dugongs as a protected species; however, protection is not always enforced and souvenir products made from dugong parts can be openly found in markets in Bali. \
    The dugong is a national animal of Papua New Guinea, which bans all except traditional hunting. Vanuatu and New Caledonia ban hunting of dugongs. Dugongs are protected throughout Australia, although the rules vary by state; in some areas, indigenous hunting is allowed. Dugongs are listed under the Nature Conservation Act in the Australian state of Queensland as vulnerable. Most currently live in established marine parks, where boats must travel at a restricted speed and mesh net fishing is restricted. The World Wide Fund for Nature has purchased gillnet licences in northern Queensland to reduce the impact of fishing. In Vietnam, an illegal network targeting dugongs had been detected and was shut down in 2012. Potential hunts along Tanzanian coasts by fishermen have raised concerns as well.</p>",

    "<h2 class='title'>Fun Fact</h2></br><p>fun fact</p>",
  ],

  [
    "Sumatran Rhinoceros",

    "<p>The Sumatran rhinoceros (Dicerorhinus sumatrensis), also known as the Sumatran rhino, hairy rhinoceros or Asian two-horned rhinoceros, is a rare member of the family Rhinocerotidae and one of five extant species of rhinoceros; it is the only extant species of the genus Dicerorhinus. It is the smallest rhinoceros, although it is still a large mammal; it stands 112–145 cm (44–57 in) high at the shoulder, with a head-and-body length of 2.36–3.18 m (7 ft 9 in – 10 ft 5 in) and a tail of 35–70 cm (14–28 in). The weight is reported to range from 500–1,000 kg (1,100–2,200 lb), averaging 700–800 kg (1,500–1,800 lb). Like both African species, it has two horns; the larger is the nasal horn, typically 15–25 cm (5.9–9.8 in), while the other horn is typically a stub. A coat of reddish-brown hair covers most of the Sumatran rhino's body.</br></br>\
The Sumatran rhinoceros once inhabited rainforests, swamps and cloud forests in India, Bhutan, Bangladesh, Myanmar, Laos, Thailand, Malaysia, Indonesia and southwestern China, particularly in Sichuan. It is now critically endangered, with only five substantial populations in the wild: four in Sumatra and one in Borneo, with an estimated total population of fewer than 80 mature individuals. The species was extirpated in Malaysia in 2019, and one of the Sumatran populations may already be extinct. In 2015, researchers announced that the Bornean rhinoceros had become extinct in the northern part of Borneo in Sabah, Malaysia. A tiny population was discovered in East Kalimantan in early 2016.</br></br>\
    The Sumatran rhino is a mostly solitary animal except for courtship and offspring-rearing. It is the most vocal rhino species and also communicates through marking soil with its feet, twisting saplings into patterns, and leaving excrement. The species is much better studied than the similarly reclusive Javan rhinoceros, in part because of a program that brought 40 Sumatran rhinos into captivity with the goal of preserving the species. There was little or no information about procedures that would assist in ex situ breeding. Though a number of rhinos died once at the various destinations and no offspring were produced for nearly 20 years, the rhinos were all doomed in their soon-to-be-logged forest.[10] In March 2016, a Sumatran rhinoceros (of the Bornean rhinoceros subspecies) was spotted in Indonesian Borneo.</br></br>\
    The Indonesian ministry of Environment, began an official counting of the Sumatran rhino in February 2019, planned to be completed in three years. Malaysia's last known bull and cow Sumatran rhinos died in May and November 2019, respectively. The species is now considered to be locally extinct in that country, and only survives in Indonesia. There are fewer than 80 left in existence.</p>",

    '<h2 class=\'title\'>Taxonomy</h2></br><p>The first documented Sumatran rhinoceros was shot 16 km (9.9 mi) outside Fort Marlborough, near the west coast of Sumatra, in 1793. Drawings of the animal, and a written description, were sent to the naturalist Joseph Banks, then president of the Royal Society of London, who published a paper on the specimen that year. In 1814, the species was given a scientific name by Johann Fischer von Waldheim.</br></br>\
The specific epithet sumatrensis signifies "of Sumatra", the Indonesian island where the rhinos were first discovered. Carl Linnaeus originally classified all rhinos in the genus, Rhinoceros; therefore, the species was originally identified as Rhinoceros sumatrensis or sumatranus. Joshua Brookes considered the Sumatran rhinoceros with its two horns a distinct genus from the one-horned Rhinoceros, and gave it the name Didermocerus in 1828. Constantin Wilhelm Lambert Gloger proposed the name Dicerorhinus in 1841. In 1868, John Edward Gray proposed the name Ceratorhinus. Normally, the oldest name would be used, but a 1977 ruling by the International Commission on Zoological Nomenclature established the proper genus name as Dicerorhinus. Dicerorhinus comes from the Greek terms di (δι, meaning "two"), cero (κέρας, meaning "horn"), and rhinos (ρινος, meaning "nose").</br></br>\
The three subspecies are:</br></br>\
    D. s. sumatrensis, known as the western Sumatran rhinoceros, which has only 75 to 85 rhinos remaining, mostly in the national parks of Bukit Barisan Selatan and Kerinci Seblat, Gunung Leuser in Sumatra, but also in Way Kambas National Park in small numbers. They have recently gone extinct in Peninsular Malaysia. The main threats against this subspecies are habitat loss and poaching. A slight genetic difference is noted between the western Sumatran and Bornean rhinos. The rhinos in Peninsular Malaysia were once known as D. s. niger, but were later recognized to be a synonym of D. s. sumatrensis. Three bulls and five cows currently live in captivity at the Sumatran Rhino Sanctuary at Way Kambas, the youngest bull having been bred and born there in 2012. Another calf, a female, was born at the sanctuary in May 2016. The sanctuary\'s two bulls were born at the Cincinnati Zoo and Botanical Garden. A third calf female was born in March 2022.</br></br>\
    D. s. harrissoni, known as the Bornean rhinoceros or eastern Sumatran rhinoceros, which was once common throughout Borneo; now only about 15 individuals are estimated to survive. The known population lives in East Kalimantan, with them having recently gone extinct in Sabah. Reports of animals surviving in Sarawak are unconfirmed. This subspecies is named after Tom Harrisson, who worked extensively with Bornean zoology and anthropology in the 1960s. The Bornean subspecies is markedly smaller in body size than the other two subspecies. The captive population consisted of one bull and two cows at the Borneo Rhinoceros Sanctuary in Sabah; the bull died in 2019 and the cows died in 2017 and 2019 respectively.</br></br>\
    D. s. lasiotis, known as the northern Sumatran rhinoceros or Chittagong rhinoceros, which once roamed India and Bangladesh, has been declared extinct in these countries. Unconfirmed reports suggest a small population may still survive in Myanmar, but the political situation in that country has prevented verification. The name lasiotis is derived from the Greek for "hairy-ears". Later studies showed that their ear hair was not longer than other Sumatran rhinos, but D. s. lasiotis remained a subspecies because it was significantly larger than the other subspecies.</p>',

    "<h2 class='title'>test</h2></br><p>test</p>",

    "<h2 class='title'>Conservation</h2></br><p>Sumatran rhinos were once quite numerous throughout Southeast Asia. Fewer than 100 individuals are now estimated to remain. The species is classed as critically endangered (primarily due to illegal poaching) while the last survey in 2008 estimated that around 250 individuals survived. From the early 1990s, the population decline was estimated at more than 50% per decade, and the small, scattered populations now face high risks of inbreeding depression.[2] Most remaining habitat is in relatively inaccessible mountainous areas of Indonesia.</br></br>\
Poaching of Sumatran rhinos is a cause for concern, due to the high market price of its horns. This species has been overhunted for many centuries, leading to the current greatly reduced and still declining population.[2] The rhinos are difficult to observe and hunt directly (one field researcher spent seven weeks in a treehide near a salt lick without ever observing a rhino directly), so poachers make use of spear traps and pit traps. In the 1970s, uses of the rhinoceros's body parts among the local people of Sumatra were documented, such as the use of rhino horns in amulets and a folk belief that the horns offer some protection against poison. Dried rhinoceros meat was used as medicine for diarrhea, leprosy, and tuberculosis. \"Rhino oil\", a concoction made from leaving a rhino's skull in coconut oil for several weeks, may be used to treat skin diseases. The extent of use and belief in these practices is not known. Rhinoceros horn was once believed to be widely used as an aphrodisiac; in fact traditional Chinese medicine never used it for this purpose. Nevertheless, hunting in this species has primarily been driven by a demand for rhino horns with unproven medicinal properties.</br></br>\
    The rainforests of Indonesia and Malaysia, which the Sumatran rhino inhabits, are also targets for legal and illegal logging because of the desirability of their hardwoods. Rare woods such as merbau, meranti and semaram are valuable on the international markets, fetching as much as $1,800 per m3 ($1,375 per cu yd). Enforcement of illegal-logging laws is difficult because humans live within or near many of the same forests as the rhino. The 2004 Indian Ocean earthquake has been used to justify new logging. Although the hardwoods in the rainforests of the Sumatran rhino are destined for international markets and not widely used in domestic construction, the number of logging permits for these woods has increased dramatically because of the tsunami. However, while this species has been suggested to be highly sensitive to habitat disturbance, apparently it is of little importance compared to hunting, as it can withstand more or less any forest condition. Nevertheless, the main cause of drastic reduction of the species is likely caused by the Allee effect.</br></br>\
    The Bornean rhino in Sabah was confirmed to be extinct in the wild in April 2015, with only 3 individuals left in captivity. The mainland Sumatran rhino in Malaysia was confirmed to be extinct in the wild in August 2015. In March 2016 there was a rare sighting of a Sumatran rhino in Kalimantan, the Indonesian part of Borneo. The last time there was a Sumatran rhino in the Kalimantan area was approximately 40 years ago. This optimism was met with despair as the same rhino was found dead several weeks after the sighting. The cause of death is unknown.</p>",

    "<h2 class='title'>Fun Fact</h2></br><p>fun fact</p>",
  ],
];

const animal1 = document.querySelector("#blue-whale");
const animal2 = document.querySelector("#great-white-shark");
const animal3 = document.querySelector("#red-panda");
const animal4 = document.querySelector("#dugong");
const animal5 = document.querySelector("#sumatran-rhinoceros");

const nav1 = document.querySelector("#blue-whale-nav");
const nav2 = document.querySelector("#great-white-shark-nav");
const nav3 = document.querySelector("#red-panda-nav");
const nav4 = document.querySelector("#dugong-nav");
const nav5 = document.querySelector("#sumatran-rhinoceros-nav");

const title = document.querySelector("#title-1");

const desc1 = document.querySelector("#desc-1");
const desc2 = document.querySelector("#desc-2");
const desc3 = document.querySelector("#desc-3");
const desc4 = document.querySelector("#desc-4");
const desc5 = document.querySelector("#desc-5");

const images1 = document.querySelector("#img-1");
const images2 = document.querySelector("#img-2");
const images3 = document.querySelector("#img-3");
const images4 = document.querySelector("#img-4");
const imgage5 = document.querySelector("#img-5");

animal1.addEventListener("click", () => {
  title.textContent = desc[0][0];
  desc1.innerHTML = desc[0][1];
  desc2.innerHTML = desc[0][2];
  desc3.innerHTML = desc[0][3];
  desc4.innerHTML = desc[0][4];
  desc5.innerHTML = desc[0][5];
  images1.innerHTML = images[0][0];
  images2.innerHTML = images[0][1];
  images3.innerHTML = images[0][2];
  images4.innerHTML = images[0][3];
  images5.innerHTML = images[0][4];
});

animal2.addEventListener("click", () => {
  title.textContent = desc[1][0];
  desc1.innerHTML = desc[1][1];
  desc2.innerHTML = desc[1][2];
  desc3.innerHTML = desc[1][3];
  desc4.innerHTML = desc[1][4];
  desc5.innerHTML = desc[1][5];
  images1.innerHTML = images[1][0];
  images2.innerHTML = images[1][1];
  images3.innerHTML = images[1][2];
  images4.innerHTML = images[1][3];
  images5.innerHTML = images[1][4];
});

animal3.addEventListener("click", () => {
  title.textContent = desc[2][0];
  desc1.innerHTML = desc[2][1];
  desc2.innerHTML = desc[2][2];
  desc3.innerHTML = desc[2][3];
  desc4.innerHTML = desc[2][4];
  desc5.innerHTML = desc[2][5];
  images1.innerHTML = images[2][0];
  images2.innerHTML = images[2][1];
  images3.innerHTML = images[2][2];
  images4.innerHTML = images[2][3];
  images5.innerHTML = images[2][4];
});

animal4.addEventListener("click", () => {
  title.textContent = desc[3][0];
  desc1.innerHTML = desc[3][1];
  desc2.innerHTML = desc[3][2];
  desc3.innerHTML = desc[3][3];
  desc4.innerHTML = desc[3][4];
  desc5.innerHTML = desc[3][5];
  images1.innerHTML = images[3][0];
  images2.innerHTML = images[3][1];
  images3.innerHTML = images[3][2];
  images4.innerHTML = images[3][3];
  images5.innerHTML = images[3][4];
});

animal5.addEventListener("click", () => {
  title.textContent = desc[4][0];
  desc1.innerHTML = desc[4][1];
  desc2.innerHTML = desc[4][2];
  desc3.innerHTML = desc[4][3];
  desc4.innerHTML = desc[4][4];
  desc5.innerHTML = desc[4][5];
  images1.innerHTML = images[4][0];
  images2.innerHTML = images[4][1];
  images3.innerHTML = images[4][2];
  images4.innerHTML = images[4][3];
  images5.innerHTML = images[4][4];
});

nav1.addEventListener("click", () => {
  title.textContent = desc[0][0];
  desc1.innerHTML = desc[0][1];
  desc2.innerHTML = desc[0][2];
  desc3.innerHTML = desc[0][3];
  desc4.innerHTML = desc[0][4];
  desc5.innerHTML = desc[0][5];
  images1.innerHTML = images[0][0];
  images2.innerHTML = images[0][1];
  images3.innerHTML = images[0][2];
  images4.innerHTML = images[0][3];
  images5.innerHTML = images[0][4];
});

nav2.addEventListener("click", () => {
  title.textContent = desc[1][0];
  desc1.innerHTML = desc[1][1];
  desc2.innerHTML = desc[1][2];
  desc3.innerHTML = desc[1][3];
  desc4.innerHTML = desc[1][4];
  desc5.innerHTML = desc[1][5];
  images1.innerHTML = images[1][0];
  images2.innerHTML = images[1][1];
  images3.innerHTML = images[1][2];
  images4.innerHTML = images[1][3];
  images5.innerHTML = images[1][4];
});

nav3.addEventListener("click", () => {
  title.textContent = desc[2][0];
  desc1.innerHTML = desc[2][1];
  desc2.innerHTML = desc[2][2];
  desc3.innerHTML = desc[2][3];
  desc4.innerHTML = desc[2][4];
  desc5.innerHTML = desc[2][5];
  images1.innerHTML = images[2][0];
  images2.innerHTML = images[2][1];
  images3.innerHTML = images[2][2];
  images4.innerHTML = images[2][3];
  images5.innerHTML = images[2][4];
});

nav4.addEventListener("click", () => {
  title.textContent = desc[3][0];
  desc1.innerHTML = desc[3][1];
  desc2.innerHTML = desc[3][2];
  desc3.innerHTML = desc[3][3];
  desc4.innerHTML = desc[3][4];
  desc5.innerHTML = desc[3][5];
  images1.innerHTML = images[3][0];
  images2.innerHTML = images[3][1];
  images3.innerHTML = images[3][2];
  images4.innerHTML = images[3][3];
  images5.innerHTML = images[3][4];
});

nav5.addEventListener("click", () => {
  title.textContent = desc[4][0];
  desc1.innerHTML = desc[4][1];
  desc2.innerHTML = desc[4][2];
  desc3.innerHTML = desc[4][3];
  desc4.innerHTML = desc[4][4];
  desc5.innerHTML = desc[4][5];
  images1.innerHTML = images[4][0];
  images2.innerHTML = images[4][1];
  images3.innerHTML = images[4][2];
  images4.innerHTML = images[4][3];
  images5.innerHTML = images[4][4];
});
