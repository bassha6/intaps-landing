import Image from "next/image";

function TapFooter (){
    return (
        <footer className="w-full bg-gray-100  bottom-0">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 text-3xl capitalize font-bold">
            <Image src="/logo.svg" width={150} height={150} alt="Company Logo" />
          </div>
            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
              {/* Column 1 */}
              <div className="block">
                <h4 className="text-xl text-gray-800 font-bold mb-7">Company</h4>
                <ul className="text-lg transition-all duration-500">
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Review</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Investor Relation</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="block">
                <h4 className="text-xl text-gray-800 font-bold mb-7">Service</h4>
                <ul className="text-lg transition-all duration-500">
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Renewable Energy Solutions</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Eco-Friendly Manufacturing</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Environmental Consulting Service</a></li>

                </ul>
              </div>

              {/* Column 3 */}
              <div className="block">
                <h4 className="text-xl text-gray-800 font-bold mb-7">Resources</h4>
                <ul className="text-lg transition-all duration-500">
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Case Study</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">White Paper</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                </ul>
              </div>
    
              {/* Column 4 */}
              <div className="block">
                <h4 className="text-xl text-gray-800 font-bold mb-7">Legal</h4>
                <ul className="text-lg transition-all duration-500">
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-400 hover:text-white">Assecciblity</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                </ul>
              </div>
            </div>
    
            {/* Footer Bottom */}
            <div className="py-7 border-t border-gray-700">
              <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} InTaps Software. All rights reserved.
                </p>

                <div className="flex justify-between text-gray-400">
                    <div className="mx-4"><a href="www.facebook.com">facebook</a></div>
                    <div className="mx-4"><a href="www.Linkedin.com">Linkedin</a></div>
                    <div className="mx-4"><a href="www.twitter.com">Twitter</a></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default TapFooter;