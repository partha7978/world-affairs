import React from "react";
import "./Category.css";

export default function Category() {
    return (
        <div className="category-section-parent">
            <div className="category-section-child">
                <div className="upper-category-section">
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category1</h1>
                        </div>
                    </div>
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category2</h1>
                        </div>
                    </div>
                </div>
                <div className="lower-category-section">
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category1</h1>
                        </div>
                    </div>
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category2</h1>
                        </div>
                    </div>
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category1</h1>
                        </div>
                    </div>
                    <div className="category-section">
                        <div className="category-section-child">
                            <h1>Category2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
