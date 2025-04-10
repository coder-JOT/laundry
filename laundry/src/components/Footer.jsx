import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white p-10 mt-20">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-1">📞 +91-9809700096</p>
                    <p className="mb-1">📧 laundrybucket@gmail.com</p>
                    <p>📍 2598, near Airport Road, Sector 123, Sahibzada Ajit Singh Nagar, Hasain Pur, Punjab 140301</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Find Us on Map</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13713.707344895249!2d76.65418239474425!3d30.762597586226363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff18912593447%3A0xe81fe782816106bb!2sLaundry%20Bucket%20Dry%20Clean%20%26%20Laundry!5e0!3m2!1sen!2sin!4v1743506934507!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="text-center mt-6 text-gray-400 text-sm">&copy; 2025 Laundry Express. All rights reserved.</div>
        </footer>
    )
}
export default Footer
