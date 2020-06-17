import { clearPageContent } from './index';


const createContactPage = (function() {
    const populateContactContent = () => {
        clearPageContent();
    }
    return { populateContactContent };
})();

export { createContactPage };