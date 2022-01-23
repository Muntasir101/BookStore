const menu = [
  {
    id: 1,
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
   category: "fiction",
  //  category: ["fiction", "fantasy"]
    img: "./images/item-1.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 2,
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
    category: "fantacy",
    //category: ["nonfiction", "essays"],
    img: "./images/item-2.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 3,
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
    category: "nonfiction",
    //category: ["fiction", "graphic novel", "fantasy"],
    img: "./images/item-3.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 4,
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
    category: "fiction",
    //category: ["fiction", "fantasy"],
    img: "./images/item-4.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 5,
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
    category: "epic",
    //category: ["fiction", "historical fiction"],
    img: "./images/item-5.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 6,
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
    category: "fiction",
    //category: ["fiction", "fantasy"],
    img: "./images/item-6.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 7,
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
    category: "fiction",
   // category: ["fiction", "short stories"],
    img: "./images/item-7.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 8,
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
    category: "fantacy",
    //category: ["fantasy", "epic"],
    img: "./images/item-8.jpg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 9,
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
    category: "nonfiction",
    //category: ["fiction"],
    img: "./images/item-9.png",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },
  {
    id: 10,
    title: "Kafka on The Shore",
    authors: ["Haruki Murakami"],
    rating: 4.5,
    genres: ["fiction"],
    category: "fantacy",
    //category: ["fiction"],
    img: "./images/item-10.jpeg",
    ratingImage: "./images/rating-1.jpg",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over, a Latin professor, looked up one of the more obscure Latin words`,
  },

];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});


function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <h5 class="author">${item.authors} (Author)</54>
            <p class="item-text">
              ${item.desc}
            </p>
            <h5 class="rating">Rating : ${item.rating}</h5>
            <img src=${item.ratingImage} class="ratingImage"/>
            <h5 class="genre">Genre : ${item.genres}</h5>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
