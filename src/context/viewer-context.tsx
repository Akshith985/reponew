'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ViewerType = 'developer' | 'recruiter' | null;

type ViewerContextType = {
  viewerType: ViewerType;
  setViewerType: (viewerType: ViewerType) => void;
};

const ViewerContext = createContext<ViewerContextType | undefined>(undefined);

export const ViewerProvider = ({ children }: { children: ReactNode }) => {
  const [viewerType, setViewerType] = useState<ViewerType>(null);

  return (
    <ViewerContext.Provider value={{ viewerType, setViewerType }}>
      {children}
    </ViewerContext.Provider>
  );
};

export const useViewer = () => {
  const context = useContext(ViewerContext);
  if (context === undefined) {
    throw new Error('useViewer must be used within a ViewerProvider');
  }
  return context;
};
