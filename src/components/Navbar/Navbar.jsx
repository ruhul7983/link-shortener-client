import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-gray-500">
            <div className="flex justify-between max-w-6xl mx-auto py-4">
                <div>   
                    <h1>URL Shortener</h1>
                </div>
                <ul className="flex gap-x-4">
                    <Link href={""}><li>Home</li></Link>
                    <Link href={""}><li>QR Maker</li></Link>
                    <Link href={""}><li>Sign up</li></Link>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;