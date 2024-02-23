document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    setTimeout(function() {
      document.getElementById("status").innerHTML = "Message sent! We'll get back to you soon.";
      document.getElementById("contactForm").reset();
    }, 2000);
  });
  