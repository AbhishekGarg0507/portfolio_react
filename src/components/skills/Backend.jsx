import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Core Java</h3>
                        <span className="skills__level">basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">intermediate</span>
                    </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">NodeJs</h3>
                        <span className="skills__level">basic</span>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Backend
