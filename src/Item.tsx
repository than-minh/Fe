import React from "react";
function Item(props:{item: any}){
    const item = props.item;
    return(
        <div className="item">
            <div className="name">{item.name}</div>
            <div className="height">{item.height}</div>
            <div className="mass">{item.mass}</div>
            <div className="skin_color">{item.skin_color}</div>
            <div className="eye_color">{item.eye_color}</div>
            <div className="birth_year">{item.birth_year}</div>
            <div className="gender">{item.gender}</div>
        </div>
    )
}
export default Item;