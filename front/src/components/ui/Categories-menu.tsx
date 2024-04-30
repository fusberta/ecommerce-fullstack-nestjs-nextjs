"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { categories } from "@/assets/constants";

export function CategoriesMenu() {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={categories} />
        </div>
    );
}
