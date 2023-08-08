export default function orderByProps(obj, setOrder) {
  const keyObject = Object.keys(obj);
  const notIsSetOrder = keyObject.filter((i) => !(setOrder.includes(i)));
  // notIsSetOrder.sort((a, b) => (a.key > b.key ? 1 : -1));
  notIsSetOrder.sort();
  const generalArray = [...setOrder, ...notIsSetOrder];
  const result = generalArray.map((element) => ({ key: element, value: obj[element] }));
  return result;
}
