import React from 'react';
import '../styles/Rating.css';

export default function Rating(props) {
    return (
        <span className="Rating">
            <svg className="Rating-stars" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        className={props.rating >= 0.5 ? 'star-1' : ''}
                        d="M12 18l-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                    />
                    <path
                        className={props.rating >= 1.5 ? 'star-2' : ''}
                        d="M46 18l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L46 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                    />
                    <path
                        className={props.rating >= 2.5 ? 'star-3' : ''}
                        d="M80 18l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L80 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                    />
                    <path
                        className={props.rating >= 3.5 ? 'star-4' : ''}
                        d="M114 18l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L114 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                    />
                    <path
                        className={props.rating >= 4.5 ? 'star-1' : ''}
                        d="M148 18l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L148 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                    />
                </g>
            </svg>
        </span>
    );
}
