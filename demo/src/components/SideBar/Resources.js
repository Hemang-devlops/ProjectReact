import React from 'react'
// import VideoCard from '../VideoCard';

function Resources() {
    const data = [
        {
            id: 0,
            name: "Resources Embed",
            items: [
                {
                    id: 0,
                    title: "Resources US",
                },
                {
                    id: 1,
                    title: "UK Resources",
                },
                {
                    id: 2,
                    title: " India Resources",
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
                            // <VideoCard videoSrc={video.id} title={video.title} />
                        ))}
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Resources