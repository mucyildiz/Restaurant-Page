import { clearPageContent, createHeader } from './index';



const createMenuPage = (function() {

    const populateMenuContent = () => {
        clearPageContent();
        createHeader.toggleTab(createHeader.tabs[1]);

        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/cloris-ying-1Qt-W4BGrgc-unsplash.jpg')`
    }
    return { populateMenuContent };
})();

export { createMenuPage };