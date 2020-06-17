import { clearPageContent, createHeader } from './index';

const createAboutPage = (function() {
    const populateAboutContent = () => {
        let pageContent = document.querySelector('.pageContent');
        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/daan-evers-tKN1WXrzQ3s-unsplash.jpg')`

        clearPageContent();
        createHeader.toggleTab(createHeader.tabs[3]);

        let aboutInfo = document.createElement('div');
        aboutInfo.className = 'aboutInfo';

        let aboutHeader = document.createElement('h2');
        aboutHeader.innerHTML = 'ABOUT';
        aboutHeader.className = 'about-header';
        aboutInfo.appendChild(aboutHeader);

        let aboutContent = document.createElement('p');
        aboutContent.innerHTML = 'Here at Fake Restaurant we have always prided ourselves on nothing because we do not exist. We are not famous for having food \
        but this is only due to the fact that we are not a real restaurant. Had we been an actual restaurant we definitely would have food. But we are not so we do not.'
        aboutContent.className = 'about-content';
        aboutInfo.appendChild(aboutContent);

        pageContent.appendChild(aboutInfo);

    }
    return { populateAboutContent };
})();

export { createAboutPage };