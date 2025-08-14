'use client'

import { Dock, DockIcon } from "./magicui/dock";
import React from "react";

export const TechDock = ({ classname, icons }: { classname?: string, icons: React.JSX.Element[] }) => (
    <div className={`relative ${classname}`}>
        <Dock iconMagnification={50} direction="middle">
            {
                icons.map((Icon, index) =>
                    <DockIcon className="" key={index}>
                        {Icon}
                    </DockIcon>
                )
            }
        </Dock>
    </div>
)