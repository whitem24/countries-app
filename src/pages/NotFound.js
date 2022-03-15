import React from 'react';
import '../components/styles/Errors.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="error-section">  
        
            <h3>
                404
            </h3>

            <div clasName="text-error">
                Page Could Not Be Found 
            </div>

           
            <div>
                <Link to="/" className="btn-error">Back to home</Link>
            </div>        
    </div>
)

export default NotFound