import Icons from './Icon';
import avatar from '../assets/avatar.png';

const Header = () => {
  return (
    <div className='flex justify-between  gap-4 items-center mb-4'>
      <div className=' w-[43%] md:block hidden'>
        <div className='relative  text-gray-600 rounded-lg  w-n'>
          <input
            type='search'
            name='search'
            placeholder='Search'
            className='bg-ongrey2 h-10 px-5 pl-10 pr-10 rounded-lg w-full text-sm focus:outline-none focus:border focus:border-onblue '
          />
          <button type='submit' className='absolute left-0 top-0 mt-3 ml-4 '>
            <Icons icon='ri:search-line' className='text-ongrey' />
          </button>
        </div>
      </div>
      <div className='md:w-[53%] w-full flex items-center justify-between'>
        <div className='md:flex hidden justify-end gap-8 items-center font-semibold text-slate-600'>
          <h3>Feedback</h3>
          <h3>Contacts</h3>
          <h3>Help</h3>
        </div>
        <div className='md:hidden block'>
          {' '}
          <div className=' relative w-fit'>
            <Icons
              icon='fluent:teardrop-bottom-right-32-filled'
              className='text-[#3326ae] text-[20px]'
            />
            <Icons
              icon='ph:chat-teardrop-duotone'
              hFlip='horizontal'
              className='absolute top-0 left-2 text-[20px] text-[#d7d3ee]'
            />
          </div>
        </div>
        <div className='flex justify-end items-center gap-5'>
          <Icons icon='el:bell' className='text-ongrey' />
          <img src={avatar} className='w-7 h-7' />
        </div>
      </div>
    </div>
  );
};

export default Header;
