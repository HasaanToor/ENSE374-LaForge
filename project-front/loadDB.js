const mongoose = require( "mongoose" );
mongoose.connect( "mongodb://localhost:27017/laforgedb", { useNewUrlParser: true, useUnifiedTopology: true});

const provinceSchema = new mongoose.Schema({
    province: String,
    about: String,
    tourism: String,
    cfl: String,
    background: String,
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String
});

const Province = mongoose.model("Province", provinceSchema);

Province.insertMany(
    [
        {
            province: "Alberta",
            about: "A fan of Road trips and wildlife? you are on the right page! Alberta is best known for its national parks and canadian rockies. Enjoy the scenic views of Banff and a breathe taking view of jasper.    This province is a perfect blend of city life and nature. The northern alberta is all about the capital city Edmonton with famous west edmonton mall and art gallery.   The largest city in the province, calgary is home for the famous calgary tower, food and shopping. Not to forget about its rich indigenous culture, Red deer in central alberta is full of museums and art galleries.   Summers in alberta is the best time for hiking, river rafting, camping, canoeing and kayaking. Ever walked on a glacier? it's one of the famous things to do in alberta. Ice walking, Ice skating, cross-counntry skiing snowboarding and what not?",
            tourism: "Banff and Jasper National park, Lake Louise, Moraine Lake, Lake Louise Ski Resort, Calgary stampede & Calgary tower, West Edmonton Mall, Drumheller and the Royal Tyrrell Museum of Palentology",
            cfl: "Calgary Stampeders | 8 Grey Cup wins | www.stampeders.com",
            background: "banff-estudiar.jpg",
            pic1: "jasper.jpg",
            pic2: "cal.jpg",
            pic3: "west.jpg",
            pic4: "calcfl.jpg",
            pic5: "stamp.jpg"
        },
        {
            province: "Saskatchewan",
            about: "Rich in history and heritage, Queen City.. Regina Numerous lakes, great sunsets, Bridge City.. Saskatoon. keep an eye out for northern lights!! Saskatchewan offers a thriving arts and culture scene, beautiful provincial parks, and a wide range of sports and leisure activities. Love camping? saskatchewan is the best place to witness wildlife and nature. There are numerous national parks in saskatchewan where you can find the best campsites to eat good marshmallows. University of Saskatchewan is one of the top universities in the province with the largest T-rex remains and University of Regina is known for its excellence in research and new tecnologies. Saskatchewan is the best place to live. Peaceful, good food and good people!!",
            tourism: "Saskatchewan Legislative Building, Prince Albert national park, Wanuskewin Heritage Park, RCMP Heritage Centre, Royal Saskatchewan Museum, University of Saskatchewan, Fort walsh national historic site",
            cfl: "Saskatchewan Roughriders | 4 Grey Cup wins | www.riderville.com",
            background: "SKbg.jpg",
            pic1: "rcmp.jpg",
            pic2: "leg.jpg",
            pic3: "uofs.jpg",
            pic4: "sask.jpg",
            pic5: "rough.jpg"
        },
        {
            province: "Quebec",
            about: "The 2 F words: Fall and French.. Quebec is all about having a sip of coffee while watching those leaves fall.. Founded by a french explorer, quebec city sits on a cliff-top location with french culture. Old Quebec, place Royale and Château Frontenac are some must see attractions in Quebec. Montreal, the most populus city in the province and the second most populus city in canada. Summer and fall are the best time to wander through the festive streets of quebec. You will aslo come acros amazing exhibitions in quebec city. Winter wonderland of old quebec is one of the must see attracions in quebec city. There are winter carnival events always going on the streets of quebec. You can also zoom down snow tube rows as a fun activity and get a cozy touch of winter at nordic spa with a sip of wine for after hours.",
            tourism: "Place Royale, Le Chateau Frontenac, Canadian Museum of History, Notre-Dame Basilica, Mont Tremblant, Parc Jean Drapeau, Old Montreal",
            cfl: "Montreal Alouettes | 7 Grey Cup wins | en.montrealalouettes.com",
            background: "QBbg.jpg",
            pic1: "parc.jpg",
            pic2: "canmus.jpg",
            pic3: "le.jpg",
            pic4: "alo.jpg",
            pic5: "mon.jpg"
        },
        {
            province: "Ontario",
            about: "Graffiti, CN tower, night life, skyscrapers and Niagara falls... A total package! With unequalled wonders to uncover and countless ways to explore, Ontario is large and diverse. Toronto is canada's largest multicultural urban centre. Toronto is always happening!! In Toronto, Mississauga, and Brampton, more than 180 languages and dialects are spoken, and half of the locals were born outside of Canada. Numerous gastronomic options showcase this multicultural mix. This is a haven for foodies, and the culture of craft beer is thriving to match. Ontario is all about having a city life, Concerts, theatres & film, Shopping, Wineries & natural wonders",
            tourism: "Niagara Falls, Toronto's CN Tower, Thousand Islands, Royal Ontario Museum, Lake of the Woods, Art Gallery of Ontario, Canada's Wonderland",
            cfl: "Toronto Argonauts | 18 Grey Cup wins | www.argonauts.ca",
            background: "ONbg.jpg",
            pic1: "niagara.jpg",
            pic2: "wonder.jpg",
            pic3: "cn.jpg",
            pic4: "arg.jpg",
            pic5: "tor.jpg"
        },
        {
            province: "Nova Scotia",
            about: "Given thousands of kilometres of coastline, it's hardly surprising that Nova Scotia has the most lighthouses of any province in Canada. Lighthouses are a typical sight along seacoasts and continue to be a significant historical icon that exquisitely highlights our magnificent coastal landscape. While some are accessible to the public, others can be seen while commuting on foot or by bicycle. Two designated 'Dark Sky Areas' and some of North America's darkest and cleanest skies may be found in Nova Scotia. The Acadian Skies & Mi'kmaq Lands Starlight Preserve, the first place in North America to be certified as a Starlight destination by the Starlight Foundation, is a great place to observe the night sky. Discover the various benefits of Nova Scotia's wealth, which range from traditional maple syrup, seasonal apple u-picks, and the catch of the day at lobster pounds to gourmet cheeses, chocolates, and more.",
            tourism: "Cabot trail, Peggy's Cove, Fortress of Louisbourg National Historic Site, Cape Breton Highlands National Park, Halifax Citadel National Historic Site, Halifax Harbour, Kejimkujik National Park",
            cfl: "Atlantic Schooners | 0 Grey Cup wins | www.cfl.ca/teams/atlantic-schooners/",
            background: "NSbg.jpg",
            pic1: "cabot.jpg",
            pic2: "peggy.jpg",
            pic3: "harbour.jpg",
            pic4: "atl.jpg",
            pic5: "sch.jpg"
        },
        {
            province: "Newfoundland and Labrador",
            about: "One of the most amazing sites on Earth to see whales is Newfoundland and Labrador. Whether you see one of these magnificent beasts from the deck of a tour boat, the side of your sea kayak, or a coastal walk, it's an exciting and spectacular experience. Some of the most important geological discoveries have been made in Newfoundland and Labrador. There are over 29,000 kilometres of diverse coastline to explore, so wherever you go, you're sure to find something special in terms of the geology. There's no denying that Newfoundland and Labrador is a top location for birdwatching with over 350 different species of birds. You can get close to millions of seabirds, rare birds, and raptors whether you travel by land or sea.",
            tourism: "Gros Morne National Park, The Rooms, L'Anse aux Meadows National Historic Site, Signal Hill National Historic Site, Bonavista Peninsula, Cape Spear Lighthouse, Twillingate and Fogo Island",
            cfl: "N/A",
            background: "NLbg.jpg",
            pic1: "gros.jpg",
            pic2: "rooms.jpg",
            pic3: "bona.jpg",
            pic4: "atl.jpg",
            pic5: "sch.jpg"
        },
        {
            province: "Manitoba",
            about: "Experience the exhilaration of landing a trophy fish or racing a dogsled through the woodland. On your next trip to Manitoba, take in the serenity while admiring the northern lights' elegant dance or while leisurely kayaking across a lake at dusk. The story of Manitoba is heavily influenced by Indigenous and Francophone experiences, and hardy Manitobans are known for producing wonderful art and brilliant, top-notch performances. Experience Manitoba's arts, culture, and history to learn more about who Manitobans actually are. Visit Winnipeg to see a show, observe polar bears swimming above you, or relax as your worries melt away. Bring the family on a weekend getaway that includes a trip to a family-friendly museum or an urban nature sanctuary. The Interlake region of Manitoba is named as such because it lies between Lake Winnipeg and Lake Manitoba, the two largest lakes in the province. It follows that it is not surprising that the lakes dominate this area. Family favourites on the coasts of both lakes are the beaches, and during the winter, boats are replaced with ice fishing shacks.",
            tourism: "The Forks National Historic Site, The Manitoba Museum, The Manitoba Legislative Building, FortWhyte Alive, Winnipeg Art Gallery, The Royal Canadian Mint, Assinibonie Park Zoo",
            cfl: "Winnipeg Blue Bombers | 12 Grey Cup wins | www.bluebombers.com",
            background: "MNbg.jpg",
            pic1: "man.jpg",
            pic2: "fort.jpg",
            pic3: "mint.jpg",
            pic4: "blue.jpg",
            pic5: "bom.jpg"
        },
        {
            province: "British Columbia",
            about: "Windswept beaches, rainforests, mountain ranges and culture.. that's BC for you! This province is the best option for a getaway from our busy lives. Vancouver's Vancouver island , Pacific Rim afn sunshine coast are home for nature. On the other hand, Victoria is B.C's vibrant Capital city with ocean view. Ski resorts in Apex, panaroma and sun peaks are known to be famous. Heli-skiing, Dogsledding, Snow mobiling are some of the famous activities to do in winters. Whereas in summers, Paddling, Hiking, Golf, River rafting are some fun activities to do. Haida Gwaii in the nothern BC is rich in wildlife and famous for its totem-poles.",
            tourism: "Vancouver Island, Yoho National Park, Okanagan Valley & Keelowna, Glacier National Park, Victoria & the Inner Harbour, Vancouver and Stanley Park, Haida Gwaii",
            cfl: "BC Lions | 6 Grey Cup wins | www.bclions.com",
            background: "BCbg.jpg",
            pic1: "island.jpg",
            pic2: "yoho.jpg",
            pic3: "haida.jpg",
            pic4: "bcl.jpg",
            pic5: "bclw.jpg"
        },
    ]
);