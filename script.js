document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            console.log('Hamburger menu clicked'); // Debugging line
            nav.classList.toggle('active');
        });
    }
    if(close){
    	close.addEventListener('click', () => {
    		console.log('close menu clicked');
    		nav.classList.remove('active');
    	});
    }
});
