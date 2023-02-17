const header = document.getElementById('header');

document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener('scroll', () => {
         const scrollTop = self.pageYOffset;

         if(scrollTop > 100) {
            header.classList.add('scroll');
         } else {
            header.classList.remove('scroll');
         }
    })
});