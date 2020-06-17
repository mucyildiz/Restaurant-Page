import { clearPageContent, createHeader } from './index';



const createMenuPage = (function() {

    function _MenuItem(picture, name, description, price) {
        this.picture = picture;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    let burger = new _MenuItem(`url('styles/food-images/burger.jpeg')`, 'Burger', 'Not gonna lie to you, this is a pretty average burger', '18.95');
    let hotDog = new _MenuItem(`url('styles/food-images/hotdog.jpeg')`, 'Hot Dog', 'Our intern Richard found this on the sidewalk outside!', '3.95')
    let macAndCheese = new _MenuItem(`url('styles/food-images/macandcheese.jpg')`, 'Mac and Cheese', 'More like Mac and Please am I right?', '99.95');
    let pizza = new _MenuItem(`url('styles/food-images/pizza.jpeg')`, 'Pizza', 'This pizza tastes like chalk.', '33.95');
    let gummyBears = new _MenuItem(`url('styles/food-images/gummybears.jpg')`, 'Gummy Bears', 'This is literally just Haribo Gummy Bears', '0.95');
    let cheese = new _MenuItem(`url('styles/food-images/cheese.jpg')`, 'American Cheese', 'A single slice of American Cheese.', '87.75');

    let _menuItems = [burger, hotDog, macAndCheese, pizza, gummyBears, cheese];


    const populateMenuContent = () => {
        clearPageContent();
        createHeader.toggleTab(createHeader.tabs[1]);

        let background = document.querySelector('.homepage-background');
        background.style.backgroundImage = `url('styles/images/cloris-ying-1Qt-W4BGrgc-unsplash.jpg')`

        for(menuItem of _menuItems){
            let item = document.createElement('div');
            item.className = 'menu-cell';
            
        }
    }



    return { populateMenuContent };
})();

export { createMenuPage };