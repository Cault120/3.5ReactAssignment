import styles from "./ViewList.module.css";

function ViewList({ list, sum, noDiscTtl }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Discount</th>
            <th>Total Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.discount}</td>
              <td>${item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        Total discounted sum: $<span className={styles.sum}>{sum.toFixed(2)}</span>
      </div>
      {/* Create a new div to show the total sum/ total discount/total savings */}
      <div className={styles.containerSum}>
        Total non-discounted sum: $<span className={styles.sum}>{noDiscTtl.toFixed(2)}</span>
      </div>
      {/* Create a new div to show the total sum/ total discount/total savings */}
      <div className={styles.containerSum}>
        Total Savings: $<span className={styles.sum}>{(noDiscTtl-sum).toFixed(2)}</span>
      </div>
    </div>
  );
}
export default ViewList;
