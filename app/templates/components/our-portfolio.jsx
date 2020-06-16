import React from "react";

class OurPortfolio extends React.Component {
  render() {
    return (
      <section id="our_project">
        <div className="nvt_main_section">
          <div className="nvt_standard">
            <h1>Title</h1>

            <article className="nvt_contain_project">
              <div className="btn_project_top">
                <div className="btn_fil_pro">
                  <a href="*" className="btn_filter filter_active">All</a>
                  <a href=".develop" className="btn_filter">Development</a>
                  <a href=".design" className="btn_filter">Design</a>
                  <a href=".ptshop" className="btn_filter">Photoshop</a>
                </div>
              </div>

              <div className="content_pro_bot">
                <div className="btn_project_top">
                  <div className="nvt_standard_section ptshop design">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope02_420x420.jpg" alt="Our one product" />
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="nvt_standard_section design">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope03_840x420.jpg" alt="Our one product" />
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="nvt_standard_section develop">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope04_420x420.jpg" alt="Our one product" />
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="nvt_standard_section design ptshop">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope05_420x420.jpg" alt="Our one product" />
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="nvt_standard_section ptshop">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope07_840x420.jpg" alt="Our one product"/>
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="nvt_standard_section develop ">
                    <div className="one-our_pro">
                      <div className="img-pro">
                        <img src="img/projects/isotope08_420x420.jpg" alt="Our one product"/>
                      </div>
                      <div className="desc_project">
                        <h4>Business City</h4>
                        <p>Web Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default OurPortfolio;