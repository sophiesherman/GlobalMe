// NAME: DataManager: Config

// PURPOSE: storage and retrieval place for data - to store the current instance of the logged in user

export default class DataManager {
  static myInstance = null;
  username = "";

  categories = [
    { label: "Restaurant", value: 1 },
    { label: "Places to Visit", value: 2 },
    { label: "Places to Stay", value: 3 },
    { label: "Things to Do", value: 4 },
  ];

  locations = [
    { label: "Sydney", value: 100 },
    { label: "Melbourne", value: 102 },
    { label: "Brisbane", value: 103 },
    { label: "Perth", value: 104 },
    { label: "Canberra", value: 105 },
    { label: "Adelaide", value: 106 },
  ];

  users = [
    {
      name: "John Smith",
      email: "john.smith@gmail.com",
      username: "john",
      password: "1234",
      image: {
        uri: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      },
    },
    {
      name: "Jane Ryan",
      email: "jane.ryan@gmail.com",
      username: "jane",
      password: "1234",
      image: {
        uri: "https://images.unsplash.com/photo-1616529735204-6799853ed36f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "Mary Hill",
      email: "mary@gmail.com",
      username: "mary",
      password: "1234",
      image: {
        uri: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
  ];

  listings = [
    {
      id: 1,
      title: "Five Point Burgers",
      location: "Sydney",
      category: "Restaurants",
      image: {
        uri: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      username: "john",
      information:
        "Easily the best burger I've had in Sydney. The bun was soft and delicious itself, the patties were cooked perfectly and still a bit pink which was amazing, draped in the best american cheese, which just does something brilliant to a burger and the bacon....cooked to a perfect crisp, made the whole experience incredible. Highly recommend this outstanding place. Just be prepared to have a nap after your culinary adventure.",
    },
    {
      id: 2,
      title: "Sydney Harbour Bridge",
      location: "Sydney",
      category: "Places to Visit",
      image: {
        uri: "https://images.unsplash.com/photo-1556089309-ee43fc7e666c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5JTIwaGFyYm91ciUyMGJyaWRnZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      },
      username: "jane",
      information:
        "An Australian heritage-listed arch bridge across Sydney Harbour that carries rail, vehicular, bicycle, and pedestrian traffic between the Sydney central business district (CBD) and the North Shore. The view of the bridge, the harbour, and the nearby Sydney Opera House is widely regarded as an iconic image of Sydney, and of Australia itself. The bridge is nicknamed 'The Coathanger' because of its arch-based design.",
    },
    {
      id: 3,
      title: "The Itchcolm Hotel",
      location: "Brisbane",
      category: "Places to Stay",
      image: {
        uri: "https://cf.bstatic.com/images/hotel/max1024x768/205/205716709.jpg",
      },
      username: "jane",
      information:
        "This has been elegantly refurbished and offers luxurious boutique accommodation in the heart of Brisbane. Set in a 1920’s era building this hotel features an on-site restaurant and bar. The property offers complimentary access to the fitness facilities at Fitness First Elizabeth Street, located 700 m away.",
    },
    {
      id: 4,
      title: "Queen Street Mall",
      location: "Brisbane",
      category: "Things to Do",
      image: {
        uri: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob3BwaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      },
      username: "john",
      information:
        "This is in the heart of Brisbane. It's got loads of places to drink and dine. The open air Mall has the best shopping in the city. Brisbane's mild climate.means you can hang out in the Mall all year round. There's also over 1,000 events happenng in he Mall every year. The Queen St Mall is the centrer of Brisbane's retail precinct.",
    },
    {
      id: 5,
      title: "Lone Pine Koala Sanctuary",
      location: "Brisbane",
      category: "Things to Do",
      image: {
        uri: "https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8a29hbGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      username: "john",
      information:
        "Discover over 70 species of Australian native animals in a beautiful, natural bush setting at the world's first and largest koala sanctuary. Meet a koala, hand-feed kangaroos, marvel at the playful platypus, and enjoy a full daily schedule of keeper talks and activities, including Sheep Dog Show and Wild Lorikeet Feeding. Amenities: free wiFi everywhere, parents' rooms & cafes.",
    },
    {
      id: 6,
      title: "Meriton Suites",
      location: "Adelaide",
      category: "Places to Stay",
      image: {
        uri: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      username: "jane",
      information:
        "The suite made for an excellent stay. It was Spacious, with very tasteful furniture and excellent facilities. The gym and pool were high quality. The location is central and the view stunning. I will make it my preferred accommodation for Brisbane.",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getCategories() {
    return this.categories;
  }

  getLocations() {
    return this.locations;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  logOut() {
    this.setUsername(null);
  }

  getUsers() {
    return this.users;
  }

  getUser(username, users) {
    if (username) {
      return users.filter((user) => user.username === username);
    }
    let currentUser = this.getUsername();
    let usersList = this.getUsers();
    return usersList.filter((user) => user.username === currentUser);
  }

  setUsers(users) {
    this.users = users;
  }

  addUser(user) {
    this.users.push(user);
  }

  deleteUser(username) {
    const newListingList = this.listings.filter(
      (item) => item.username !== username
    );
    this.listings = newListingList;

    const newUserList = this.users.filter((item) => item.username !== username);
    this.setUsers(newUserList);
  }

  updateUser(newData, oldData) {
    const userListings = this.listings.filter(
      (item) => item.username === oldData.username
    );
    this.deleteUser(oldData.username);

    const newUserListings = userListings.map(
      (element) =>
        (element = {
          title: element.title,
          information: element.information,
          category: element.category,
          location: element.location,
          id: element.id,
          username: newData.username,
          image: element.image,
        })
    );

    this.listings.push(...newUserListings);

    this.users.push(newData);
    this.setUsername(newData.username);
  }

  getAllListings() {
    return this.listings;
  }

  getListings(username) {
    return this.listings.filter((listing) => listing.username === username);
  }

  addListing(listing) {
    this.listings.push(listing);
  }

  updateListing(oldListing, newListing) {
    this.deleteListing(oldListing);
    this.listings.push(newListing);
  }

  deleteListing(listing) {
    const newListingList = this.listings.filter(
      (item) => item.id !== listing.id
    );
    this.listings = newListingList;
  }
}
