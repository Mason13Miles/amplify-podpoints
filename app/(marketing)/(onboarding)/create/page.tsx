// import React from 'react'
// import { Button } from '../../../components/ui/button'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <Button variant="ghost" asChild>
//     <Link href="/demonstration">Continue</Link>
//   </Button>
//   )
// }

// export default page

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '../../../firebase/config'
// import { getAuth } from 'firebase/auth';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import Link from 'next/link';

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const auth = getAuth();
//   const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//       await createUserWithEmailAndPassword(email, password);
//     try {
//       await createUserWithEmailAndPassword(email, password);
//       router.push('/dashboard'); // Redirect to dashboard or desired page after sign-up
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h1>
//         <p className="text-sm text-center text-gray-600 mt-2">
//           Already have an account?{' '}
//           <Link href="/signin" className="text-blue-500 hover:underline">
//             Sign In
//           </Link>
//         </p>

//         {error && <p className="text-sm text-red-500 mt-4">{error}</p>}

//         <form className="mt-6" onSubmit={handleSignUp}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <div className="text-sm text-gray-600 mb-4">
//             By signing up, you agree to our{' '}
//             <Link href="/terms" className="text-blue-500 hover:underline">
//               Terms of Service
//             </Link>{' '}
//             and{' '}
//             <Link href="/privacy" className="text-blue-500 hover:underline">
//               Privacy Policy
//             </Link>.
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full px-4 py-2 text-white rounded-lg ${
//               loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
//             } focus:outline-none focus:ring focus:ring-blue-300`}
//           >
//             {loading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '../../../firebase/config'; // Ensure correct Firebase import
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import Link from 'next/link';

// export default function SignUp() {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   const [createUserWithEmailAndPassword, user, firebaseLoading, firebaseError] =
//     useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       await createUserWithEmailAndPassword(email, password);
//       if (user) {
//         router.push('/demonstration'); 
//       }
//     } catch (err) {
//       setError('Failed to create account. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mt-40 flex items-center justify-center">
//       <div className="w-full max-w-md p-8 rounded-lg shadow-lg border-solid border-mid-gray">
//         <h1 className="text-2xl font-semibold text-left text-blue-gray-600">Create Account</h1>

//         {(error || firebaseError) && (
//           <p className="text-sm text-red-500 mt-4">{error || firebaseError?.message}</p>
//         )}

//         <form className="mt-6" onSubmit={handleSignUp}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-black">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password1" className="block text-gray-700">
//               Verify Password
//             </label>
//             <input
//               id="password1"
//               type="password"
//               placeholder="re-enter your password"
//               value={password1}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
//             />
//           </div>


//           <button
//             type="submit"
//             disabled={loading || firebaseLoading}
//             className={`w-full px-4 py-2 text-white rounded-lg ${
//               loading || firebaseLoading ? 'bg-gray' : 'bg-blue-gray-600 hover:bg-cool-gray'
//             } focus:outline-none focus:ring focus:ring-blue-300`}
//           >
//             {loading || firebaseLoading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//           <p className="text-sm text-center text-gray-600 mt-2">
//           Already have an account?{' '}
//           <Link href="/signin" className="text-blue-500 hover:underline">
//             Sign In
//           </Link>
//         </p>
//         <div className="text-sm text-gray-600 mt-2 flex flex-wrap justify-center">
//             By signing up, you agree to our{' '}
//             <Link href="/terms" className="text-blue-500 hover:underline">
//               Terms of Service
//             </Link>{' '}
//             and{' '}
//             <Link href="/privacy" className="text-blue-600 hover:underline">
//               Privacy Policy
//             </Link>.
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '../../../firebase/config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [createUserWithEmailAndPassword, user, firebaseLoading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      if (userCredential?.user) {
        const { uid, email } = userCredential.user;

        // ✅ Firestore Document Creation
        await setDoc(doc(db, 'users', uid), {
          uid,
          email,
          createdAt: new Date().toISOString(),
          role: 'free', // Default role (customize if needed)
        });

        console.log('User document created successfully!'); // ✅ Debugging log

        router.push('/demonstration'); // Redirect after successful sign-up
      } else {
        console.error('User credential is undefined.');
        setError('Failed to create user.');
      }
    } catch (err) {
      console.error('Firestore Error:', err); // ✅ Debugging log
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-2xl font-semibold text-left text-blue-gray-600">Create Account</h1>

        {(error || firebaseError) && (
          <p className="text-sm text-red-500 mt-4">{error || firebaseError?.message}</p>
        )}

        <form className="mt-6" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Verify Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading || firebaseLoading}
            className={`w-full px-4 py-2 text-white rounded-lg ${
              loading || firebaseLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            } focus:outline-none focus:ring focus:ring-blue-300`}
          >
            {loading || firebaseLoading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className="text-sm text-center text-gray-600 mt-2">
            Already have an account?{' '}
            <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
          </p>

          <div className="text-sm text-gray-600 mt-2 flex flex-wrap justify-center">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </div>
        </form>
      </div>
    </div>
  );
}

