
class Course {
  constructor(id, price, instructor, availableSpaces, title, description, image) {
    this.id = id;
    this.price = price;
    this.instructor = instructor;
    this.availableSpaces = availableSpaces;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

const cartEle = document.querySelector('.popover');
const coursesEle = document.querySelector('.courses');

cartEle.addEventListener('click', function() {
  document.querySelector('.cart-inner').classList.toggle('hide');
});


const courses = [
  new Course(
    "SD100",
    14.99,
    "Johnathan Niziol",
    15, 
    "Introduction to Web Development",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "html_and_css.jpg"
  ),
  new Course(
    "SD110",
    23.01,
    "Johnathan Niziol",
    3, 
    "JavaScript Basics",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "js-basics.png"
  ),
  new Course(
    "SD120",
    9.99,
    "Johnathan Niziol",
    10, 
    "Object Oriented JavaScript",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "advanced-javascript.png"
  ),  
  new Course(
    "SD145",
    14.99,
    "Johnathan Niziol",
    30, 
    "JavaScript Testing",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "testing.png"
  ),
  new Course(
    "SD260",
    149.99,
    "Johnathan Niziol",
    5, 
    "Introduction to React",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "react.jpg"
  ),
];


courses.forEach(function(course) {
  coursesEle.insertAdjacentHTML('afterbegin', `
    <li data-course-id="${course.id}">
      <img src="images/${course.image}">
      <div class="info">
        <h3 id="item-title">${course.title}</h3>
        <p id="item-description">
          ${course.description}
        </p>
        <div id="price">
          <h4>Price:</h4> 
          <span>$${course.price}</span>
        </div>
        <div id="instructor">
          <h4>Instructor</h4>
          <span>${course.instructor}</span>
        </div>
        <button id="add-to-cart">Add To Cart</button>
        <div id="spaces-remaining"><span>${course.availableSpaces}</span> spaces remaining</div>
      </div>
    </li>`);
});
