// ========================================
// SIMPLE BEGINNER-FRIENDLY JAVASCRIPT
// ========================================

// 1. Select the form, input, and message area from the HTML.
const trackingForm = document.getElementById("trackingForm");
const shipmentInput = document.getElementById("shipmentId");
const formMessage = document.getElementById("formMessage");

// 2. Create some sample shipment data.
const shipments = {
  S101: "Delivered",
  S102: "In Transit",
  S103: "Delayed"
};

// 3. Listen for the form submission.
trackingForm.addEventListener("submit", function (event) {
  // Prevent the page from refreshing.
  event.preventDefault();

  // Get the shipment ID and convert it to uppercase.
  const shipmentId = shipmentInput.value.trim().toUpperCase();

  // 4. Check whether the user typed anything.
  if (shipmentId === "") {
    formMessage.textContent = "Please enter a shipment ID.";
    formMessage.style.color = "#c0392b";
    return;
  }

  // 5. Check whether the shipment exists in our sample data.
  if (shipments[shipmentId]) {
    formMessage.textContent = `${shipmentId}: ${shipments[shipmentId]}`;
    formMessage.style.color = "#168a50";
  } else {
    formMessage.textContent = "Shipment not found. Try S101, S102, or S103.";
    formMessage.style.color = "#c0392b";
  }
});
