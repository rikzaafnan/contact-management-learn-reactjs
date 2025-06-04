import { Link, Outlet } from "react-router";

export default function DashboardLayout() {

    // const toggleButton = document.getElementById('toggleSearchForm');
    //         const searchFormContent = document.getElementById('searchFormContent');
    //         const toggleIcon = document.getElementById('toggleSearchIcon');

    //         // Add transition for smooth animation
    //         searchFormContent.style.transition = 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin 0.3s ease-in-out';
    //         searchFormContent.style.overflow = 'hidden';
    //         searchFormContent.style.maxHeight = '0px';
    //         searchFormContent.style.opacity = '0';
    //         searchFormContent.style.marginTop = '0';

    //         toggleButton.addEventListener('click', function() {
    //             if (searchFormContent.style.maxHeight !== '0px') {
    //                 // Hide the form
    //                 searchFormContent.style.maxHeight = '0px';
    //                 searchFormContent.style.opacity = '0';
    //                 searchFormContent.style.marginTop = '0';
    //                 toggleIcon.classList.remove('fa-chevron-up');
    //                 toggleIcon.classList.add('fa-chevron-down');
    //             } else {
    //                 // Show the form
    //                 searchFormContent.style.maxHeight = searchFormContent.scrollHeight + 'px';
    //                 searchFormContent.style.opacity = '1';
    //                 searchFormContent.style.marginTop = '1rem';
    //                 toggleIcon.classList.remove('fa-chevron-down');
    //                 toggleIcon.classList.add('fa-chevron-up');
    //             }
    //         });

    return (
        <>
       <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
        <header className="bg-gradient shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/dashboard/contacts" className="flex items-center hover:opacity-90 transition-opacity duration-200">
                <i className="fas fa-address-book text-white text-2xl mr-3" />
                <div className="text-white font-bold text-xl">Contact Management</div>
            </Link>
            <nav>
                <ul className="flex space-x-6">
                <li>
                    <Link to="/dashboard/users/profile" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                    <i className="fas fa-user-circle mr-2" />
                    <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/users/logout" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                    <i className="fas fa-sign-out-alt mr-2" />
                    <span>Logout</span>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow">
            <Outlet />
            <div className="mt-10 mb-6 text-center text-gray-400 text-sm animate-fade-in">
                <p>© 2025 Contact Management. All rights reserved.</p>
            </div>
        </main>
    </div>

        </>
    )

}
