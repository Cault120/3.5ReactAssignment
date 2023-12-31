import { useState } from 'react';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

function Product() {
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);
  const [sumTotal, setSumTotal] = useState(0.00);
  const [sumTotalWODisc, setSumTotalWODisc] = useState(0.00);
  const [sumTotalSav, setSumTotalSav] = useState(0.00);
  const [list, setList] = useState([]);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    console.log('handlerAddProduct: name, price, count, discount, total: ', name, price, count, discount);

    const newItem = {
      name: name,
      price: price,
      count: count,
      discount: discount,
      total: count * price * (100 - discount) / 100
    }

    const newList = [...list, newItem];
    console.log('  newList:', newList);
    setList(newList);


    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log('  sumTotal:', sumTotal);
    setSumTotal(sum);

    // Add the item discount to the running listTotal
    const myTotal = sumTotalWODisc + (newItem.price * newItem.count);
    console.log('  sumTotalWODisc:', sumTotalWODisc);
    setSumTotalWODisc(myTotal);
  };

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} noDiscTtl={sumTotalWODisc}/>
    </div>
  );
}
export default Product;
