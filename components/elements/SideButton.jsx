import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideButton({ link, title, left = false, right = false }) {

    const router = useRouter()

    const lorr = () => {
        if (left) { return "left" }
        return "right";
    }

    return (

        
            <button
                className={`button-animated ba-${lorr()} fixed-${lorr()}`}
                onClick={() => router.push(link)}
            >
                {left &&
                    <span className="button-animated-text" >
                        {"<"}
                    </span>
                }
                <span className="button-animated-hover" > {title} </span>
                {right &&
                    <span className="button-animated-text" >
                        {">"}
                    </span>
                }
            </button>
        

    )
}
