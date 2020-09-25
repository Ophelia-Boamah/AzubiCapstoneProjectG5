import Router, { useRouter } from 'next/router';
import useAuth from '../../context/userContext';

export function ProtectRoute(Component) {
  return () => {
    const { isAuthenticated, loading } = useAuth();
    // const router = useRouter();

    React.useEffect(() => {
      if (!isAuthenticated && !loading) window.location.pathname = '/';
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
