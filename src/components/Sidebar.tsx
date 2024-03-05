"use client";
import {
  AnimationScope,
  motion,
  useAnimate,
  useDragControls,
} from "framer-motion";
import React, { useContext, useEffect, useState } from "react";

type SidebarProps = {
  status: boolean;
  setStatus: () => void;
  scope: AnimationScope<any>;
};

const Sidebar = ({ status, setStatus, scope }: SidebarProps) => {
  useEffect(() => {}, [status]);
  const dragControls = useDragControls();

  const [ableToOrigin, setAbleToOrigin] = useState(false);

  const handleDrag = (event: any, v: number) => {
    setTimeout(() => {
      setStatus();
    }, 500);
  };

  return (
    <div
      ref={scope}
      className={`h-screen w-[70%] fixed left-0 top-0 translate-x-[-100%] ${
        status ? "z-40" : "z-0"
      }`}
    >
      <motion.div
        drag="x"
        // dragControls={dragControls}
        onDragEnd={(event, info) => handleDrag(event, info.point.x)}
        dragMomentum={false}
        dragSnapToOrigin={true}
        dragConstraints={{ left: -300, right: 300 }}
        className="h-screen w-full z-40 fixed left-0 top-0 bg-white shadow-lg border-r border-zinc-100"
      >
        dasdasdojnasn
      </motion.div>
    </div>
  );
};

export default Sidebar;
