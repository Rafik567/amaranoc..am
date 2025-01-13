import React from 'react'
import '../Body/filter.css';
const BodyAll = () => {
    return (
        <>

            <div>
                <div className='post'>
                    <div className="filter-container">

                        <div className="filter-group max-h-[200px] overflow-y-auto  p-2">
                            <b className='text-[20px]'>Տարածաշրջան</b>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Դիլիջան 74</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ծաղկաձոր 49</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Երևան 13</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ձորաղբյուր 13</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Արզնի 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ջրվեժ 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Աշտարակ 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Նոր Հաճն 8</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Աբովյան 7</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Պտղնի 6</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Սևան 6</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Քասախ 5</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Զովունի 5</span>
                            </div>

                        </div>
                        <hr />

                        <div className="filter-group">
                                <div className='flex gap-[120px]'>
                                    <b className='text-[20px]' >Արժեք</b>
                                    <div className='flex gap-[10px]'>
                                        <img src='https://www.shutterstock.com/image-vector/armenian-dram-coin-monochrome-black-600nw-1675046068.jpg' className='w-[40px]' />
                                        <img className='w-[30px]' src='data:image/png;base64,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' />
                                        <img className='w-[40px]' src='data:image/jpeg;base64,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' />
                                        <img className='w-[40px]' src="data:image/png;base64,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" />
                                    </div>
                                </div>
                                <div className="price-range mt-[20px]">
                                    <input type="number" placeholder="Սկսած" />
                                    <span>-</span>
                                    <input type="number" placeholder="Մինչև" />
                                </div>
                        </div>
                        <hr/>

                        <div className="filter-group">
                            <b className='text-[20px]'>Մարդկանց թույլատրելի քանակ</b>
                            <div className='flex mt-[10px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>-</button>
                                <input type='number' className='w-[100px] text ' placeholder='         1'/>
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Գնի սահման</label>
                            <div className="price-range">
                                <input type="number" placeholder="Մին" />
                                <span>-</span>
                                <input type="number" placeholder="Մաքս" />
                            </div>
                        </div>
                        <button className="search-button">Որոնել</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BodyAll