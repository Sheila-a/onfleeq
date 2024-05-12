import TransactionDetails from './transaction-details';
import { transdata } from '../data/transaction';

const Transaction = () => {
  return (
    <div>
      {' '}
      <div className='flex justify-between items-center'>
        <h6 className='font-semibold text-slate-700'>Transaction</h6>
        <div>
          <button className='bg-onred rounded-md text-xl p-1 px-3 text-white'>
            +
          </button>
        </div>
      </div>
      <div className='my-5 grid gap-5 mb-3'>
        {transdata.map((singleton) => (
          <TransactionDetails
            key={singleton.id}
            img={singleton.img}
            time={singleton.time}
            title={singleton.title}
            price={singleton.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Transaction;
