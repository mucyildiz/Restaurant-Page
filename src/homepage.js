import { createHeader } from './index';

const createHomePage = (function() {
    let _content = document.getElementById('content');

    const setBackgroundImage = () => {
        let backgroundContainer = document.createElement('div');
        backgroundContainer.className = 'homepage-background';
        _content.appendChild(backgroundContainer);
    }

    const createHeader = () => {
    
        let header = document.createElement('div');
        header.className = 'header';
    
        //created title and headerContents because adding margins to header created scrollbars
        let title = document.createElement('div');
        title.innerHTML = 'Fake Restaurant';
        title.className = 'title';
    
        let headerContents = document.createElement('div');
        headerContents.className = 'headerContent';
        let home = _createTab('HOME');
        let menu = _createTab('MENU');
        let contact = _createTab('CONTACT');
        let about = _createTab('ABOUT');
        let tabs = [home, menu, contact, about];
        for(let tab of tabs){
            tab.className = 'tab';
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

    const createCenterTitle = () => {

    }

    return {setBackgroundImage, createHeader};

})();

export { createHomePage, createHeader };