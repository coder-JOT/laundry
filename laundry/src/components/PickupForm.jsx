import React from 'react'

const PickupForm = ({showForm, setShowForm, handleSubmit}) => {
    return (
        showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
                    <button onClick={() => setShowForm(false)} className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-700">&times;</button>
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Schedule a Pickup</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input name="name" type="text" placeholder="Name" className="w-full p-3 border rounded-lg" required />
                        <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full p-3 border rounded-lg" required />
                        <textarea name="address" placeholder="Address" className="w-full p-3 border rounded-lg" required></textarea>
                        <textarea name="notes" placeholder="Notes (optional)" className="w-full p-3 border rounded-lg"></textarea>
                        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">Send via WhatsApp</button>
                    </form>
                </div>
            </div>
        )
)
}
export default PickupForm
