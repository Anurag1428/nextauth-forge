"use client"

import { ErrorCard } from "@/components/auth/error-card";
import { useEffect, useState } from "react";

const AuthErrorPage3DIsometric = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Pre-calculated values to avoid Math.random() during SSR
    const particleData = [
        { left: 25.5, top: 32.1, delay: 0.8, duration: 3.2 },
        { left: 68.2, top: 45.7, delay: 1.5, duration: 2.8 },
        { left: 42.3, top: 58.9, delay: 2.1, duration: 3.5 },
        { left: 71.8, top: 28.4, delay: 0.3, duration: 4.1 },
        { left: 35.6, top: 67.2, delay: 1.8, duration: 2.9 },
        { left: 58.1, top: 41.6, delay: 0.9, duration: 3.7 },
        { left: 29.4, top: 52.3, delay: 2.5, duration: 3.1 },
        { left: 76.9, top: 38.8, delay: 1.2, duration: 2.6 },
        { left: 48.7, top: 61.5, delay: 0.6, duration: 3.8 },
        { left: 63.2, top: 34.7, delay: 2.2, duration: 2.7 },
        { left: 39.8, top: 69.1, delay: 1.4, duration: 3.4 },
        { left: 55.3, top: 26.9, delay: 0.4, duration: 4.0 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 via-purple-800 to-violet-900 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-radial from-pink-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-indigo-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Simplified 3D Isometric grid without Math calculations */}
            <div className="absolute inset-0 opacity-25">
                <div className="grid grid-cols-16 grid-rows-16 h-full w-full transform rotate-12 scale-125">
                    {[...Array(256)].map((_, i) => (
                        <div 
                            key={i} 
                            className="border border-white/10 hover:bg-gradient-to-br hover:from-purple-400/20 hover:to-pink-400/20 transition-all duration-1000 hover:scale-110 hover:rotate-45"
                            style={{ 
                                animationDelay: `${(i * 0.05).toFixed(2)}s`
                            }}
                        />
                    ))}
                </div>
            </div>
            
            {/* Enhanced 3D floating elements with more variety */}
            <div className="absolute inset-0">
                {/* Large geometric shapes */}
                <div className="absolute top-1/6 left-1/5 w-40 h-40 transform hover:scale-110 transition-all duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-red-400/40 to-red-600/40 transform rotate-45 animate-pulse shadow-2xl shadow-red-500/20 hover:shadow-red-500/40"></div>
                </div>
                <div className="absolute top-1/4 right-1/6 w-32 h-32 transform hover:scale-110 transition-all duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400/40 to-blue-600/40 transform -rotate-12 animate-bounce shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 rounded-lg"></div>
                </div>
                <div className="absolute bottom-1/5 left-1/4 w-36 h-36 transform hover:scale-110 transition-all duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/40 to-purple-600/40 transform rotate-12 animate-spin shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 rounded-full"></div>
                </div>

                {/* Medium floating elements */}
                <div className="absolute top-1/2 left-1/6 w-20 h-20 transform rotate-45 animate-pulse shadow-xl">
                    <div className="w-full h-full bg-gradient-to-tr from-emerald-400/30 to-emerald-600/30 rounded-lg"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-24 h-24 transform -rotate-12 animate-bounce shadow-xl">
                    <div className="w-full h-full bg-gradient-to-tr from-orange-400/30 to-orange-600/30 rounded-full"></div>
                </div>

                {/* Small particles - only render on client to avoid hydration issues */}
                {isClient && particleData.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-white/40 to-white/20 rounded-full animate-pulse shadow-lg"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            boxShadow: '0 0 20px rgba(255,255,255,0.3)'
                        }}
                    />
                ))}
            </div>
            
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="transform hover:scale-110 hover:rotate-2 transition-all duration-700 group">
                    {/* Enhanced card with multiple layers */}
                    <div className="relative">
                        {/* Outer glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 transform group-hover:scale-110"></div>
                        
                        {/* Shadow layer */}
                        <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500"></div>
                        
                        {/* Main card */}
                        <div className="relative bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-3xl border-2 border-purple-500/40 rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3 transition-all duration-500">
                            {/* Inner gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-pink-600/10 to-indigo-600/15 rounded-3xl group-hover:from-purple-600/25 group-hover:via-pink-600/20 group-hover:to-indigo-600/25 transition-all duration-500"></div>
                            
                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 p-0.5 animate-pulse">
                                <div className="w-full h-full bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-3xl"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <ErrorCard />
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-purple-400/60 rounded-tl-lg"></div>
                            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-pink-400/60 rounded-tr-lg"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-indigo-400/60 rounded-bl-lg"></div>
                            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-violet-400/60 rounded-br-lg"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating light rays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent transform rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent transform -rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
}

export default AuthErrorPage3DIsometric;