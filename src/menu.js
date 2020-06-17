import { clearPageContent, createHeader } from './index';



const createMenuPage = (function() {


    function _MenuItem(picture_url, name, description, price) {
        this.picture_url = picture_url;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    let burger = new _MenuItem('styles/food-images/burger.jpeg', 'Burger', 'Not gonna lie to you, this is a pretty average burger', '18.95');
    let hotDog = new _MenuItem('styles/food-images/hotdog.jpeg', 'Hot Dog', 'Our intern Richard found this on the sidewalk outside!', '3.95')
    let macAndCheese = new _MenuItem('styles/food-images/macandcheese.jpg', 'Mac and Cheese', 'More like Mac and Please am I right?', '99.95');
    let pizza = new _MenuItem('styles/food-images/pizza.jpeg', 'Pizza', 'This pizza tastes like chalk.', '33.95');
    let gummyBears = new _MenuItem('styles/food-images/gummybears.jpg', 'Gummy Bears', 'This is literally just Haribo Gummy Bears', '0.95');
    let cheese = new _MenuItem('styles/food-images/cheese.jpg', 'American Cheese', 'A single slice of American Cheese.', '87.75');

    let _menuItems = [burger, hotDog, macAndCheese, pizza, gummyBears, cheese];


    const populateMenuContent = () => {
        clearPageContent();
        let pageContent = document.querySelector('.pageContent');
        let menuContainer = document.createElement('div');
        menuContainer.className = 'menu-container';
        let menuTitle = document.createElement('h2');
        menuTitle.innerHTML = 'MENU';
        menuTitle.className = 'menu-title';
        menuContainer.appendChild(menuTitle);
        createHeader.toggleTab(createHeader.tabs[1]);

        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/cloris-ying-1Qt-W4BGrgc-unsplash.jpg')`

        for(let menuItem of _menuItems){
            let item = document.createElement('div');
            item.className = 'menu-cell';

            let foodInfo = document.createElement('div');
            foodInfo.className = 'food-info';

            let foodName = document.createElement('h3');
            foodName.className = 'food-name';
            foodName.innerHTML = menuItem.name;

            let foodDescription = document.createElement('p');
            foodDescription.className = 'food-description';
            foodDescription.innerHTML = menuItem.description;

            let foodPrice = document.createElement('div');
            foodPrice.className = 'food-price';
            foodPrice.innerHTML = '$' + menuItem.price;


            let img = document.createElement('IMG');
            img.className = 'food-img';
            img.src = menuItem.picture_url;

            foodInfo.appendChild(foodName);
            foodInfo.appendChild(foodDescription);
            foodInfo.appendChild(foodPrice);
            item.appendChild(foodInfo);

            item.appendChild(img);

            menuContainer.appendChild(item);
        }
        pageContent.appendChild(menuContainer);
    }



    return { populateMenuContent };
})();

export { createMenuPage };