 function redirectToProject2() {
		      window.location.href = "https://gitlab.com/b279-cabaccang/backend/-/tree/master/s42-s46_capstone_2";
		    }

		    function redirectToProject3() {
		      window.location.href = "https://fullstack-1zw409ygk-capstone-3-cabaccang.vercel.app/";
		    }

// Function to collapse the navbar when a link is clicked
function collapseNavbar() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
}

// Smooth scrolling when clicking on a link with the "smooth-scroll" class
  document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target element's ID from the href attribute
      const targetId = this.getAttribute('href');

      // Use the target ID to find the actual target element
      const target = document.querySelector(targetId);

      if (target) {
        // Calculate the distance from the top of the page to the target element
        const offsetTop = target.offsetTop;

        // Use the scrollIntoView API with behavior: 'smooth' for smooth scrolling
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


// Contact Me Section - Using EmailJS
function SendMail(){
	var params = {
		from_name: document.getElementById("fullName").value,
		email_id: document.getElementById("email_id").value,
		message: document.getElementById("message").value
	}
	emailjs.send("service_qhsyliz", "template_2slgutd", params).then(function (res) {
		alert("Email sent! - " + "ResStat: " + res.status);
	})
}