/* eslint-disable no-undef */
export const getAuth = jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: {} })),
    signOut: jest.fn(() => Promise.resolve()),
  }));
  
  export const GoogleAuthProvider = jest.fn();
  export const signInWithPopup = jest.fn(() => Promise.resolve({ user: {} }));
  export const initializeApp = jest.fn();
  export const getAnalytics = jest.fn();
  export const getFirestore = jest.fn();
  jest.mock('../services/firebase', () => ({
    auth: jest.fn(),
    provider: jest.fn(),
  }));
  