import { clearPageContent, createHeader } from './index';


const createContactPage = (function() {

    const populateContactContent = () => {
        let pageContent = document.querySelector('.pageContent');
        clearPageContent();
        createHeader.toggleTab(createHeader.tabs[2]);
        
        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg')`

        let contactFormContainer = document.createElement('div');
        contactFormContainer.className = 'form-container';

        let form = _createForm();
        form.className = 'form';

        contactFormContainer.appendChild(form);
        pageContent.appendChild(contactFormContainer);

    }

    const _createForm = () => {
        let form = document.createElement('FORM');

        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.className = 'name';
        nameInput.placeholder = 'Name';

        let emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.className = 'email';
        emailInput.placeholder = 'Email';

        let messageBox = document.createElement('input');
        messageBox.setAttribute('type', 'text');
        messageBox.className = 'message';
        messageBox.placeholder = 'Message';

        let submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.className = 'menu-button';

        form.appendChild(nameInput);
        form.appendChild(emailInput);
        form.appendChild(messageBox);
        form.appendChild(submitButton);

        return form
    }

    return { populateContactContent };
})();

export { createContactPage };