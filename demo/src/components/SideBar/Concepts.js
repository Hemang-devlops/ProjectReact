import React from 'react';
// import VideoCard from '../VideoCard';

function Concepts() {
    const data = [
        {
            id: 0,
            name: "Screening",
            items: [
                {
                    id: 0,
                    title: "Introduction to Screening",
                },
                {
                    id: 1,
                    title: "UK Sanctions and Embargoes",
                },
                {
                    id: 2,
                    title: "UK Restricted End Users",
                },
            ],
        },
        {
            id: 1, // Use unique IDs for each section
            name: "Exports",
            items: [
                {
                    id: 3, // Use unique IDs for each item
                    title: "Introduction to Exports",
                },
                {
                    id: 4, // Use unique IDs for each item
                    title: "Exporting Technical Information from the UK",
                },
                {
                    id: 5, // Use unique IDs for each item
                    title: "Exporting Technical Assistance from the UK",
                },
                {
                    id: 6, // Use unique IDs for each item
                    title: "Exporting Software",
                },
                {
                    id: 7, // Use unique IDs for each item
                    title: "Transshipment and Reexport",
                },
            ],
        },
        {
            id: 2, // Use unique IDs for each section
            name: "Brokering",
            items: [
                {
                    id: 8, // Use unique IDs for each item
                    title: "Introduction to Brokering",
                },
                {
                    id: 9, // Use unique IDs for each item
                    title: "UK Brokering Controls",
                },
            ],
        },
    ];

    return (
        <div>
            {data.map((section) => (
                <div key={section.id}>
                    <h2>{section.name}</h2>
                    <section>
                        {section.items.map((video) => (
                            <>{video.title}</>
                        ))}
                    </section>
                </div>
            ))}
        </div>
    );
}

export default Concepts;
