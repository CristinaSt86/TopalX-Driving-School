// src/react-helmet-async.d.ts
declare module 'react-helmet-async' {
    import * as React from 'react';
  
    export interface HelmetProviderProps {
      children: React.ReactNode;
    }
  
    export class HelmetProvider extends React.Component<HelmetProviderProps, any> {}
  
    export interface HelmetProps {
      children?: React.ReactNode;
    }
  
    export class Helmet extends React.Component<HelmetProps, any> {}
  }
  