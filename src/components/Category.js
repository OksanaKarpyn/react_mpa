import React from "react";

function Category() {
  return (
    <>
      <h3>Page Category</h3>
      <a href="/category/description">Category Description</a>
      <nav>
        <ul>
          <li>
            <a href="/category/notebook">Ноутбуки</a>
          </li>
          <li>
            <a href="/category/monitor">Мониторы</a>
          </li>
          <li>
            <a href="/category/cellphone">Мобильные телефоны</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Category;
