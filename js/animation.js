// const animItems = document.querySelectorAll('.anim-item');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItems = animItems[index];
//             const animItemsHeight = animItems.offsetHeight;
//             const animItemsOffset = offset(animItems).top;
//             const animStart = 4;

//             let animItemsPoint = window.innerHeight - animItemsHeight / animStart;
//             if (animItemsHeight > window.innerHeight) {
//                 animItemsPoint = window.innerHeight - window.innerHeight / animStart;  
//             }

//             if ((pageYOffset > animItemsOffset - animItemsPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
//                 animItems.classList.add('_active');
//             } else {
//                 animItems.classList.remove('_active');
//             }
            
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     function animOnScroll();
// }