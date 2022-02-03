let lessons = [
    {
      SubjectName: "Psychology",
      Location: "Barking",
      Price: 120.0,
      Space: 5,
      Image: "images/psychology.webp",
    },
    {
      SubjectName: "English literature",
      Location: "Wembley",
      Price: 110.0,
      Space: 5,
      Image: "images/englit.jpg",
    },
    {
      SubjectName: "English language",
      Location: "Harrow",
      Price: 105.0,
      Space: 5,
      Image: "images/english.jpg",
    },
    {
      SubjectName: "Media",
      Location: "Northolt",
      Price: 20.0,
      Space: 5,
      Image: "images/media.jpg",
    },
    {
      SubjectName: "Drama",
      Location: "Ilford",
      Price: 25.0,
      Space: 5,
      Image: "images/drama.png",
    },
    {
      SubjectName: "Business",
      Location: "Kingsbury",
      Price: 65.0,
      Space: 5,
      Image: "images/business.jpg",
    },
    {
      SubjectName: "Chemistry",
      Location: "Hendon",
      Price: 90.0,
      Space: 5,
      Image: "images/chemistry.jpg",
    },
    {
      SubjectName: "Biology",
      Location: "Hayes",
      Price: 90.0,
      Space: 5,
      Image: "images/biology.jpg",
    },
    {
      SubjectName: "Physics",
      Location: "Ealing",
      Price: 105.0,
      Space: 5,
      Image: "images/physics.jpg",
    },
    {
      SubjectName: "Mathematics",
      Location: "Edgware",
      Price: 85.0,
      Space: 5,
      Image: "images/maths.jpg",
    },
  ];
  
  //Store Data to the Local Storage
  localStorage.setItem("Lesson", JSON.stringify(lessons));

