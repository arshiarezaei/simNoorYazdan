import React from 'react'
import ImageWrapper from '../ImageWrapper'

import Botton from '../Button/Button'

function Slider({ img, title, btnTitle }) {
    return (
        <div>
            <div className='card'>
                <ImageWrapper iconName={img} className='card-img-top' />
                {/* style={{ marginTop: '100px' }} */}
                <div className='card-img-overlay container ' >
                    <h1 className='text-center' style={{ color: 'white' }}><span style={{ background: '#ffc001', padding: '0px 10px' }}>{title}</span></h1>
                    <div style={{ marginTop: '30px' }}>
                        <Botton title={btnTitle} classes='d-flex justify-content-center' />
                    </div>
                </div>
            </div>
            <style jsx>{`
                
            `}
            </style>
        </div >
    )
}

export default Slider