import { topcarddata } from '../data/top-card';
const TopCard = () => {
  return (
    <div className='grid gap-5 lg:grid-cols-3'>
      {topcarddata.map((item) => (
        <div key={item.id} className='bg-ongrey2 p-3 px-1 pt-1  rounded-3xl'>
          <div className={`rounded-lg p-5  `} style={{ background: item.bg }}>
            <div className='flex gap-5'>
              <img src={item.img} alt={item.title} className='w-12 h-12' />
              <div>
                <h3 className=' uppercase text-[#c5bcd5] text-[12px]'>
                  {item.title}
                </h3>
                <p
                  className='f font-semibold text-lg'
                  style={{ color: item.textc }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCard;
