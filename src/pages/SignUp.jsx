// import { register } from '../api/auth';
import { Link } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

const Signup = () => {
  // const navigate = useNavigate();

  const handleSignup = async (formData) => {
    // try {
    //   const response = await register(formData); // 인증 서버 회원가입 요청
    //   response.success && navigate('/login');
    // } catch (error) {
    //   throw new Error(error);
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-extrabold w-full">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p className="mt-7">
            이미 계정이 있으신가요?&nbsp;
            <Link to="/signin" className="text-red-500 font-semibold">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
