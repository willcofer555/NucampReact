campsites: [
    {
        id: 0,
        name: 'React Lake Campground',
        image: 'assets/images/react-lake.jpg',
        elevation: 1233,
        description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.",
        comments: [ {id:0, text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:1,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:2,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'}]
    },
    {
      id: 1,
      name: 'Chrome River Campground ',
      image: 'assets/images/chrome-river.jpg',
      elevation: 877,
      description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.",
      comments: [ {id:0, text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:1,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:2,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'}]
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Campground',
        image: 'assets/images/breadcrumb-trail.jpg',
        elevation: 2901,
        description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.",
        comments: [ {id:0, text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:1,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:2,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'}]
    },
    {
        id: 3,
        name: 'Redux Woods Campground',
        image: 'assets/images/redux-woods.jpg',
        elevation: 42,
        description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
        comments: [ {id:0, text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:1,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'},{id:2,text:"hello I am a comment", author: 'Will Cofer', Date: 'Aug 04,2019'}]
    }
]

<Route path='/directory/:campsiteId' component={CampsiteWithId} />