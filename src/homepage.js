import { clearPageContent } from './index';
import { createMenuPage } from './menu';

const createHomePage = (function() {
    let _content = document.getElementById('content');


    const setBackgroundImage = () => {
        let backgroundContainer = document.createElement('div');
        backgroundContainer.className = 'homepage-background';
        _content.appendChild(backgroundContainer);
    }



    const populatePageContent = () => {
        clearPageContent();
        let pageContent = document.querySelector('.pageContent');

        let homePageContent = document.createElement('div');
        homePageContent.innerHTML = 'Fake Restaurant';
        homePageContent.className = 'homepage-content';

        let homePageContentSubtitle = document.createElement('div');
        homePageContentSubtitle.innerHTML = "It's simply not real - Guy Fieri";
        homePageContentSubtitle.className = 'home-sub';

        let menuButtonArea = document.createElement('div');

        let menuButton = document.createElement('button');
        menuButton.innerHTML = 'See Menu';
        menuButton.className = 'menu-button';
        menuButton.addEventListener('click', createMenuPage.populateMenuContent);


        menuButtonArea.appendChild(menuButton);
        homePageContentSubtitle.appendChild(menuButtonArea);
        homePageContent.appendChild(homePageContentSubtitle);
        pageContent.appendChild(homePageContent);
    }


    return {setBackgroundImage, populatePageContent };

})();

export { createHomePage };