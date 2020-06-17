import { clearPageContent } from './index';


const createMenuPage = (function() {

    const populateMenuContent = () => {
        clearPageContent();
    }
    return { populateMenuContent };
})();

export { createMenuPage };