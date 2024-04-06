import React ,{ useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Cookies from 'js-cookie'; // Import js-cookie


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost/api/login', { // Assuming the API is hosted on the same domain
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log('Login successful:', data);
        // Handle successful login here (e.g., redirect, store token)
        Cookies.set('token', data.token, { expires: 7 }); 

        window.location.href = "/business";
      } else {
        console.error('Login failed:', data.message);
        // Handle login failure here (e.g., show error message)
      }
    } catch (error) {
      console.error('Error making login request:', error);
      // Handle network error here
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <form onSubmit={handleLogin}>
        <CardHeader className="space-y-2">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="flex">
          <Button className="ml-auto" type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Login;