const NewsHooks = () => {
  const author = {
    id: 1,
    displayName: "Maki, Tuuli-Maria (Nokia - FI/Espoo)",
    email: "tuuli-maria.maki@nokia.com",
    department: "MN L1 Espoo TC",
    jobtitle: "Campus Communication trainee",
  };

  const highlightItem = {
    title: "Welcome to Nokia Finland Christmas Session on December 10",
    author: author,
    highlight: true,
    description:
      "Welcome to Christmas Session with stand-up comedian & TV host Jaakko Saariluoma on Dec 10",
    timestamp: "2020-11-27",
    bannerImgUrl: require("../assets/christmas_session.jpg"),
    bannerImgTitle: "Open internal positions in Espoo",
    paragraphs: {
      1: {
        text: "Dear colleagues,",
        imgUrl: null,
        imgTitle: null,
      },
      2: {
        text:
          "Many things have changed this year due to COVID-19, and so have our plans for the traditional local Christmas parties in Finland. This year we offer you something else. We invite you all to experience something fun together virtually, just before the year end.",
        imgUrl: null,
        imgTitle: null,
      },
      3: {
        text:
          "Welcome to a relaxed session with actor, stand-up comedian and television host Jaakko Saariluoma. He´s a quick thinker, sharp and fun – always a step ahead of everyone. Take your seats and get ready to be entertained!",
        imgUrl: null,
        imgTitle: null,
      },
      4: {
        text:
          "The session will be hosted by one of Finland’s leading business speakers and writers André Noël Chaker. As an entrepreneur, André has been a leading force in many science, technology, gaming and sports related start-up ventures.",
        imgUrl: null,
        imgTitle: null,
      },
      5: {
        text: `***
        Opening by André Noël Chaker
        
        Nokia’s season’s greetings
        by Country Senior Officer Tommi Uitto and
        Site Heads Vesa Kohtamäki, Erja Sankari and Petri Ahokas
        André’s take on Finns & Christmas
        by André Noël Chaker
        Christmas music from Nokia sites in Finland
        by Nokia employees
        Stand-up show by Jaakko Saariluoma
        Take a sneak peek on Jaakko’s greetings to our Nokia employees here.
         
                                                                                           ***
        `,
        imgUrl: null,
        imgTitle: null,
      },
      6: {
        text:
          "This is an internal event dedicated for Nokia employees in Finland. Join us for a fun and relaxed session!",
        imgUrl: null,
        imgTitle: null,
      },
      7: {
        text: "Welcome!",
        imgUrl: null,
        imgTitle: null,
      },
      8: {
        text:
          "Tip! You may want to consider arranging your own virtual Christmas get-together with your team right after this show.",
        imgUrl: null,
        imgTitle: null,
      },
      9: {
        text: "Br,",
        imgUrl: null,
        imgTitle: null,
      },
      10: {
        text: "Finland Communications",
        imgUrl: null,
        imgTitle: null,
      },
    },
  };

  const newsItems = [
    {
      title:
        "Joulupuu - Christmas Tree Campaign 2020 at Espoo Campus until Dec 7",
      author: author,
      highlight: false,
      description:
        "The aim of the Joulupuu campaign is to collect presents for those children who might not get one from anyone else.\r\nJoulupuu (Christmas Tree) campaign has started again and this year it’s needed maybe more than ever before because of the increased need for help due to COVID-19.\r\nWe aim to collect presents for all ages (between 0-17 years) who are within child welfare care in Finland.\r\nIn Finland, there are thousands of underprivileged children, who will not be able to celebrate Christmas with their families.\r\nOn Christmas Eve, every child hopes to find a present under the Christmas tree.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/joulupuu.jpg"),
      bannerImgTitle: "Christmas tree campaign",
      paragraphs: {
        1: {
          text:
            "On Christmas Eve, every child hopes to find a present under the Christmas tree. Joulupuu (Christmas Tree) campaign has started again and this year it’s needed maybe more than ever before because of the increased need for help due to COVID-19. Unfortunately quite a few will be disappointed. In Finland, there are thousands of underprivileged children, who will not be able to celebrate Christmas with their families. There are over 10 000 children under child welfare care in capital area alone, and the number is increasing. The aim of the Joulupuu campaign is to collect presents for those children who might not get one from anyone else.",
          imgUrl: null,
          imgTitle: null,
        },

        2: {
          text:
            "On Christmas Eve, every child hopes to find a present under the Christmas tree. Joulupuu (Christmas Tree) campaign has started again and this year it’s needed maybe more than ever before because of the increased need for help due to COVID-19. Unfortunately quite a few will be disappointed. In Finland, there are thousands of underprivileged children, who will not be able to celebrate Christmas with their families. There are over 10 000 children under child welfare care in capital area alone, and the number is increasing. The aim of the Joulupuu campaign is to collect presents for those children who might not get one from anyone else.",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text: `Collection points at Espoo Campus on Nov 16 – Dec 7
                •	Bring a new or a self-made present ready-wrapped to Nokia’s Joulupuu collection point:
                •	Karakaari 7A reception lobby
                •	Karaportti 4 Dreams Café
                •	Please attach a label card (available at the collection point) with ready marked gender and age (e.g."Boy 15 years" or "Girl 6 years") to your present. Then just add a short description of the content to the card.
                •	Note. Please don’t wrap any used time-worn/broken items as your gift may be the only Christmas present the child gets.
                •	Contact persons for the campaign: Pirjo Nurminen (Karakaari 7A); Laura Kemppilä (Karaportti 4, Dreams Café)
                `,
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text: `Other ways to participate in the Christmas Tree campaign:
                •	You can participate also at any of the other official Joulupuu collection points. You can find the list of the collections points ${"here".link(
                  "https://joulupuu.org/muu-suomi/"
                )}, the list will be updated during November.
                •	You can also participate by purchasing a gift via the ${"Minunlahjani.fi".link(
                  "https://minunlahjani.fi/joulupuu/"
                )} website, in which case the gift will be delivered to the recipient ready-wrapped. The wrapping cost is 2.50€ and is automatically added to the shopping cart per product. The Minunlahjani.fi online store will deliver the collected Christmas gifts in 2020 to children in Turku, Tampere, Jyväskylä and the Helsinki metropolitan area.
                •	You can also participate by making a monetary donation. Detailed information about how to make a monetary donation will be updated to ${"joulupuu.org/".link(
                  "https://joulupuu.org/"
                )} website during November.
                `,
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text: `The campaign is organized together with the Junior Chambers who are co-ordinating the project. All presents will be delivered to the local social welfare authority who will take care of distributing the presents to the right addresses well before Christmas.
                `,
          imgUrl: null,
          imgTitle: null,
        },
        6: {
          text: `
                Thank you in advance and enjoy the holiday spirit!
                Nokia Finland Volunteering team
                `,
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Espoo International Community Yammer group",
      author: author,
      highlight: false,
      description:
        "A new Yammer group has been created for newly hired and other international employees at Espoo to share information and discuss on various topics related to living in Finland.\r\nThis is meant to be a community where employees can share all kind of useful information and ask questions from peers.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/international_yammer.jpg"),
      bannerImgTitle: "Espoo International Community Yammer group launched",
      paragraphs: {
        1: {
          text:
            "A new Yammer group has been created for newly hired and other international employees at Espoo to share information and discuss on various topics related to living in Finland. This is meant to be a community where employees can share all kind of useful information and ask questions from peers. HR will also share information on services and interesting events for international employees and their family members that we receive from the cities of Espoo and Helsinki. We would like this to be one channel to help international employees at Espoo campus to network and to find information and tips from each other to make them and their families feel at home in Finland. ",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "Welcome to join the group! Espoo International Community Yammer",
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Hobbies of your Nokia colleagues: Ultrarunning ",
      author: author,
      highlight: false,
      description:
        "We used to attend orienteering competitions almost every weekend with my parents and sister during the summer.\r\nIt is sort of a lifestyle although that might sound like a cliché.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/nokiahobbies.jpg"),
      bannerImgTitle: "Hobbies of your Nokia colleagues",
      paragraphs: {
        1: {
          text:
            "My name is Mikael and I’m an addict….ultrarunner. Running has always been part of my life. It is sort of a lifestyle although that might sound like a cliché. ",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "Already as a child running was part of my life in the form of orienteering. We used to attend orienteering competitions almost every weekend with my parents and sister during the summer. At the age of 18 I wanted to try my first marathon which was not a big success. I had started way too fast to be able to complete the race gracefully. Even with the less expected result I didn’t give up but continued to run marathons. However, I never quite achieved the results I strived for.",
          imgUrl: require("../assets/nokiahobbies_sysi.jpg"),
          imgTitle: "Sysikallio 2011",
        },
        3: {
          text:
            "It was in early 2000 when I heard about ultrarunning for the first time. I came across a couple of articles about runners who ran across Australia and another runner who had run between the Paavo Nurmi statues in Helsinki and Turku. Those inspired me and in 2004 I ran my first ultra. It was a 6-hour race on a 400-meter track. After the race I had a feeling that I have found something profoundly new for myself. Something I had never experienced before.",
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text:
            "Running ultra distances is quite different compared for example to marathons. The pace is always much slower and you have time to discuss with people even during the race. It’s a very social event where you can meet with extraordinary people and hear great stories from all around the world. The running community is also much smaller which means you know many if not all of the runners.",
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text:
            "Since the first ultra race the sport has taken me all over the world. I have been running in the beautiful Japan during the cherry tree blossom in April, around the gigantic Mont Blanc in August and under the scorching sun in Rocky Mountains Canada in July. One of the most memorable races has also been running under the midnight sun in arctic nature in Lapland. Since the beginning I have done more than 50 ultra races.",
          imgUrl: require("../assets/nokiahobbies_sakura.jpg"),
          imgTitle: "Sakura-michi 2009",
        },
        6: {
          text:
            "I would advise everyone to try running. Running is a nice way to familiarise yourself while travelling to a new environment. You may often find new and exciting places that you would not otherwise find. There are nice applications available which you can use in advance to plan your runs in a new place. Or you may also contact the local running community to give you a tour to the nicest locations. Running is also a very time efficient sport since you do not need to separately go to a gym or sports arena. You just open your front door at home and take the first step. Now when working from home office during the covid-19 it is quite nice to have a short break during the day and go for a run. This helps also your cognitive capabilities during the rest of the day.",
          imgUrl: require("../assets/nokiahobbies_canada.jpg"),
          imgTitle: "Sinister 7 2014 (Canada Rocky Mountains)",
        },
        7: {
          text:
            "For the last two years I have together with my wife also produced a podcast series called Polkuporinat. The idea has been to discover and document different stories around endurance sports. Some of the people we have invited to the series might be familiar also to you as they have been invited also to different Nokia events. You can listen to the series with any podcast application or behind this link: https://radioplay.fi/podcast/polkuporinat/ The podcast series is in Finnish. ",
          imgUrl: null,
          imgTitle: null,
        },
        8: {
          text: `Happy running,
                Mikael
                 `,
          imgUrl: null,
          imgTitle: null,
        },
        9: {
          text: null,
          imgUrl: require("../assets/nokiahobbies_barkley.jpg"),
          imgTitle: "Barkley Marathons 2019 start of loop 2",
        },
        10: {
          text: null,
          imgUrl: require("../assets/nokiahobbies_pallas.jpg"),
          imgTitle: "Pallas 2016",
        },
        11: {
          text: null,
          imgUrl: require("../assets/nokiahobbies_yellow.jpg"),
          imgTitle: "Barkley yellow gate 2019",
        },
      },
    },
    {
      title:
        "Nokia Veturi Program accelerates Business Opportunity Development with the Leading Industrial Partners",
      author: author,
      highlight: false,
      description:
        "Nokia Veturi program accelerates the joint development of new industrial solutions with the industrial partners to enhance productivity, security and sustainability.\r\nIn order to realize these objectives, we utilize our Future X Lab in Espoo to jointly test, validate and demonstrate the most promising industrial solution blueprints and novel application scenarios.\r\nNokia Veturi Program accelerates Business Opportunity Development with the Leading Industrial Partners\r\nTogether with our industrial partners like ABB we have built a mini factory, a small manufacturing cell as a platform to our Industrial 5G solutions for example towards the conscious factories.\r\nWith our own 5G private network, telco cloud, and wireless coverage interconnected to Finnish 5G test networks (TNF) Future X Lab will open an opportunity for Nokia’s ecosystem partners to present their solutions and enhance their market engagement opportunities.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/nokia_veturi.jpg"),
      bannerImgTitle: "Espoo International Community Yammer group launched",
      paragraphs: {
        1: {
          text:
            "Nokia Veturi program accelerates the joint development of new industrial solutions with the industrial partners to enhance productivity, security and sustainability. In order to realize these objectives, we utilize our Future X Lab in Espoo to jointly test, validate and demonstrate the most promising industrial solution blueprints and novel application scenarios.  With our own 5G private network, telco cloud, and wireless coverage interconnected to Finnish 5G test networks (TNF) Future X Lab will open an opportunity for Nokia’s ecosystem partners to present their solutions and enhance their market engagement opportunities. Together with our industrial partners like ABB we have built a mini factory, a small manufacturing cell as a platform to our Industrial 5G solutions for example towards the conscious factories. In order to realize these opportunities ultra-reliable and low latency communications and time sensitive networking will play a key role in the future industrial applications.  ",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "On October 27 we hosted visitors from Fortum and Metsä Group at our EEC premises (see photo below), where we presented the selected demos on NDAC, Industrial security solutions and visual analytics. Based on the discussion and feedback we really were able to raise concrete interest among our industrial partners and detailed information sharing is actively ongoing. Great One Nokia teamwork again and special thanks to all contributors: Kirsi Leppä (NE), Jari Jolkkonen (NE), Zhi-Chun Honkasalo (Nokia Bell Labs), Yoan Miche (Nokia Bell Labs), Gabriela Limonta (Nokia Bell Labs), Jukka Rantala (TECH) and our great EEC team, Tero & Co.",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text:
            "For more information on Nokia’s Veturi Program, please contact: Jarkko Pellikka ",
          imgUrl: require("../assets/nokia_veturi_executive.jpg"),
          imgTitle: "EEC Espoo 2020",
        },
      },
    },
    {
      title: "Espoo Site environment corner",
      author: author,
      highlight: false,
      description:
        "Headquarter audit for ISO 14001 (environmental management system) and ISO 45001 (occupational health and safety management system) was conducted remotely with successful results in the early November.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/environment_corner.jpg"),
      bannerImgTitle: "Espoo Site environment corner",
      paragraphs: {
        1: {
          text:
            "Headquarter audit for ISO 14001 (environmental management system) and ISO 45001 (occupational health and safety management system) was conducted remotely with successful results in the early November. There were several participants globally and no one, including auditor, needed to travel to Espoo Site. ",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "The next external 14K&45K audit in Espoo Site will be conducted in January, where GS, MN, NOPS and RE are participating. Site access restriction due to COVID-19 will not prevent this or any other audits as remote auditing is a valid method for all management systems for which Nokia is certified. ",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text:
            "Remote auditing in the internal audits has been possible for some years. Now having the same possibility also for external audits creates saving potentials also from environmental point of view as no one needs to travel on site only for the sake of participating into audit.",
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Open internal positions in Espoo",
      author: author,
      highlight: false,
      description:
        "MN ECP RD&Pz HW in Espoo is looking for a self-motivated, experienced person who has several years of R&D background, hardware and embedded software knowledge.\r\nThe importance of the competence area will be greatly elevated in 2021, as trial activities with customers start accelerating from the beginning of the year, and first commercial vRAN2.\r\n5G&Sc in Espoo is looking for Area Product Owner (APO) for 5G AirScale Cloud RAN (vRAN2.0) Customer Specific Verification Competence Area.\r\nThere are more than 120 open internal positions in Espoo that you can find in our Nokia Careers page.\r\nWe are offering extremely interesting work in global environment where the work requires collaboration with number of different suppliers.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/internal_positions.jpg"),
      bannerImgTitle: "Open internal positions in Espoo",
      paragraphs: {
        1: {
          text:
            "There are more than 120 open internal positions in Espoo that you can find in our Nokia Careers page. For example these positions are now open:",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "MN ECP RD&Pz HW in Espoo is looking for a self-motivated, experienced person who has several years of R&D background, hardware and embedded software knowledge. The new colleague should have strong drive & ability to coordinate work for the team members. He/She will cooperate with Product Owners, Local Product Owners and other Area Product Owners from the team. We value proven team leading skills and good team player mentality with good communication skills in English. We are offering extremely interesting work in global environment where the work requires collaboration with number of different suppliers. ",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text: "Area Product Owner / 2000000H28",
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text:
            "5G&Sc in Espoo is looking for Area Product Owner (APO) for 5G AirScale Cloud RAN (vRAN2.0) Customer Specific Verification Competence Area. In this Competence Area (CA), the teams perform end-to-end testing of 5G Cloud RAN use cases in customer-like configurations. This makes the team critical for ensuring customer quality and satisfaction. CA members also support early lead customer projects with their 5G Cloud RAN end-to-end competences. The importance of the competence area will be greatly elevated in 2021, as trial activities with customers start accelerating from the beginning of the year, and first commercial vRAN2.0 based Cloud RAN 5G deployments will start with 5G21C. APO reports to the 5G AiC Solution Integration Tribe Lead.",
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text: "Area Product Owner / 2000000IAH",
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Welcoming simplified access to HR services ",
      author: author,
      highlight: false,
      description:
        "The HR services portal is now a single point of entry to all HR services.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/hr_services.png"),
      bannerImgTitle: "Simplified access to HR services",
      paragraphs: {
        1: {
          text: " Dear colleagues",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "We have always valued your feedback and suggestions, and in our efforts to provide you the best service experience, we bring to you simplified access to HR services.",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text:
            "After a successful pilot in China and APJ regions in September 2020, effective from 5 November 2020, it is live for all employees and line managers in Americas, Europe, India, Middle East and Africa regions.",
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text: `The HR services portal is now a single point of entry to all HR services.
 
            This means that you will be able to submit all your HR-related queries and support requests via this portal. It now comes with additional features that make the process easier for you. So, if you now have a question that you want to ask us, always remember, HR services portal is the easiest and fastest way to get HR support.
            `,
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text: `You can also send your questions/queries to HR Services through a common email for your region:
 
              •	Americas: HRservices.americas@nokia.com
              •	Europe: HRservices.europe@nokia.com
              •	India, Middle East and Africa: HRservices.imea@nokia.com
              •	China and APJ regions: HRServices.eastasia@nokia.com
               
              Please note that if you send your request to the former email address, you will get an auto response advising you to use the new email address.
              No change in the call line service.
              `,
          imgUrl: null,
          imgTitle: null,
        },
        6: {
          text: `We remain committed to continuously enhance your experience.
                `,
          imgUrl: null,
          imgTitle: null,
        },
        7: {
          text: `Regards
                `,
          imgUrl: null,
          imgTitle: null,
        },
        8: {
          text: `Human Resources.
                `,
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Welcome to Espoo Site Week on November 30",
      author: author,
      highlight: false,
      description:
        "Due to these exceptional times, we are unable to arrange our annual Espoo Site Day event at the Executive Experience Center.\r\nEspoo Site Week 2020 presents our expertise throughout the week, daily at 10:00-12:00, in short 30-minutes slots.\r\nDuring this week you can watch many interesting presentations from different business groups and learn more about what is happening here at Espoo Campus.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/espoo_site_week.jpg"),
      bannerImgTitle: "Welcome to Espoo Site Week on November 30",
      paragraphs: {
        1: {
          text:
            "Due to these exceptional times, we are unable to arrange our annual Espoo Site Day event at the Executive Experience Center. This year, it will be a virtual Espoo Site Week instead. Espoo Site Week 2020 presents our expertise throughout the week, daily at 10:00-12:00, in short 30-minutes slots. Join the sessions that interest you the most or join them all.",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "During this week you can watch many interesting presentations from different business groups and learn more about what is happening here at Espoo Campus.",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text: `Please visit Espoo Site Week 2020 event page for the detailed agenda and Learning Points. You will also find all the session recordings on this page afterwards. 
            Q&A for each session will take place on the Espoo Site Week 2020 Yammer, under the dedicated session post
            `,
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text: `Take part in the Espoo Campus Quiz and win a prize. The quiz is open until 11:00 on Friday, December 4.
                `,
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title: "Walk people walk ",
      author: author,
      highlight: false,
      description:
        "Walking is an easy and efficient act to fight against stagnancy and for durable wellbeing\r\nThis article summarises all the best practices and good tips that were shared during the virtual wellbeing walks held in October.\r\nIn the very first walk, we talked about personal wellbeing; where to get motivation, time and energy needed for making smart choices that increase personal wellbeing.\r\nTo be able to enjoy the life given to us and work many fruitful years - we simply MUST take good care of ourselves.",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/forest.jpg"),
      bannerImgTitle: "Welcome to Espoo Site Week on November 30",
      paragraphs: {
        1: {
          text:
            "Walking is an easy and efficient act to fight against stagnancy and for durable wellbeing ",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text:
            "This article summarises all the best practices and good tips that were shared during the virtual wellbeing walks held in October. In the very first walk, we talked about personal wellbeing; where to get motivation, time and energy needed for making smart choices that increase personal wellbeing. To be able to enjoy the life given to us and work many fruitful years - we simply MUST take good care of ourselves. Our calendar reveals our priorities in life, so how much ‘Personal wellbeing time’ is marked on your calendar?",
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text: `On the second walk, Marc Lindsay’s tips for healthy walking were shared with the participants. 
              `,
          imgUrl: require("../assets/walk_1.jpg"),
          imgTitle: null,
        },
        4: {
          text: `1) Vary Intensity: If you find it hard to pick up the pace, try doing so for shorter intervals of 1–2 minutes, with a minute of recovery in between.
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text: `2) Change route: To boost weight-loss and to keep things exciting, change your scenery a couple of days a week. 
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        6: {
          text: `3) Walking + strength training = Success! Strength training can help you build the core, glute and hip strength needed to walk further and faster.  
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        7: {
          text: `4) Good walking technique: check your stride length, lift a foot and lean forward. Where the foot naturally falls is where you should be striking the ground. Swinging your arms helps you get more power and propels your forward motion. While you might need to strengthen your core to make it happen, work on keeping your back straight and your head up.   
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        8: {
          text: `5) Proper nutrition: Refuel smartly!    
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        9: {
          text: `6) Use weights correctly: limit to light weights only one or two days per week and keep it to easy walks.     
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        10: {
          text: `7) Move throughout the day: Even if you are getting out for a daily walk, it is not enough if you’re sedentary for the remainder of the day.      
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        11: {
          text: `8) Set realistic goals: Failing to meet your goals or expectations can lead to disappointment and negative thinking. Instead, set smaller, more realistic goals that lead to a bigger goal.       
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        12: {
          text: `9) Set routine: to avoid procrastinating, set a schedule and try your best to stick to it. Whether it’s waking up early, exercising during your lunch hour or making a post-dinner walk a habit, you’ll be more likely to make your daily walk a consistent part of your routine. If you miss one day, don’t beat yourself up, simply resume your routine as soon as possible.        
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        13: {
          text: `10) Vary the distance: At least once per week, try to include a longer walk. This could be a weekend day when you have more time or first thing in the morning.         
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        14: {
          text: `The third walk was about practicing mindfulness while walking. Marc Lindsay writes in Polar blog about mindfulness running but walking can be practiced in a mindful way too. It is all about being present during your walks and becoming more connected to your body, lowering stress levels and improving performance at the same time. According to Lindsay, to achieve mindfulness while walking, first you need to leave the gear that might distract you during your walk at home. Next thing is to de-stress prior to heading outdoors by using some breathing techniques or light stretching. Before the walk, try to think a mindfulness goal for the workout, like keeping your thoughts quiet, relaxing your shoulders more, or maintaining a better posture. Start slow and pay attention to things like your breathing rate, your heartbeat, and the rhythm of your arms and legs as they move. You may feel tight or sore, or your walking technique may seem off. All these things are okay. Don’t worry about fixing them or stress about making it better.          
                  `,
          imgUrl: require("../assets/walk_2.jpg"),
          imgTitle: null,
        },
        15: {
          text: `Instead, embrace how your body feels and simply observe it. You might be surprised how you can actually start feeling more relaxed and looser as your walk progresses when you simply stop worrying so much about how you feel. Lindsay reminds us that part of the beauty of walking outdoors is the ability to get in tune with nature. Once you’ve found your walking rhythm, spend some time noticing your surroundings. Focus on one thing at the time, like the clouds in the sky or the fallen leaves on the ground. If you’re in a more urban environment, notice the architecture of the buildings or the different colours in your surroundings.          
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        16: {
          text: `These things will help keep your mind quiet instead of giving attention to the stress in your life that can often pop up during a walk such as a problem at work or chores that need to be done. Keeping your focus on what’s around you will help you be present in the moment, stay relaxed and enjoy your walk. During the last portion of your mindful walk, notice how straight or slumped your back is, how far forward ahead you’re looking, how your foot is striking the ground, and the effect gravity has on your body. Ideally, you’ll want your body as upright as possible, with your head up, your shoulders back, and your arms moving front to back instead of sideways. Once you’re close to the finish line – ease your steps and slow down for the last hundred meters. After your heart rate and breathing have calmed, breathe and reconnect with your body so it can head into a more relaxed state.          
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        17: {
          text: `The fourth walk gave some ideas on how to maintain energy levels during a walk and listed five reasons that Marc Lindsay brought up in his MyFitnessPal blog post on getting tired quickly on walks. Increasing your step count with a daily walk is one of the easiest ways to start an exercise habit and improve your overall health. A gradual ramp-up is necessary as you build your aerobic endurance, but if you’re getting tired too quickly, it’s important to understand potential causes and address them. Wearing the wrong shoes or socks, having a poor diet or sedentary lifestyle are all factors that can hinder your motivation and progress. If you’re not used to regular exercise, it can be challenging to go from the couch to brisk walking for long durations, and you’ll likely tire quickly. Don’t beat yourself up over your starting point, since even 10 minutes of walking a day can help counteract the negative effects of sitting. Instead, ease yourself into longer durations by following a plan or working with a coach. Focusing on good posture can help you feel less tired and prevent injuries that would further slow you down. There can be other health issues too that make you tire more quickly. For example, when you’re overweight, your heart has to work harder to pump blood to your muscles when you move. This puts stress on the cardiovascular system and decreases your aerobic endurance. If you have asthma or pre-existing injuries like knee, back or foot problems, it’s always a good idea to get checked first before you begin an exercise routine.          
                  `,
          imgUrl: require("../assets/walk_3.jpg"),
          imgTitle: null,
        },
        18: {
          text: `Lindsay’s blog posting also shared some ideas to improve the walking endurance. Based on your individual goals and lifestyle listening to music might help change your frame of mind so you can push through feelings of fatigue. Or you could follow your distance, pace and heart rate with a fitness tracker. Staying in the correct aerobic heart rate zone by adjusting your pace can help you walk for longer periods. Furthermore, pre- and post-walk stretching can help prevent injury and improve flexibility to keep your walking form at its best. And finally, a dedicated walking coach can help you build a personalized walking routine and deal with any setbacks. At Nokia, such coaching can be asked from the occupational health service provider, Aava.          
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        19: {
          text: `The final, fifth wellbeing walk was held on Thursday October 29 with the biggest topic, scanning one’s personal wellbeing. As a framing tool we used five questions to visualize the wellbeing scenery in our minds. 1) Do I live the way I want to live? 2) What brings meaning to my life? 3) What inspires me? 4) Am I at the right place in my life? 5) What gives me the motivation to get up in the mornings? 
            Sometimes it is good to stop and evaluate the current situation in life; am I running on autopilot, am I doing the right things with my life? Stop and take the needed time to identify things that matter and are important to you. Identifying and following our individual preferences bring energy to our days. A perfect time to do this kind of reflection is during a private walk when it is easy to listen to your very own thoughts as no one is disturbing. Use your walks to take time for regular self-reflection and make sure you live the kind of life you want.            
                  `,
          imgUrl: require("../assets/walk_4.jpg"),
          imgTitle: null,
        },
        20: {
          text: `The walks will continue in 2021 – slightly developed – stay tuned for more!          
                  `,
          imgUrl: null,
          imgTitle: null,
        },
        21: {
          text: `Main header image source: https://i2.cdn.turner.com/money/dam/assets/150224082711-cortez-forrest-gump-1024x576.jpg            
                  `,
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
    {
      title:
        "We challenge you, Espoo Campus Nokia employee, to a Step challenge!",
      author: author,
      highlight: false,
      description:
        "In December we are encouraging all of you to take part in the Step Challenge!\r\nWe challenge you, Espoo Campus Nokia employee, to a Step challenge!",
      timestamp: "2020-11-27",
      bannerImgUrl: require("../assets/step_challenge.jpg"),
      bannerImgTitle: "Step Challenge 2020",
      paragraphs: {
        1: {
          text:
            "In December we are encouraging all of you to take part in the Step Challenge! The duration is the full month of December and there will be three categories:",
          imgUrl: null,
          imgTitle: null,
        },
        2: {
          text: `1)	Take 7000+ steps per day to earn a point per day. Therefore, the maximum is 31 points as there are 31 days in December. If there are more than five participants reaching the 31 points, we will organize a draw and five lucky ones will be rewarded.
              2)	Collect the most steps during December and
              3)	Simply take 7000+ steps at least on one day in December to be included in the final lucky draw.
              `,
          imgUrl: null,
          imgTitle: null,
        },
        3: {
          text:
            "By participating you have the possibility to win a Nokia phone (Nokia 4.2 or Nokia 8110), ergo equipment, sport equipment, safety equipment, delicates, etc.. ",
          imgUrl: null,
          imgTitle: null,
        },
        4: {
          text:
            "The challenge will be launched on December 1 - make sure you are in! Provide your input via this STEP DIARY either by recording your steps daily or by recording all your steps at once at the end of the month",
          imgUrl: null,
          imgTitle: null,
        },
        5: {
          text: `To count the steps, the participants can use any application on their phones or on their smart watches. The steps need to be transferred into the STEP DIARY manually.                                                          ***
            `,
          imgUrl: null,
          imgTitle: null,
        },
        6: {
          text:
            "We will calculate the results on January 5, 2021, so make sure to record all your steps from December by then. The form will be closed on January 4 at 18:00. The winners will be contacted personally and announced in the January Campus Newsletter.",
          imgUrl: null,
          imgTitle: null,
        },
        7: {
          text: "Image source: Nokia employee’s travel photo",
          imgUrl: null,
          imgTitle: null,
        },
      },
    },
  ];

  const getNewsItems = () => {
    return newsItems;
  };

  const getHighlightItem = () => {
    return highlightItem;
  };

  return {
    getNewsItems,
    getHighlightItem,
  };
};

export default NewsHooks;
