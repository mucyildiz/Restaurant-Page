import { createHomePage } from './homepage';


const createPageContent = () => {
    let content = document.querySelector('#content');
    let pageContent = document.createElement('div');
    pageContent.className = 'pageContent';
    content.appendChild(pageContent);
}

export { createPageContent };

createHomePage.setBackgroundImage();
createHomePage.createHeader();
createPageContent();
createHomePage.populatePageContent();