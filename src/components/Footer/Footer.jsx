import React from "react";
import "./footer.css"
export default function Footer() {
    return (
        <div className="bg-[gray] h-auto">

            <div className="text-midium text-white p-4 pb-0">
                <hr className="footer_hr" />
                <div className="max-w-{100%} m-px pl-2 pr-2">
                    <div className="grid grid-cols-3 gap-4 flex items-center justify-center flex-wrap">
                        <h3>You can visit this site or our Android Environment Setup</h3>
                        <p>This page is still under-going upgrades. Work on bug fixing is still going-on..</p>
                        <div className="footer_ grid grid-cols-2 gap-4">

                            <div>
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href="#">Latest Post</a></li>
                                    <li><a href="#">Subscription</a></li>
                                    <li><a href="#">Join Groups</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="footer_hr" />
                    <p className="copyright">&copy; subhojyotisingha || 2024</p>
                </div>
            </div>
        </div>
    )
}