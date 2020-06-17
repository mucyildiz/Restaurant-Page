import { clearPageContent } from './index';

const createMenuPage = (function() {
    const populateMenuContent = () => {
        console.log('wr');
        clearPageContent();
    }
    return { populateMenuContent };
})();

export { createMenuPage };