
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface Order {
  id: string;
  created_at: string;
  status: string;
  total: number;
  items: Array<{
    id: string;
    product_name: string;
    quantity: number;
    price: number;
  }>;
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      try {
        // Fetch profile data
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        // Fetch orders with their items
        const { data: orderData } = await supabase
          .from('orders')
          .select(`
            *,
            items:order_items(*)
          `)
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false });

        if (profileData) setProfile(profileData);
        if (orderData) setOrders(orderData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Profile Information</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <p>{profile?.full_name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p>{profile?.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Order History</h2>
          {orders.length === 0 ? (
            <p className="text-muted-foreground">No orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Order placed: {new Date(order.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-sm font-medium">Status: {order.status}</p>
                      </div>
                      <p className="font-medium">Total: ${order.total}</p>
                    </div>
                    <div className="divide-y">
                      {order.items.map((item) => (
                        <div key={item.id} className="py-4">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{item.product_name}</p>
                              <p className="text-sm text-muted-foreground">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                            <p>${item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
