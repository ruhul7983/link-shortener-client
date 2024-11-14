"use client";

import axios from "axios";
import { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Import the copy icon from react-icons
import Text from "./Text";

const Hero = () => {
    const [shortLink, setShortLink] = useState("");
    const [copySuccess, setCopySuccess] = useState(""); // For feedback after copying

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const originalLink = e.target.originalLink.value;
        const data = { originalLink };

        axios
            .post("https://shortly-li.vercel.app/redirect", data)
            .then((res) => {
                setShortLink(res.data); // Set the short link
                form.reset(); // Reset the form
            })
            .catch((err) => {
                console.log("Error occurred while generating short link", err);
            });
    };

    const handleCopy = () => {
        navigator.clipboard
            .writeText(shortLink) // Copy the short link to the clipboard
            .then(() => {
                setCopySuccess("Link copied to clipboard!");
                setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
            })
            .catch((err) => {
                setCopySuccess("Failed to copy!");
            });
    };

    return (
        <div className="min-h-[80vh] ">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-center py-5">Link Shortener</h1>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="text"
                        name="originalLink"
                        className="py-2 px-1 text-black"
                        placeholder="Enter your link"
                    />
                    <button className="px-4 py-2 bg-gray-500">Convert Link</button>
                </form>

                <div className="text-center py-4">
                    {shortLink && (
                        <>
                            <div className="flex justify-center items-center space-x-2">
                                
                                <span>{shortLink}</span>
                                <FiCopy
                                    onClick={handleCopy}
                                    className="text-xl cursor-pointer text-gray-500"
                                />
                            </div>
                            {copySuccess && (
                                <p className="text-green-500 mt-2">{copySuccess}</p>
                            )}
                        </>
                    )}
                </div>
                <Text></Text>
            </div>
        </div>
    );
};

export default Hero;
