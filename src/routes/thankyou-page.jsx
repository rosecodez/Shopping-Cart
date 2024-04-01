import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const redirectTimer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(redirectTimer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
        navigate("/page/homepage");
        }
    }, [countdown, navigate]);

    return (
    <div>
        <h3>Thank you for your order!</h3>
        <h5>You will be redirected to the main page in {countdown} seconds</h5>
    </div>
    );
}
