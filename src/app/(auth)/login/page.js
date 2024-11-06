import { TopHeader } from "../../../components/layout/TopHeader";
import { Header } from "../../../components/layout/Header";
import {Footer} from "../../../components/layout/Footer"

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <TopHeader />
        <Header />
        {/* Main Content */}
        <main className="flex-grow grid grid-cols-2 gap-32 max-w-7xl mx-auto py-24 px-12">
            {/* Left Side - Image */}
            <div className="bg-[#C1DBE3]">
                <img src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730886234/gtcy2jdumxibkle3tao4.png" alt="Shopping Cart with Phone" className="w-full h-full object-cover" />
            </div>

            {/* Right Side - Login Form */}
            <div className="flex flex-col justify-center max-w-md">
                <h2 className="text-4xl font-bold mb-4">Log in to Exclusive</h2>
                <p className="text-gray-600 mb-8">Enter your details below</p>

                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                    />

                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-[#DB4444] text-white px-8 py-2 rounded"
                        >
                            Log in
                        </button>
                        <a href="/forgot-password" className="text-[#DB4444]">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </main>
        <Footer />
    </div>
    );
};

export default LoginPage;