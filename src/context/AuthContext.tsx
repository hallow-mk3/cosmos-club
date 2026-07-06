import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  username: string;
  country: string;
  age: number;
  memberNumber: number;
  loginCount: number;
  badge: 'Elite' | 'Supporter' | 'None';
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  totalMembers: number;
  login: (username: string, country: string, age: number) => void;
  googleLogin: () => void;
  logout: () => void;
  incrementLoginCount: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [totalMembers, setTotalMembers] = useState<number>(88); // Pre-seeded members count

  // Load user and total members from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('cosmos_club_user');
    const savedTotalMembers = localStorage.getItem('cosmos_club_total_members');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedTotalMembers) {
      setTotalMembers(parseInt(savedTotalMembers, 10));
    } else {
      // Seed a random number of members between 40 and 95
      const seeded = Math.floor(Math.random() * 55) + 40;
      setTotalMembers(seeded);
      localStorage.setItem('cosmos_club_total_members', seeded.toString());
    }
  }, []);

  const login = (username: string, country: string, age: number) => {
    // If user already exists in storage with this username, load their count
    const existingData = localStorage.getItem(`cosmos_user_${username}`);
    let memberNum = totalMembers + 1;
    let currentLoginCount = 1;

    if (existingData) {
      const parsed = JSON.parse(existingData);
      memberNum = parsed.memberNumber;
      currentLoginCount = parsed.loginCount + 1;
    } else {
      // New user registration
      const newTotal = totalMembers + 1;
      setTotalMembers(newTotal);
      localStorage.setItem('cosmos_club_total_members', newTotal.toString());
    }

    let badge: 'Elite' | 'Supporter' | 'None' = 'None';
    if (memberNum <= 100) {
      badge = 'Elite';
    } else if (memberNum <= 1000) {
      badge = 'Supporter';
    }

    const profile: UserProfile = {
      username,
      country,
      age,
      memberNumber: memberNum,
      loginCount: currentLoginCount,
      badge
    };

    setUser(profile);
    localStorage.setItem('cosmos_club_user', JSON.stringify(profile));
    localStorage.setItem(`cosmos_user_${username}`, JSON.stringify(profile));
  };

  const googleLogin = () => {
    // Simulate high-fidelity Google OAuth pop-up and profile completion
    const simulatedGoogleUsernames = ['astrophysics_scholar', 'nebula_hunter', 'hubble_fan', 'stargazer_mit', 'ivy_astro'];
    const randomUsername = simulatedGoogleUsernames[Math.floor(Math.random() * simulatedGoogleUsernames.length)] + '_' + Math.floor(Math.random() * 100);
    const randomCountries = ['United States', 'India', 'United Kingdom', 'Germany', 'Japan', 'Canada'];
    const randomCountry = randomCountries[Math.floor(Math.random() * randomCountries.length)];
    const randomAge = Math.floor(Math.random() * 30) + 20;

    login(randomUsername, randomCountry, randomAge);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cosmos_club_user');
  };

  const incrementLoginCount = () => {
    if (user) {
      const updated = { ...user, loginCount: user.loginCount + 1 };
      setUser(updated);
      localStorage.setItem('cosmos_club_user', JSON.stringify(updated));
      localStorage.setItem(`cosmos_user_${user.username}`, JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      totalMembers,
      login,
      googleLogin,
      logout,
      incrementLoginCount
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
