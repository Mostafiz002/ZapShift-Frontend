import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h2 className="text-2xl font-semibold text-red-500">
                Payment Canceled
            </h2>

            <Link 
                to="/dashboard/my-parcels" 
                className="btn btn-primary text-black"
            >
                Back to My Parcels
            </Link>
        </div>
    );
};

export default PaymentCanceled;
