import { createHomePage } from './homepage';
import { createAboutPage } from './about';
import { createContactPage } from './contact';
import { createMenuPage } from './menu';




const createPageContent = () => {
    let content = document.querySelector('#content');
    let pageContent = document.createElement('div');
    pageContent.className = 'pageContent';
    content.appendChild(pageContent);
}

const createHeader = (function() {
    let _content = document.querySelector('#content');

    const populateHeader = () => {
        let header = document.createElement('div');
        header.className = 'header';

        //created title and headerContents because adding margins to header created scrollbars
        let title = document.createElement('div');
        title.innerHTML = 'Fake Restaurant';
        title.className = 'title';

        let headerContents = document.createElement('div');
        headerContents.className = 'headerContent';
        let home = _createTab('HOME')[0];
        let menu = _createTab('MENU')[0];
        let contact = _createTab('CONTACT US')[0];
        let about = _createTab('ABOUT')[0];
        let tabs = [home, menu, contact, about];
        for(let tab of tabs){
            tab.className = 'tab';
            tab.addEventListener('click', _tabFunctionality[tab.innerHTML]);
            headerContents.appendChild(tab);
        }

        header.appendChild(title);
        header.appendChild(headerContents);
        _content.appendChild(header);
}

    const _createTab = (tabName) => {
        let tab = document.createElement('div');
        tab.innerHTML = tabName;
        return [tab, tabName];
}

    const _tabFunctionality = {
        'HOME': createHomePage.populatePageContent,
        'MENU': createMenuPage.populateMenuContent,
        'CONTACT US': createContactPage.populateContactContent,
        'ABOUT': createAboutPage.populateAboutContent,
    }



    return {populateHeader};
})();

const clearPageContent = () => {
    let pageContent = document.querySelector('.pageContent');
    pageContent.innerHTML = '';
}

export { clearPageContent };



createHomePage.setBackgroundImage();
createPageContent();
createHeader.populateHeader();
createHomePage.populatePageContent();