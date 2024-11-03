export default function Footer(){
    return(
    
    <footer className="bg-gray-900 text-white py-10 mt-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
        
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-3">About Us</h2>
            <p className="text-sm text-gray-400">
              We are a company dedicated to providing the best service and quality products. Our commitment to excellence drives us to continuously innovate and improve.
            </p>
          </div>

    
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-sm text-gray-400">Email: contact@muheebjamali.com</p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-400">Address: 123 Main St, City, Country</p>
          </div>

    
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
            
                📘
              </span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                📸
              </span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                🐦
              </span>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Made by MJ. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Made with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>

    )
}