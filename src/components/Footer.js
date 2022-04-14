const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container footer-container">
                <div className="row">
                    <div className="col-lg-8 col-xs-8">
                        <img src={window.location.origin+"/images/18playEN.jpg"} alt="18+ Play responsible"/>
                    </div>
                    <div className="col-lg-4 col-xs-4">
                        <img src={window.location.origin+"/images/gambling-therapy.jpg"} alt="Gambling Therapy"/>
                    </div>
                </div>
            </div>

        </footer>
    )

}

export default Footer;
