import { clearPageContent } from './index';

const createAboutPage = (function() {
    const populateAboutContent = () => {
        clearPageContent();
    }
    return { populateAboutContent };
})();

export { createAboutPage };