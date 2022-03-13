import React from 'react';
import '../components/styles/Errors.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div class="row justify-content-center">
    <div class="col-md-4 col-sm-4">
        <div class="card align-middle shadow-lg border-0 rounded-lg mt-5 mx-auto">
            <h3 class="card-header display-1 text-muted text-center">
                404
            </h3>

            <span class="card-subtitle mb-2 text-muted text-center">
                Page Could Not Be Found 
            </span>

            <div class="card-body mx-auto">
                <div className="button add-list-button">
                    <Link to="/"><button type="button" className="btn">Back to home</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default NotFound