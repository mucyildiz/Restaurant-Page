import { clearPageContent, createHeader } from './index';


const createContactPage = (function() {
    const populateContactContent = () => {
        clearPageContent();
        createHeader.toggleTab(createHeader.tabs[2]);
        
        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg')`

    }
    return { populateContactContent };
})();

export { createContactPage };