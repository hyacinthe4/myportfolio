// Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('#mobile-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Animate skill bars when scrolling to them
        const skillSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const animateSkills = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('style').split('width: ')[1].split(';')[0];
                    });
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(animateSkills, {
            threshold: 0.2
        });
        
        observer.observe(skillSection);
        
        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-4');
                backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        document.addEventListener('DOMContentLoaded', function () {
          new Swiper('.certificates-swiper', {
            loop: true,
            autoplay: { delay: 2500, disableOnInteraction: false },
            slidesPerView: 1,
            spaceBetween: 24,
          });
        
          new Swiper('.diplomas-swiper', {
            loop: true,
            autoplay: { delay: 2500, disableOnInteraction: false },
            slidesPerView: 1,
            spaceBetween: 24,
          });
        });
