import Image from 'next/image';
import Link from 'next/link';

const Card = ({ show: { Title, Poster, imdbID } }) => {
  return (
    <Link href='/show'>
      <div className='flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer'>
        <div className='flex-shrink-0'>
          <Image
            width={300}
            height={420}
            layout='responsive'
            className='object-cover w-full h-48'
            src={Poster}
            alt={Title}
          />
        </div>
        <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
          <div className='flex-1'>
            <div className='block '>
              <p className='text-xl font-semibold text-gray-900'>{Title}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
