import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="qualification__title">Qualification</h2>
        <span className="qualification__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development - Angular</h3>
                            <span className="qualification__subtitle">Robozx PVT LTD</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">June 2023 - Jan 2024</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Advanced Java</h3>
                            <span className="qualification__subtitle">Solitier - Infosys</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development - Angular</h3>
                            <span className="qualification__subtitle">Robozx PVT LTD</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">June 2023 - Jan 2024</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Advanced Java</h3>
                            <span className="qualification__subtitle">Solitier - Infosys</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div>

                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development - Angular</h3>
                            <span className="qualification__subtitle">Robozx PVT LTD</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">June 2023 - Jan 2024</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Advanced Java</h3>
                            <span className="qualification__subtitle">Solitier - Infosys</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
