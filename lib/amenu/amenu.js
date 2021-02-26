(() => {

  const init = (menu, menuList, itemsMenu, burgerMenu) => {
    itemsMenu.forEach(elem => {
      elem.classList.add('amenu__item');
    });

    burgerMenu.classList.add('amenu__burger');

    createBurgerMenu(burgerMenu);
  };

  const createBurgerMenu = (parentBurger) => {
    const burgerBtn = document.createElement('button');
    parentBurger.append(burgerBtn);
    burgerBtn.classList.add('amenu__burger-btn');

    const burgerList = document.createElement('ul');
    parentBurger.append(burgerList);
    burgerList.classList.add('amenu__burger-list');
  }

  window.amenu = (selectorMenu, selectorMenuList, selectorItemsMenu, selectorBurder) => {
    const menu = document.querySelector(selectorMenu),
          menuList = document.querySelector(selectorMenuList),
          itemsMenu = document.querySelectorAll(selectorItemsMenu),
          burgerMenu = document.querySelector(selectorBurder);
    
    init(menu, menuList, itemsMenu, burgerMenu);      
  };

})()