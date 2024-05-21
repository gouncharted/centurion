<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Swiper initialization
    const swiper = new Swiper(".main", {
      direction: "horizontal",
      loop: true,
      pagination: { el: ".swiper-pagination" },
      navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
      scrollbar: { el: ".swiper-scrollbar" },
    });

    // Split text for each div
    document.querySelectorAll(".showcase_heading").forEach(function (element) {
      new SplitType(element, {
        types: "words, chars",
        tagName: "span",
      });

      // GSAP animation with ScrollTrigger for each div
      gsap.from(element.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 0,
        duration: 0.1,
        ease: "power1.out",
        stagger: { each: 0.05, from: "start" },
      });
    });

    // Trigger for '.animate-text' elements
    gsap.utils.toArray(".animate-text").forEach(function (element) {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        markers: false,
        onEnter: function () {
          element.classList.add("animate");
        },
      });
    });

const card = document.querySelector(".process");
    if (card) {
        let masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 60%",
                toggleActions: "play none none none",
                markers: false // Remove in production
            },
            onComplete: () => triggerHighlightAnimation() // Callback to trigger highlight animation
        });

        const typewriters = card.querySelectorAll(".typewriter");
        typewriters.forEach((typewriter, index) => {
            new SplitType(typewriter, {
                types: "words, chars",
                tagName: "span"
            });

            const chars = typewriter.querySelectorAll('.char');
            masterTimeline.from(chars, {
                opacity: 0,
                duration: 0.05,
                ease: "power1.out",
                stagger: { each: 0.01, from: "start" },
            }, '+=0.1');
        }); // Ensure closing brackets for forEach are correctly placed
    } // Close the if statement checking for 'card'

    function triggerHighlightAnimation() {
        const siteHighlights = document.querySelectorAll('.site-highlight');
        siteHighlights.forEach((highlight, index) => {
            highlight.classList.add('highlight-row');
            gsap.fromTo(highlight, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out"
            });
        }); // Ensure each forEach loop is correctly closed
    } // Close the triggerHighlightAnimation function definition

    // Animation for '.line' elements
    gsap.utils.toArray(".line").forEach(function (element) {
      gsap.fromTo(
        element,
        { width: "0%" },
        {
          width: "100%",
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            markers: false,
            toggleActions: "play none none none",
          },
        }
      );
    });
  });  // This closing brace corresponds to the event listener
</script>
