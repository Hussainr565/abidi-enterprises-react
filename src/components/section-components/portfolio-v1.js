import React, { useState } from 'react';
import './portfolio-v1.css'; // Import CSS file for styling

const PortfolioV1 = () => {

    const [filter, setFilter] = useState('all');

    let publicUrl = process.env.PUBLIC_URL+'/';

    let data = [
        { id: 1, category: 'filter_category_1', img: 'project-19.jpg' },
        { id: 2, category: 'filter_category_2', img: 'project-2.jpg' },
        { id: 3, category: 'filter_category_3', img: 'project-3.jpg' },
        { id: 4, category: 'filter_category_3', img: 'project-4.jpg' },
        { id: 5, category: 'filter_category_2', img: 'project-5.jpg' },
        { id: 6, category: 'filter_category_1', img: 'project-6.jpg' },
		{ id: 7, category: 'filter_category_1', img: 'project-7.jpg' },
		{ id: 8, category: 'filter_category_1', img: 'project-8.jpg' },
		{ id: 9, category: 'filter_category_1', img: 'project-9.jpg' },
		{ id: 10, category: 'filter_category_1', img: 'project-10.jpg' },
		{ id: 11, category: 'filter_category_1', img: 'project-11.jpg' },
		{ id: 12, category: 'filter_category_1', img: 'project-12.jpg' },
		{ id: 13, category: 'filter_category_1', img: 'project-13.jpg' },
		{ id: 14, category: 'filter_category_1', img: 'project-14.jpg' },
		{ id: 15, category: 'filter_category_1', img: 'project-15.jpg' },
		{ id: 16, category: 'filter_category_1', img: 'project-16.jpg' },
		{ id: 17, category: 'filter_category_1', img: 'project-17.jpg' },
		{ id: 18, category: 'filter_category_1', img: 'project-18.jpg' },
		{ id: 19, category: 'filter_category_1', img: 'project-1.jpg' },
        // add more items here...
    ];

    let filteredData = filter === 'all' ? data : data.filter(item => item.category === filter);

    return (
        <div>
            {/* Filter buttons */}
            <div className="filter-buttons">
                <button className="filter-button" onClick={() => setFilter('all')}>All</button>
                <button className="filter-button" onClick={() => setFilter('filter_category_1')}>Category 1</button>
                <button className="filter-button" onClick={() => setFilter('filter_category_2')}>Category 2</button>
                <button className="filter-button" onClick={() => setFilter('filter_category_3')}>Category 3</button>
            </div>

            <div className="ltn__gallery-area mb-120">
                <div className="container">
                    <div className="ltn__gallery-active row ltn__gallery-style-2">
                        <div className="ltn__gallery-sizer col-4" />
                        {filteredData.map(item => (
                            <div className={`ltn__gallery-item col-lg-4 col-md-4 col-sm-4 col-12`} key={item.id}>
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <a href={publicUrl + "assets/img/gallery/" + item.img} data-rel="lightcase:myCollection">
                                            <img src={publicUrl + "assets/img/gallery/" + item.img} alt="Image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioV1;
