import {withDataBase} from "./with-data-base-context";
import {dataItemGhost} from "./data-Item-ghost";
import {itemListGhost} from "./item-list-ghost";
const itemComponentWithAll=(View,withRender,ViewRender,dataBase,context)=>{
    return withDataBase(
        dataItemGhost(
            withRender(View, ViewRender)),
        dataBase, context);
}
//View-компонент який обертаемо
//withRender-функція яка додає що відображаемо на єкрані
//ViewRender-компонент який відповідає за відображеня на єкрані
//dataBase-назва функції , яка відповідаеє за отріманя даніх
//context- з якого контексту отрімаємо базу даних
const listComponentWithAll=(View,withRender,ViewRender,dataBase,context)=>{
    return withRender
        (withDataBase(
            itemListGhost(View),
        dataBase,
            context),ViewRender);
}
export {itemComponentWithAll,listComponentWithAll}