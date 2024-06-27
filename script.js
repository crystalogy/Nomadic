document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const destination = document.getElementById("destination").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (!destination || !checkin || !checkout || !guests) {
      alert("All fields are required.");
      return;
    }

    alert(
      `Searching for trips to ${destination} from ${checkin} to ${checkout} for ${guests} guests.`
    );
  });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!/^[A-Za-z\s]{1,20}$/.test(name)) {
      alert("Invalid name. Only letters and spaces are allowed.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email.");
      return;
    }

    alert("Form submitted successfully.");
  });

const destinations = [
  { name: "Bora Bora", price: 2000, rating: "5 stars" },
  { name: "Bali", price: 1500, rating: "4.5 stars" },
  { name: "Puerto Rico", price: 1000, rating: "4 stars" },
];

destinations.forEach((destination) => {
  console.log(
    `Destination: ${destination.name}, Price: $${destination.price}, Rating: ${destination.rating}`
  );
});

function validateForm() {
  const form = document.getElementById("search-form");
  const destination = form.destination.value;
  const checkin = form.checkin.value;
  const checkout = form.checkout.value;
  const guests = form.guests.value;

  if (!destination || !checkin || !checkout || !guests) {
    return false;
  }

  return true;
}

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form is valid");
    } else {
      alert("Please fill out all fields");
    }
  });
