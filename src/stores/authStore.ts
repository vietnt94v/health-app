import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  markLoggedIn: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: false,
  isAuthLoading: false,

  markLoggedIn: async () => {
    set({ isAuthLoading: true });
    // Simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ isLoggedIn: true, isAuthLoading: false });
    } catch (error) {
      throw new Error(`Error: ${(error as Error).message}`);
    } finally {
      set({ isAuthLoading: false });
    }
  },
}));

export const useAuth = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const markLoggedIn = useAuthStore(state => state.markLoggedIn);
  const isAuthLoading = useAuthStore(state => state.isAuthLoading);

  return { isLoggedIn, isAuthLoading, markLoggedIn };
};

export default useAuthStore;
