import Image from 'next/image'

export default function HeroSection () {

    const currentIndex = 0;

    const imgArr = [
        {
            img: "/pale.jpeg",
            title: "Industry"
        }
    ]

    return(
        <>
        <section>

                <div className="h-[646px] w-full relative">
                    <Image draggable="false" src={imgArr[0].img} className='w-full h-[646px] object-cover object-center' width={1920} height={646} alt='hero img' quality={100} loading='lazy' />
                    <div className='absolute gap-8 inset-[50%] flex-col translate-x-[-50%] translate-y-[-50%] w-[200px] h-10 flex items-center justify-center text-center'>
                    <h1 className='text-3xl tracking-[15px] drop-shadow-md md:text-5xl md:tracking-[25px] font-bold uppercase text-white'>{imgArr[0].title}</h1>
                    <button className=' text-slate-600 hover:scale-110 drop-shadow-md py-3 px-8 font-semibold text-lg rounded-full transition-all duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 hover:text-teal-300'>Esplora</button>
                    </div> 
                </div>
        </section>
        </>
    )
}