const books = [
  {
    author: "author1",
    title: "title1",
    yearPublication: 2022,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "marketing",
    user: "test1",
    cover: "http://prosidr.ru/_nw/590/18142608.jpg",
    rate: {
      test2: 5,
      test1: 3,
      test3: 3,
      test4: 3,
      test5: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author2",
    title: "title2",
    yearPublication: 2021,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "detective",
    user: "test1",
    cover: "https://readli.net/wp-content/uploads/2015/11/BC2_1443448046.jpg",
    rate: {
      test2: 5,
      test1: 3,
      test4: 5,
      test5: 4,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author3",
    title: "title3",
    yearPublication: 1994,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "history",
    user: "test1",
    cover: "https://cdn.100sp.ru/cache_pictures/088610510/thumb300",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author1",
    title: "title4",
    yearPublication: 2022,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "marketing",
    user: "test2",
    cover: "https://kratko.pro/uploads/posts/2021-07/1626181292_1.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author2",
    title: "title5",
    yearPublication: 2021,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "detective",
    user: "test2",
    cover:
      "https://home.be-in.ru/media/beingallery/gallary/things/2019/08/29/large_6e1eb0a18e0ef0be.jpg.300x450_q77_autocrop_background-%23ffffff_upscale.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author3",
    title: "title6",
    yearPublication: 1994,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "history",
    user: "test2",
    cover: "https://newmooncottage.com/wp-content/uploads/2018/05/9780877289296-300x450.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author1",
    title: "title7",
    yearPublication: 2022,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "marketing",
    user: "test1",
    cover: "http://padabum.com/pics/75864.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author2",
    title: "title8",
    yearPublication: 2021,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "detective",
    user: "test1",
    cover: "https://www.valtersunrapa.lv/media/book_covers/RmObDYgm9NiD_300x450_2mRPEZPf.png",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author3",
    title: "title9",
    yearPublication: 1994,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "history",
    user: "test1",
    cover: "https://www.valtersunrapa.lv/media/book_covers/D3TYVPtUdK8y_300x450_2mRPEZPf.png",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author1",
    title: "title10",
    yearPublication: 2022,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "marketing",
    user: "test2",
    cover: "https://www.convinceandconvert.com/wp-content/uploads/2013/05/CandC-lead-image-option-2.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author2",
    title: "title11",
    yearPublication: 2021,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "detective",
    user: "test2",
    cover: "https://www.valtersunrapa.lv/media/book_covers/J9_HfhY0wNAa_300x450_2mRPEZPf.png",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
  {
    author: "author3",
    title: "title12",
    yearPublication: 1994,
    annotation:
      "In reprehenderit consectetur proident irure ut esse mollit aute. Anim minim ullamco et aliquip veniam magna labore est excepteur sit deserunt. Ipsum in ut adipisicing laboris aliqua amet qui enim qui minim sit sunt nostrud nisi. Consequat laboris occaecat pariatur laboris voluptate ad adipisicing elit quis aliquip deserunt eu nostrud. Id in officia adipisicing occaecat Lorem consectetur labore et voluptate reprehenderit enim.",
    genre: "history",
    user: "test2",
    cover: "https://exlibrus.net/images/prod/velikie-zhenshhiny-696.jpg",
    rate: {
      test2: 5,
      test1: 3,
    },
    comments: [
      { username: "test1", text: "text1 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test3", text: "text3 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
      { username: "test2", text: "text2 from", data: "Thu, 24 Mar 2022 20:30:18 GMT" },
    ],
  },
];

export default books;
