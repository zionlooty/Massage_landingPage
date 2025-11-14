// // src/components/BookingForm.jsx
// import { useState } from 'react';
// import { toast } from 'react-toastify';

// const BookingForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     preferredDate: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success('Booking successful! We’ll contact you soon.');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           service: '',
//           preferredDate: '',
//           message: '',
//         });
//         onClose(); // close modal on success
//       } else {
//         toast.error(data.message || 'Booking failed');
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
//         >
//           &times;
//         </button>
//         <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-6">
//           Book a Session
//         </h2>
//         <form onSubmit={handleSubmit} className="grid gap-6">
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="input" />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="input" />
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="input" />
//           <select name="service" value={formData.service} onChange={handleChange} required className="input bg-white">
//             <option value="">Select Service</option>
//             <option value="Deep Tissue Massage">Deep Tissue Massage</option>
//             <option value="Hot Stone Therapy">Hot Stone Therapy</option>
//             <option value="Aromatherapy">Aromatherapy</option>
//           </select>
//           <input type="datetime-local" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required className="input" />
//           <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any additional message" rows="4" className="input" />
//           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
