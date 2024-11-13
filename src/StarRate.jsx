import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div style={{display:"flex" ,flexDirection:"row", justifyContent: "center", height:"100vh", alignItems:"center"}}>
            {[...Array(5)].map((_, index) => {
                const currentRate = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rate"
                            value={currentRate}
                            onClick={() => setRating(currentRate)}
                            style={{ display: "none" }} 
                        />
                        <FaStar
                            size={50}
                            color={currentRate <= (hover || rating) ? "yellow" : "grey"}
                            onMouseEnter={() => setHover(currentRate)}
                            onMouseLeave={() => setHover(null)}
                            
                        />
                    </label>
                );
            })}
        </div>
    );

    
    }
    
