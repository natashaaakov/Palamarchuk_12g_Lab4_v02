function swapText() {
    // Отримання тексту з обох полів
    let text1 = document.getElementById("text1").value;
    let text2 = document.getElementById("text2").value;

    // Заміна тексту між полями
    document.getElementById("text1").value = text2;
    document.getElementById("text2").value = text1;

    // Підрахунок кількості речень, слів та символів у текстах
    let textInfo1 = document.getElementById("textInfo1");
    let textInfo2 = document.getElementById("textInfo2");

    textInfo1.textContent = countTextInfo(text1);
    textInfo2.textContent = countTextInfo(text2);
}

function countTextInfo(text) {
    // Підрахунок кількості речень, слів та символів у тексті
    let sentences = text.split(/[.!?]+/).filter(Boolean).length; //split розбиває текст на масив рядків, використовуючи регулярний вираз
    //filter виконує фільтрацію масиву, залишаючи тільки елементи, які не є "пустими". У JavaScript, якщо ми передамо функції filter значення Boolean, вона видалить всі "пусті" значення (такі як пусті рядки, null, undefined, 0, false тощо). Це допомагає уникнути врахування порожніх рядків, які можуть з'явитися після розділення тексту.
    //length повертає кількість елементів у масиві, тобто кількість речень у тексті.
    let words = text.match(/\S+/g)?.length || 0; //регулярний вираз \S+ шукає послідовності символів, які не є пробілами (пробіли, табуляція, переноси рядка і т. д.), і g флаг вказує JavaScript на те, що пошук повинен бути глобальним, тобто проводити пошук у всьому тексті.
    //?.length означає, що якщо результат пошуку (результат match) є невизначеним або нульовим (тобто, текст не містить жодного слова), то вираз поверне значення undefined. В цьому випадку, .length не буде викликатися, і результуюче значення буде undefined.
    //|| 0 використовується для того, щоб у випадку, якщо результат match є невизначеним або нульовим, повернути значення 0. Це забезпечує, що навіть якщо немає слів у тексті, повертається число 0.
    let characters = text.length;

    // Формування рядка з результатом
    return `Речень: ${sentences}, Слів: ${words}, Символів: ${characters}`;
}