document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

		document.addEventListener('DOMContentLoaded', function() {
			const swatch = document.getElementById('swatch');
			const teamSection = document.getElementById('team');
			
			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						swatch.classList.add('reverse');
					} else {
						swatch.classList.remove('reverse');
					}
				});
			}, { threshold: 0.1 }); // Adjust threshold as needed
		
			observer.observe(teamSection);
		});
		
     

document.getElementById('contact-us').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const query = document.querySelector('textarea[name="Query"]').value;

    const mailtoLink = `mailto:abc@xyz.com?subject=BlackHeart%20Construction%20inquery%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(query)}%0A%0AFrom:%20${encodeURIComponent(name)}%20<${encodeURIComponent(email)}>`;

    window.location.href = mailtoLink;
});


const carousel = document.querySelector(".carousel");
let carouselItems = document.querySelectorAll(".carousel__item");
let carouselCount = carouselItems.length;
let pos = 0;
let translateX = 0;

// Function to handle sliding
function slide(options) {
  function active(_pos) {
	carouselItems[_pos].classList.add("active");
  }

  function inactive(_pos) {
	carouselItems[_pos].classList.remove("active");
  }

  inactive(options.disable);
  active(options.show);

  document.querySelectorAll(".carousel__item").forEach((item, index) => {
	if (index === options.show) {
	  item.style.transform = `translateX(-${options.translateX}%) scale(1)`;
	} else {
	  item.style.transform = `translateX(-${options.translateX}%) scale(0.9)`;
	}
  });

  return options.show;
}

// Function to move to the next slide
function nextSlide() {
  let calculate = (pos + 1) % carouselCount;
  if (pos >= carouselCount - 1) {
	calculate = 0;
	translateX = 0;
  } else {
	translateX += 100.5;
  }

  pos = slide({
	show: calculate,
	disable: pos,
	translateX: translateX
  });
}

setInterval(nextSlide, 1600);