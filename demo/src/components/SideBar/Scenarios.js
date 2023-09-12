import React from 'react'
// import VideoCard from '../VideoCard';

function Scenarios() {
    const data = [
        {
            id: 0,
            name: "Scenarios Embded",
            items: [
                {
                    id: 0,
                    name: "Screening",
                    items: [
                        {
                            id: 0,
                            title: "Scenarios US",
                        },
                        {
                            id: 1,
                            title: "UK Scenarios",
                        },
                        {
                            id: 2,
                            title: " India Scenarios",
                        },
                    ],
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
                            <article className='ml-3'>{video.title}</article>
                            // <VideoCard videoSrc={video.id} title={video.title} />
                        ))}
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Scenarios