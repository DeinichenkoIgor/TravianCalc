"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Node = {
  type: string;
  position: number;
};

type PlannerContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  serverSpeed: number;
  setServerSpeed: React.Dispatch<React.SetStateAction<number>>;
};

const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

export const PlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nodes, setNodes] = useState<Node[]>(() => {
    if (typeof window !== "undefined") {
      const savedNodes = localStorage.getItem("plannerNodes");
      return savedNodes ? JSON.parse(savedNodes) : [];
    }
    return [];
  });

  const [serverSpeed, setServerSpeed] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedSpeed = localStorage.getItem("serverSpeed");
      return savedSpeed ? Number(savedSpeed) : 1;
    }
    return 1;
  });

  useEffect(() => {
    localStorage.setItem("plannerNodes", JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem("serverSpeed", String(serverSpeed));
  }, [serverSpeed]);

  return (
    <PlannerContext.Provider value={{ nodes, setNodes, serverSpeed, setServerSpeed }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlanner = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error("usePlanner must be used within a PlannerProvider");
  }
  return context;
};
