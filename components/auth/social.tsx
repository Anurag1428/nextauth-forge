"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
        <div className="flex w-full gap-4">
            <Button 
                size="lg"
                className="flex-1"
                variant="outline"
                onClick={() => {}}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button 
                size="lg"
                className="flex-1"
                variant="outline"
                onClick={() => {}}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
