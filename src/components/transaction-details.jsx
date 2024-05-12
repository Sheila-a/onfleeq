/* eslint-disable react/prop-types */
const TransactionDetails = ({ img, title, price, time }) => {
  return (
    <div className='flex justify-between  items-center'>
      <div className='flex justify-between gap-5'>
        <img src={img} alt={title} className='w-12 h-12' />
        <div>
          <h3 className='text-[#000013db] font-[500]'>{title}</h3>
          <p className='text-sm text-[#c5bcd5]'>{time}</p>
        </div>
      </div>
      <div>
        <p className='text-[#000013b5] font-[500]'>{price}</p>
      </div>
    </div>
  );
};

export default TransactionDetails;
