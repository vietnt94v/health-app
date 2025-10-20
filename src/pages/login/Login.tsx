import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui";
import { useAuth } from "@/stores";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { markLoggedIn } = useAuth();
  const navigationFrom = location.state?.from || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Allow login with any username/password for demo purposes
    markLoggedIn();
    navigate(navigationFrom, { replace: true });
  };

  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="max-w-[500px] w-full p-10 border border-primary-300 shadow-lg rounded -mt-40">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="username" className="block font-bold mb-1">
              ユーザー名
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border w-full rounded px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold mb-1">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border w-full rounded px-4 py-3"
            />
          </div>
          <div className="text-center">
            <Button>ログイン</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
