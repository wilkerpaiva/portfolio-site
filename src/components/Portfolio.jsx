import React from 'react'


function Portfolio(props) {
    const data = props.dataPortfolio
    console.log(data.img)

  return (
    <section className='flex justify-center my-5 px-5'>
        <div style={{backgroundImage: `url(${data.img})`, backgroundPosition: `${data.title === "NETFLIX CLONE" && "top"}`}} className={`w-[60rem] sm:w-[60rem] md:w-[60rem] lg:w-[110rem]  h-[33.9rem] rounded-[50px] bg-no-repeat bg-center bg-cover transition ease-linear`}>
            <div className=' flex flex-row-reverse pr-5 bg-black/80 rounded-[50px]'>
                <div className='flex flex-col justify-center h-[542px] items-end pr-10 xsm:pr-0 xxsm:pr-0'>
                    <span className='font-["rubik"] text-[12px] text-gray text-right font-medium'>{data.role}</span>
                    <h3 className=' text-white font-["rubik"] text-[50px] xsm:text-right xsm:text-[24px] xxsm:text-[24px] xxsm:text-right'>{data.title}</h3>
                    <span className='font-["Lato"] text-[14px] text-white w-[274px] text-right py-4'>
                        {data.description}
                    </span>
                    <span className='mt-4'><a href="" className='border-solid border-2 p-3 border-white hover:bg-white text-white font-thin text-[12px] hover:text-black transition ease-linear'>{data.role === "FRONTEND DEVELOPER" ? "GITHUB" : "BEHANCE"}</a></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio