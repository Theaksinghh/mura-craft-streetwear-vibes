
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { AuthForm } from '@/components/auth/AuthForm';

export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/profile');
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      <AuthForm />
    </div>
  );
}
