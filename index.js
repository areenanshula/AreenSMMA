const scrollTopBtn = document.getElementById("scrollTopBtn");
        
        window.onscroll = function() {
            if (document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.remove("d-none");
            } else {
                scrollTopBtn.classList.add("d-none");
            }
        };
        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }



  document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".card");

      function showCardsOnScroll() {
          cards.forEach(card => {
              const cardPosition = card.getBoundingClientRect().top;
              const screenPosition = window.innerHeight / 1.2;

              if (cardPosition < screenPosition) {
                  card.classList.add("show");
              }
          });
      }

      window.addEventListener("scroll", showCardsOnScroll);
      showCardsOnScroll(); 
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".form-con");

    function showCardsOnScroll() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (cardPosition < screenPosition) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showCardsOnScroll);
    showCardsOnScroll(); 
});