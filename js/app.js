class Cart {
  constructor() {
    this.courses = [];
    this.length = 0;
  }

  addCourse(courseId) {
    const course = courses.find(course => course.id === courseId);
    this.courses.push(course);
    this.length = this.courses.length;
    this.redrawCart();
    this.updateBill();
  }

  removeCourse(courseId) {
    const index = this.courses.findIndex(course => course.id === courseId);
    this.courses.splice(index,1);
    this.length = this.courses.length;
    this.redrawCart();
    this.updateBill();
  }

  subtotal() {
    return parseFloat(this.courses.reduce((sum, course) => {
      return sum = sum + course.price;
    }, 0).toFixed(2));
  }

  total() {
    return parseFloat((this.subtotal() * 1.13).toFixed(2));
  }

  updateBill() {
    const billTotal = document.getElementById('yourBill');
    billTotal.innerText = this.total();
  }

  redrawCart() {
    const cartInner = document.querySelector('.cart-inner ul');
    const itemsInCart = document.getElementById('items-in-cart');
    const subtotal = document.getElementById('subtotal-amount');
    const total = document.getElementById('total-amount');

    itemsInCart.textContent = `You have ${this.length} items in your cart.`

    cartInner.textContent = "";

    this.courses.forEach(function(course) {
      cartInner.insertAdjacentHTML('afterbegin', `
      <li data-course-id="${course.id}">
        <img src="images/${course.image}">  
        <div id="cart-title">${course.title}</div>
        <div id="cart-price">$${course.price}</div>
        <div id="delete">
          <i class="far fa-times-circle"></i>
        </div>
      </li>`);
    });

    subtotal.textContent = `$${this.subtotal()}`
    total.textContent = `$${this.total()}`
  }
}

const cart = new Cart();

coursesEle.addEventListener('click', function(e) {
  if (e.target.nodeName === "BUTTON") {
    cart.addCourse(e.target.closest('li').dataset.courseId);   
  }
});
 
const cartInner = document.querySelector('.cart-inner ul');

cartInner.addEventListener('click', function(e) {
  if (e.target.nodeName === "I") {
    cart.removeCourse(e.target.closest('li').dataset.courseId);
  }
});



