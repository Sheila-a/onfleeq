import { lily, video, star, time } from '../assets';
import Icons from './Icon';
const ConnectCard = () => {
  return (
    <div className='bg-ongrey2  p-2 px-[3px] pt-[0px] rounded-2xl '>
      <div className='p-5 bg-white rounded-xl'>
        <div className='flex gap-3 mb-4'>
          <img src={lily} className='w-11 h-11' />
          <div>
            <h3 className='text-[#000013db] font-[500]'>Lily Donovan</h3>
            <p className='text-sm text-[#c5bcd5]'>Business trainer</p>
          </div>
        </div>
        <h3 className='text-[#000013db] font-[500]'>
          How to properly manage your personal budget?
        </h3>
        <div className='flex items-center gap-5 mt-5'>
          <div className='flex items-center gap-1'>
            <img src={video} className='w-5 h-5' />
            <h3>Video</h3>
          </div>
          <div className='flex items-center gap-1'>
            <img src={time} className='w-6 h-5' />
            <h3>15 mins</h3>
          </div>
          <div className='flex items-center gap-1'>
            <img src={star} className='w-6 h-5' />
            <h3>12 likes</h3>
          </div>
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <p className='text-[#000013db] font-[500]'>5 days ago</p>
          <button className='text-sm flex items-center gap-3 rounded-full bg-onblue text-white px-4 py-2 border border-onblue hover:bg-white hover:text-onblue transi duration-100'>
            Connect{' '}
            <span>
              <Icons icon='system-uicons:chevron-right' width={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
