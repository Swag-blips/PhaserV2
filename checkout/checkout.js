// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to calculate and display the order summary
function displayOrderSummary() {
    const checkoutTableBody = document.querySelector("#checkout-table tbody");
    checkoutTableBody.innerHTML = ""; // Clear any existing data

    let subtotal = 0;

    // Loop through the cart and display each item
    cart.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₦${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>₦${(item.price * item.quantity).toFixed(2)}</td>
        `;

        checkoutTableBody.appendChild(row);

        // Calculate subtotal
        subtotal += item.price * item.quantity;
    });

    // Display the subtotal and total
    document.getElementById("subtotal").innerText = `₦${subtotal.toFixed(2)}`;
    document.getElementById("total").innerText = `₦${subtotal.toFixed(2)}`;
}

// Call the function to display the cart items on page load
displayOrderSummary();

// Function for handling the checkout
document.getElementById("checkout-btn").addEventListener("click", function () {
    if (cart.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your cart is empty!',
        });
    } else {
        // Show success confirmation with SweetAlert
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to confirm your order?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear the cart in localStorage
                localStorage.removeItem("cart");

                Swal.fire(
                    'Confirmed!',
                    'Your order has been placed.',
                    'success'
                ).then(() => {
                    // Redirect to a success page or reload
                    window.location.href = "/success.html";
                });
            }
        });
    }
});
