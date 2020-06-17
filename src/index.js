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
    //so we can access the tabs from other modules
    let tabs = [];

    const populateHeader = () => {
        let header = document.createElement('div');
        header.className = 'header';

        //created title and headerContents because adding margins to header created scrollbars
        let title = document.createElement('div');
        title.innerHTML = 'Fake Restaurant';
        title.className = 'title';

        let headerContents = document.createElement('div');
        headerContents.className = 'headerContent';

        let home = _createTab('HOME');
        tabs.push(home);
        let menu = _createTab('MENU');
        tabs.push(menu);
        let contact = _createTab('CONTACT');
        tabs.push(contact);
        let about = _createTab('ABOUT');
        tabs.push(about);

        for(let tab of tabs){
            tab.className = 'tab ' + tab.innerHTML.toLowerCase();
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
        return tab;
}

    const _tabFunctionality = {
        'HOME': createHomePage.populatePageContent,
        'MENU': createMenuPage.populateMenuContent,
        'CONTACT': createContactPage.populateContactContent,
        'ABOUT': createAboutPage.populateAboutContent,
    }

    const toggleTab = (activeTab) => {
        for(let tab of tabs){
            if(tab === activeTab){
                tab.style.fontWeight = '900';
            }
            else{
                tab.style.fontWeight = 'normal';
            }
        }
    }




    return {populateHeader, tabs, toggleTab};
})();

const clearPageContent = () => {
    let pageContent = document.querySelector('.pageContent');
    pageContent.innerHTML = '';
}

export { clearPageContent, createHeader };



createHomePage.setBackgroundImage();
createPageContent();
createHeader.populateHeader();
createHomePage.populatePageContent();