export default function orderByProps(obj, setOrder) {
  const propsBySetOrder = [];
  const restData = [];

  for (const key in obj) {
    // Если key будет в объекте (порядке сортировки)
    if (setOrder.includes(key)) {
    // Для соблюдение требуемой сортировки используем индекс элемента в порядке сортировки(setOrder)
      // По key находим индекс в порядке сортировки
      const index = setOrder.indexOf(key);
      // Добавляем элемент в новый массив по индексу (по индексу удаляем 0 элементов и добавляем)
      propsBySetOrder.splice(index, 0, { key, value: obj[key] });
    // Если ключа нет в порядке сортировки - добавляем в отдельный массив
    // Не понял почему не проходят тесты с просто push....
    } else {
      restData.push({ key, value: obj[key] });
    }
  }
  // Сортируем по алфавиту не попавшие в setOrder
  restData.sort((a, b) => (a.key > b.key ? 1 : -1));
  //
  return [...propsBySetOrder, ...restData];
}
