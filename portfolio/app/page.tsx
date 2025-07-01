import Image from "next/image";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode, FaTools, FaLanguage } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-8 py-8">
          <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Ảnh đại diện</span>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">Nguyễn Tấn Đạt</h1>
            <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-2">Lập Trình Viên Full-stack</h2>
            <p className="mt-4 max-w-2xl">
              Lập trình viên với 4 năm kinh nghiệm trong phát triển ứng dụng web. Đam mê tạo ra các giải pháp sáng tạo 
              và hiệu quả bằng công nghệ. Luôn học hỏi và cập nhật các xu hướng công nghệ mới nhất.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a href="mailto:nguyenvana@example.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaEnvelope /> nhuyentandat@gmail.comcom
              </a>
              <a href="tel:+84123456789" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaPhone /> 0377815432
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaMapMarkerAlt /> Quận 12 , Thành Phố Hồ Chí Minh 
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            {/* Kinh nghiệm làm việc */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
                <h2 className="text-2xl font-bold">Kinh nghiệm làm việc</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-xl font-semibold">Công ty Công nghệ ABC</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">06/2020 - Hiện tại</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">InterInter Full-stack Developer</p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>Phát triển và duy trì các ứng dụng web bằng React, Next.js và Node.js</li>
                    <li>Thiết kế kiến trúc hệ thống và API cho các sản phẩm mới</li>
                    <li>Hướng dẫn và đào tạo các thành viên mới trong nhóm</li>
                    <li>Tối ưu hóa hiệu suất ứng dụng, giảm thời gian tải trang 40%</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-xl font-semibold">Công ty Phần mềm XYZ</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">03/2018 - 05/2020</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Frontend Developer</p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>Phát triển giao diện người dùng cho các ứng dụng doanh nghiệp</li>
                    <li>Xây dựng component library sử dụng React và TypeScript</li>
                    <li>Triển khai kiểm thử tự động với Jest và React Testing Library</li>
                    <li>Cải thiện trải nghiệm người dùng thông qua nghiên cứu UX</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Dự án cá nhân */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
                <h2 className="text-2xl font-bold">Dự án cá nhân</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">website spotify clone </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">React, Node.js, MySQLySQL</p>
                  <p className="mt-2">website có thể nghe nhạc phát nhạc cũng như giả lập thanh toán primium .</p>
                  <a href="#" className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">Xem dự án →</a>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">Trang SSocial Media </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">React, Node.js, MySQLySQL</p>
                  <p className="mt-2">website hướng theo tính năng của facebook</p>
                  <a href="#" className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">Xem dự án →</a>
                </div>
              </div>
            </section>
          </div>
          
          <div>
            {/* Học vấn */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-xl" />
                <h2 className="text-2xl font-bold">Học vấn</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Đại học Sài Gòn </h3>
                  <p className="text-blue-600 dark:text-blue-400">Kỹ sư Công nghệ Thông tin</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2025

                  </p>
                  <p className="mt-1">GPA: 2.9/4.0</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Chứng chỉ tiếng anh </h3>
                  <p className="text-blue-600 dark:text-blue-400">Amazon Web Services</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                </div>
              </div>
            </section>
            
            {/* Kỹ năng */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FaTools className="text-blue-600 dark:text-blue-400 text-xl" />
                <h2 className="text-2xl font-bold">Kỹ năng</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Ngôn ngữ lập trình</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Java</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Redux</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">diango
                      
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">Spring boot </span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Ngôn ngữ */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mt-8">
              <div className="flex items-center gap-3 mb-4">
                <FaLanguage className="text-blue-600 dark:text-blue-400 text-xl" />
                <h2 className="text-2xl font-bold">Ngôn ngữ</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Tiếng Việt</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bản ngữ</p>
                </div>
                
                <div>
                  <p className="font-medium">Tiếng Anh</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">VStep 6.0, giao tiếp thành thạo</p>
                </div>
              </div>
            </section>
            
            {/* Sở thích */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mt-8">
              <h2 className="text-2xl font-bold mb-4">Sở thích</h2>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Chơi game </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Tập gym

                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Chơi bóng đá</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Du lịch</span>
              </div>
            </section>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          <p>© 20244 Nguyễn Tấn Đạt. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">CV được thiết kế với ❤️ bằng Next.js và Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}