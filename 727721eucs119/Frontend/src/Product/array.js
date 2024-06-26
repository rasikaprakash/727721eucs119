const Rest = [
    {
      id: 1,
      image:
        "rest1.jpg",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/71mlk+5TszL.jpg",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: " Chinese",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 4,
      image:
        "data:image/jpeg;base64,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",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlADxTaHudDgMOkPMPJXm0uVopNB_XXbT2A&usqp=CAU",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYhMjl3BXlJz0mRAsWT_fllRcll40p_D8NDEebtQymvB_KNnyMUSFXWo_Ff2IqyrVg8A&usqp=CAU",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 7,
      image:
        "https://wallpaperaccess.com/full/3014701.jpg",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbwbfDrYyRFZwjMxt7hBFi5-_Gv7fHveN7LVHod9qgXTlzuDchKs6pY2YIYlcZiqfksQ&usqp=CAU",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
    {
      id: 9,
      image:
        "",
      name: "SS Hyderabad Biryani",
      famous: "Biryani",
      type: "South Indian, Chinese, Arabic",
      distance: "10 Km",
      time: "20-25 mins",
      rating: "4.0",
    },
  ];
  
  export { Rest };