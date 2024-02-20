import { useState } from "react";
import "./Discover.css";

export default function Discover() {

    const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);


    const handleAdditionalFiltersToggle = () => {
        setAdditionalFiltersVisible(!additionalFiltersVisible);
    };

    return (

        <main className="discover-page">
            {/* TODO: Kamshajini: design the Discover Page */}
            <div className="discover-main-container">

                <div className="main-filters">

                    <div className="main-filters-heading">
                        <h3>main-filters</h3>
                    </div>

                    <div className="main-filter-section">

                        <div className="filter-by-species">
                            {/* select animal species from any, cat or dog */}
                        </div>

                    </div>
                </div>

                <div className="additional-filters `additional-filters ${additionalFiltersVisible ? 'visible' : 'hidden'}`">
                    <h3>additional-filters</h3>
                    <button onClick={handleAdditionalFiltersToggle}>
                        {additionalFiltersVisible ? 'Hide Additional Filters' : 'Show Additional Filters'}
                    </button>
                </div>

                <div className="posts-container">
                    <h3>posts-container</h3>
                </div>
            </div>
        </main>

    );
}