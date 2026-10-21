// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "I&#39;m curious about the manner and extent to which languages vary from one another, especially in their morphosyntax.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "papers and proceedings in reversed chronological order, followed by talks and posters.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "last updated April 2026",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-music-in-dm",
          title: "music in DM",
          description: "music in terms of realizational morphology",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
          },
        },{id: "news-presented-a-final-over-final-constraint-effect-in-modern-greek-compounding-at-the-44th-annual-meeting-of-the-department-of-linguistics-aristotle-university-of-thessaloniki",
          title: 'Presented A Final-Over-Final Constraint effect in Modern Greek compounding at the 44th Annual...',
          description: "",
          section: "News",},{id: "news-presented-mesoclisis-across-modern-greek-dialects-proclisis-enclisis-or-neither-at-mgdlt-10-held-in-the-griko-speaking-villages-of-southern-italy",
          title: 'Presented Mesoclisis across Modern Greek dialects: proclisis, enclisis, or neither? at MGDLT 10,...',
          description: "",
          section: "News",},{id: "news-stress-in-spoken-and-whistled-greek-with-andre-batchelder-schwab-and-jon-barnes-appeared-in-the-proceedings-of-interspeech-2025",
          title: 'Stress in Spoken and Whistled Greek, with Andre Batchelder-Schwab and Jon Barnes, appeared...',
          description: "",
          section: "News",},{id: "news-poster-at-the-boston-morphology-workshop-theme-vowels-could-be-syntactic-insight-from-syncretism-in-greek-fragment-poster",
          title: 'Poster at the Boston Morphology Workshop: Theme vowels could be syntactic: insight from...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%63%68%6F%73@%62%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://docs.google.com/document/d/1utOUNVGwCEjM0VWjLW4khp4GDrSyyzoA2Bv6sy38ags/edit?usp=sharing", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vasileios-michos-2ab975294", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/vasilis_michos", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
