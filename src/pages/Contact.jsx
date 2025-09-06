// import { useState } from 'react';

// export default function Contact({ isDarkMode }) {
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${contactForm.name}! I'll get back to you soon. 📧`);
//     setContactForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//       <div className="max-w-2xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
//         <p className="text-center mb-12 text-lg">
//           I'm open to collaborating on interesting projects. Let's work together!
//         </p>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 font-semibold">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={contactForm.name}
//               onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Email</label>
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={contactForm.email}
//               onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Message</label>
//             <textarea
//               placeholder="Your Message"
//               rows="5"
//               value={contactForm.message}
//               onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
//           >
//             Send Message 📧
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// import { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
// export default function Contact({ isDarkMode }) {
//   const { user, loading, signInWithGoogle, logout } = useAuth();
//   // console.log(user.email,user.displayName);
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email:  '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Auto-fill form when user logs in
//   useState(() => {
//     if (user) {
//       setContactForm(prev => ({
//         ...prev,
//         name: user.displayName || '',
//         email: user.email || ''
//       }));
//     }
//   }, [user]);
// //   useEffect(() => {
// //   if (user) {
// //     setContactForm(prev => ({
// //       ...prev,
// //       name: user.displayName || '',
// //       email: user.email || ''
// //     }));
// //   }
// // }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission (replace with your actual submission logic)
//     try {
//       console.log('Submitted by:', {
//         ...contactForm,
//         userInfo: {
//           uid: user.uid,
//           email: user.email,
//           name: user.displayName,
//           photo: user.photoURL
//         }
//       });
      
//       alert(`Thank you ${user.displayName}! Your message has been sent. I'll reply to ${user.email} soon. 📧`);
//       setContactForm({ name: '', email: '', message: '' });
//     } catch (error) {
//       alert('Error sending message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//         <div className="max-w-2xl mx-auto px-4 text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4">Loading...</p>
//         </div>
//       </section>
//     );
//   }

//   // User NOT logged in - Show sign-in prompt
//   // if (!user) {
//   //   return (
//   //     <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//   //       <div className="max-w-2xl mx-auto px-4 text-center">
//   //         <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//   //           <div className="mb-6">
//   //             <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//   //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//   //             </svg>
//   //             <h2 className="text-3xl font-bold mb-4">Verified Contact Only</h2>
//   //             <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//   //               To ensure quality conversations and reduce spam, please sign in with Google to contact me.
//   //             </p>
//   //             <p className="text-sm text-blue-600 mb-6">
//   //               ✅ Your information is secure and never shared<br/>
//   //               ✅ I only use it to respond to your message<br/>
//   //               ✅ No spam or promotional emails
//   //             </p>
//   //           </div>

//   //           <button
//   //             onClick={signInWithGoogle}
//   //             className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
//   //           >
//   //             <svg className="w-5 h-5" viewBox="0 0 24 24">
//   //               <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//   //               <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//   //               <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//   //               <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   //             </svg>
//   //             <span>Continue with Google</span>
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </section>
//   //   );
//   // }

// // In src/pages/Contact.jsx - replace the "not logged in" section:

// if (!user) {
//   return (
//     <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//       <div className="max-w-2xl mx-auto px-4 text-center">
//         <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//           <div className="mb-6">
//             <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             <h2 className="text-3xl font-bold mb-4">Verified Contact Only</h2>
//             <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               To ensure quality conversations and reduce spam, please sign in with Google to contact me.
//             </p>
//             <p className="text-sm text-blue-600 mb-6">
//               ✅ Your information is secure and never shared<br/>
//               ✅ I only use it to respond to your message<br/>
//               ✅ No spam or promotional emails
//             </p>
//           </div>

//           <Link
//             to="/login"
//             className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//               <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//               <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//               <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//             </svg>
//             <span>Sign In to Continue</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


//   // User IS logged in - Show contact form
//   return (
//     <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//       <div className="max-w-2xl mx-auto px-4">
        
//         {/* User Info Header */}
//         <div className={`p-4 rounded-lg mb-6 flex items-center justify-between ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
//           <div className="flex items-center space-x-3">
//             <img 
//               src={user.photoURL} 
//               alt={user.displayName}
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-semibold">{user.displayName}</p>
//               <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{user.email}</p>
//             </div>
//           </div>
//           <button
//             onClick={logout}
//             className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             Sign Out
//           </button>
//         </div>

//         <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
//         <p className="text-center mb-8 text-lg">
//           Thanks for signing in! I'll respond to your verified email address.
//         </p>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 font-semibold">Name</label>
//             <input
//               type="text"
//               value={contactForm.name}
//               onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//               placeholder="Your full name"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Email</label>
//             <input
//               type="email"
//               value={contactForm.email}
//               onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//               placeholder="your.email@gmail.com"
//             />
//             <p className="text-xs text-green-600 mt-1">✅ Verified with Google</p>
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Message</label>
//             <textarea
//               rows="6"
//               value={contactForm.message}
//               onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//               className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//               required
//               placeholder="Tell me about your project, question, or how we can work together..."
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 Sending Message...
//               </>
//             ) : (
//               <>
//                 Send Verified Message 📧
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Contact({ isDarkMode }) {
  const { user, loading } = useAuth();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill form when user logs in
  useEffect(() => {
    if (user) {
      setContactForm(prev => ({
        ...prev,
        name: user.displayName || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      console.log('Submitted by:', {
        ...contactForm,
        userInfo: {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photo: user.photoURL
        }
      });
      
      alert(`Thank you ${user.displayName}! Your message has been sent. I'll reply to ${user.email} soon. 📧`);
      setContactForm(prev => ({ ...prev, message: '' })); // Only clear message, keep name/email
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </section>
    );
  }

  // User NOT logged in - Show sign-in prompt
  if (!user) {
    return (
      <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl font-bold mb-4">Verified Contact Only</h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To ensure quality conversations and reduce spam, please sign in with Google to contact me.
              </p>
              <div className="text-sm text-blue-600 mb-6 space-y-1">
                <p>✅ Your information is secure and never shared</p>
                <p>✅ I only use it to respond to your message</p>
                <p>✅ No spam or promotional emails</p>
              </div>
            </div>

            <Link
              to="/login"
              className="inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign In to Continue</span>
            </Link>

            <div className="mt-6">
              <Link 
                to="/" 
                className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // User IS logged in - Show contact form
  return (
    <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4">
        
        {/* User Info Header */}
        <div className={`p-4 rounded-lg mb-6 flex items-center justify-between ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
          <div className="flex items-center space-x-3">
            <img 
              src={user.photoURL} 
              alt={user.displayName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.displayName}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400':'-gray-600'}`}>{user.email}</p>
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              ✅ Verified
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <p className="text-center mb-8 text-lg">
          Thanks for signing in! I'll respond to your verified email address.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
              placeholder="your.email@gmail.com"
            />
            <p className="text-xs text-green-600 mt-1">✅ Verified with Google</p>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              rows="6"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              required
              placeholder="Tell me about your project, question, or how we can work together..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                Send Verified Message 📧
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your message will be sent from your verified Google account. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}