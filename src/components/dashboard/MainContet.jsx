import "../../asset/css/dashboard.css";
function MainContent() {
    return (
        <div className="main-contnet"> 
        <div className="vr-setting">
            <div className="col-sm-12 pacman col-md-12 col-12 box box-1 d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <div>
                        <img className="pacman-icon" src={require('../../asset/images/packman.png')}></img>
                    </div>
                    <div className="packman-deatis">
                       <span>All Users</span>
                       <p className="pill-shape"> 246</p>
                    </div>
                </div>
            </div>
            <div className=" col-sm-12  col-md-12 col-12 box box-2 d-flex flex-row justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
                    <div>
                        <img className="pacman-icon" src={require('../../asset/images/packman.png')}></img>
                    </div>
                    <div className="packman-deatis">
                       <span>All Users</span>
                       <p className="pill-shape"> 246</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12  col-md-12 col-12 box box-3 d-flex flex-row justify-content-center align-items-center">
            <div className="d-flex justify-content-center">
                    <div>
                        <img className="pacman-icon" src={require('../../asset/images/packman.png')}></img>
                    </div>
                    <div className="packman-deatis">
                       <span>All Users</span>
                       <p className="pill-shape"> 246</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box-graph d-flex justify-content-start">
            <img className="graph-size" src={require('../../asset/images/graph.png')} alt="graph"></img>
        </div>
        </div>

     );
}

export default MainContent;