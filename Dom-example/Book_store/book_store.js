const bookdata = [
  {
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    price: 234,
  },

  {
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    price: 473,
  },

  {
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    price: 567,
  },
];

function Book(data) {
  // Create main div
  const div = document.createElement("div");

  div.setAttribute("class", "book");

  // Create image
  const image = document.createElement("img");

  image.setAttribute("src", data.image);

  image.setAttribute("height", "200px");

  image.setAttribute("width", "200px");

  // Create price
  const h2 = document.createElement("h2");

  h2.innerText = "Price: ₹" + data.price;

  h2.style.color = "blue";

  // Create button
  const bt = document.createElement("button");

  bt.innerText = "Add To Cart";

  // Add image inside div
  div.appendChild(image);

  // Add price inside div
  div.appendChild(h2);

  // Add button inside div
  div.appendChild(bt);

  // Return complete book div
  return div;
}

// Create 3 book objects/elements
const bookStore = bookdata.map((b) => {
  return Book(b);
});

// Get parent div from HTML
const parent = document.getElementById("bookstore");

// Add every book to bookstore
for (let i of bookStore) {
  parent.appendChild(i);
}
