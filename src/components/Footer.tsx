export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 🔹 Bagian Kiri: Logo + Deskripsi + Copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img
                src="/images/Dekoor.png"
                alt="Dekoor Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="max-w-md text-center md:text-left text-sm leading-relaxed text-gray-600">
              Dekoor is a furniture company created to fulfill the needs of family
              with aesthetic feeling in their furniture. Always pay attention to details
              and give clear communication for the customers. Priority of our design is comfortability.
            </p>
          </div>
          <div className="mt-6 text-center md:text-left text-sm text-gray-500">
            © Copyright 2022 Dekoor
          </div>
        </div>

        {/* 🔹 Bagian Kanan: 3 Kolom Link */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="block pt-2">FAQ</a></li>
              <li><a href="#" className="block pt-2">Shipping & Returns</a></li>
              <li><a href="#" className="block pt-2">Care guide</a></li>
              <li><a href="#" className="block pt-2">Redeem warranty</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Social Media</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="block pt-2">Instagram</a></li>
              <li><a href="#" className="block pt-2">Facebook</a></li>
              <li><a href="#" className="block pt-2">Twitter</a></li>
              <li><a href="#" className="block pt-2">TikTok</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="block pt-2">Our story</a></li>
              <li><a href="#" className="block pt-2">Designer</a></li>
              <li><a href="#" className="block pt-2">Craftmanship</a></li>
              <li><a href="#" className="block pt-2">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
