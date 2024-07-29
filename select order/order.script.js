document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Send form data to Formspree
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to order confirmation page with order details
          const url = new URL(
            "../order-confirmation.html",
            window.location.href
          );
          url.searchParams.append("name", formData.get("name"));
          url.searchParams.append("phone", formData.get("phone"));
          url.searchParams.append("email", formData.get("email"));
          url.searchParams.append("delivery", formData.get("delivery"));
          url.searchParams.append("quantity", formData.get("quantity"));
          url.searchParams.append("instructions", formData.get("instructions"));
          url.searchParams.append("ordered", formData.get("ordered"));
          url.searchParams.append("price", formData.get("price"));
          window.location.href = url.toString();
        } else {
          alert("There was a problem with your order. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was a problem with your order. Please try again.");
      });
  });

// Handle quantity change to update hidden fields and price display
const quantity = document.getElementById("quantity");
const priceDisplay = document.getElementById("price-value");
const dishName = document.querySelector("#ordered").textContent.trim();

quantity.addEventListener("change", function () {
  priceDisplay.textContent = this.value;
  document.getElementById("order-form").elements["ordered"].value = dishName;
  document.getElementById("order-form").elements["price"].value = this.value;
});
