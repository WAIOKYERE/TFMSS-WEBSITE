document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
  
    // Simulate processing donation (replace with actual logic)
    setTimeout(function() {
      document.getElementById("status").innerHTML = "Thank you, " + name + "! Your donation of $" + amount + " has been received.";
      document.getElementById("donationForm").reset();
    }, 2000);
  });
  